import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const blogsCollection = collection(db, "blogs");

// CREATE a blog post
export async function addBlog(title, content, userId, authorEmail = "") {
  return await addDoc(blogsCollection, {
    title,
    content,
    userId,
    authorEmail: authorEmail || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

// READ all blog posts (for community / dashboard feed)
export async function getAllBlogs(currentUserId = null) {
  try {
    const snapshot = await getDocs(blogsCollection);
    const blogs = snapshot.docs.map((blogDoc) => ({
      id: blogDoc.id,
      ...blogDoc.data(),
    }));
    return {
      blogs: sortBlogs(blogs),
      permissionRestricted: false,
    };
  } catch (error) {
    console.warn("Error fetching all blogs:", error?.message || error);

    // If Firestore rules currently prevent reading other users' posts
    if (error.code === "permission-denied" && currentUserId) {
      console.warn(
        "Firestore rules restrict community reads. Falling back to personal blogs while alerting user."
      );
      try {
        const personalBlogs = await getBlogs(currentUserId);
        return {
          blogs: personalBlogs,
          permissionRestricted: true,
          originalError: error,
        };
      } catch {
        throw error;
      }
    }

    throw error;
  }
}

function sortBlogs(blogs) {
  return [...blogs].sort((a, b) => {
    const getTime = (val) => {
      if (!val) return 0;
      if (typeof val.toMillis === "function") return val.toMillis();
      if (val.seconds) return val.seconds * 1000;
      if (val instanceof Date) return val.getTime();
      if (typeof val === "number") return val;
      const parsed = new Date(val).getTime();
      return isNaN(parsed) ? 0 : parsed;
    };
    return getTime(b.createdAt) - getTime(a.createdAt);
  });
}

// READ blog posts belonging to a user
export async function getBlogs(userId) {
  if (!userId) return [];

  try {
    // Attempt query with orderBy (requires composite index if where + orderBy used together)
    const blogsQuery = query(
      blogsCollection,
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(blogsQuery);

    return snapshot.docs.map((blogDoc) => ({
      id: blogDoc.id,
      ...blogDoc.data(),
    }));
  } catch (error) {
    // If composite index is missing or query fails, fallback to simple where query + client sort
    console.warn(
      "Firestore ordered query failed (possibly missing composite index). Falling back to client-side sorting:",
      error?.message || error
    );

    const fallbackQuery = query(
      blogsCollection,
      where("userId", "==", userId)
    );

    const snapshot = await getDocs(fallbackQuery);
    const blogs = snapshot.docs.map((blogDoc) => ({
      id: blogDoc.id,
      ...blogDoc.data(),
    }));

    return sortBlogs(blogs);
  }
}

// READ a single blog post
export async function getBlogById(blogId) {
  const blogRef = doc(db, "blogs", blogId);
  const snapshot = await getDoc(blogRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

// UPDATE a blog post
export async function updateBlog(blogId, title, content) {
  const blogRef = doc(db, "blogs", blogId);

  await updateDoc(blogRef, {
    title,
    content,
    updatedAt: serverTimestamp(),
  });
}

// DELETE a blog post
export async function deleteBlog(blogId) {
  const blogRef = doc(db, "blogs", blogId);

  await deleteDoc(blogRef);
}