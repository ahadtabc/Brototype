import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "../components/Navbar";
import { getBlogs, deleteBlog } from "../services/blogService";
import Popup from "../components/Popup";

function formatDate(timestamp) {
  if (!timestamp) return null;
  try {
    if (typeof timestamp.toDate === "function") {
      return timestamp.toDate().toLocaleString();
    }
    if (timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString();
    }
    if (timestamp instanceof Date) {
      return timestamp.toLocaleString();
    }
    const d = new Date(timestamp);
    return isNaN(d.getTime()) ? null : d.toLocaleString();
  } catch {
    return null;
  }
}

function UserBlog() {
  const { user } = useAuth();

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [loadedUserId, setLoadedUserId] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const loading = !user?.uid || loadedUserId !== user.uid;

  useEffect(() => {
    if (!user?.uid) return;

    let active = true;

    async function loadBlogs() {
      try {
        const data = await getBlogs(user.uid);
        if (active) {
          setBlogs(data || []);
          setError("");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        if (active) {
          setError(err.message || "Unable to load blogs. Please try again.");
        }
      } finally {
        if (active) {
          setLoadedUserId(user.uid);
        }
      }
    }

    void loadBlogs();

    return () => {
      active = false;
    };
  }, [user?.uid, reloadKey]);

  function fetchBlogs() {
    setError("");
    setLoadedUserId(null);
    setReloadKey((currentKey) => currentKey + 1);
  }

  async function confirmDelete() {
    if (!blogToDelete) return;

    setDeletingId(blogToDelete.id);
    setError("");

    try {
      await deleteBlog(blogToDelete.id);

      setBlogs((currentBlogs) =>
        currentBlogs.filter((blog) => blog.id !== blogToDelete.id)
      );
      setBlogToDelete(null);
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError("Unable to delete this blog. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="page-container">
          <p className="loading-message">Loading your blogs...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page-container">
        <header className="page-header">
          <div>
            <h1 className="page-title">My Blogs</h1>

            <div className="user-welcome">
              <span>Welcome,</span>
              <span className="user-highlight">{user?.email || "User"}</span>
            </div>

            <p className="welcome-text">
              Manage your personal posts.
            </p>
          </div>
        </header>

        {error && (
          <div style={{ marginBottom: "1rem" }}>
            <p className="error-message" role="alert">
              {error}
            </p>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={fetchBlogs}
              style={{ marginTop: "0.5rem" }}
            >
              Retry
            </button>
          </div>
        )}

        {blogs.length === 0 ? (
          <section className="empty-state">
            <h2>No blogs yet!</h2>

            <p>
              Your blog journey starts here. Create your first post.
            </p>

            <Link className="btn btn-primary" to="/blogs/new">
              Create Your First Blog
            </Link>
          </section>
        ) : (
          <section className="blog-list">
            {blogs.map((blog) => {
              const formattedDate = formatDate(blog.createdAt);
              return (
                <article className="blog-card" key={blog.id}>
                  <h2 className="blog-title">{blog.title}</h2>

                  <p className="blog-content">{blog.content}</p>

                  {formattedDate && (
                    <small className="blog-date">
                      Published: {formattedDate}
                    </small>
                  )}

                  <div className="blog-actions">
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => setBlogToDelete(blog)}
                      disabled={deletingId === blog.id}
                    >
                      {deletingId === blog.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>

                    <Link
                      className="btn btn-secondary"
                      to={`/blogs/edit/${blog.id}`}
                    >
                      Edit
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>
        )}

        <Popup
          isOpen={Boolean(blogToDelete)}
          title="Delete Blog"
          message={`Are you sure you want to delete "${blogToDelete?.title || "this blog"}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          loading={Boolean(deletingId)}
          onConfirm={confirmDelete}
          onCancel={() => {
            if (!deletingId) setBlogToDelete(null);
          }}
        />
      </main>
    </>
  );
}

export default UserBlog;