
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "../components/Navbar";
import {
  addBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../services/blogService";
import Popup from "../components/Popup";

function CreateBlog() {
  const { id } = useParams();
  const isEditing = Boolean(id);

  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    let active = true;

    async function loadBlog() {
      setLoading(true);
      setError("");

      try {
        const blog = await getBlogById(id);

        if (!active) return;

        if (!blog || blog.userId !== user?.uid) {
          setError("Blog not found or access denied.");
          return;
        }

        setTitle(blog.title);
        setContent(blog.content);
      } catch {
        if (active) {
          setError("Unable to load the blog. Please try again.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadBlog();

    return () => {
      active = false;
    };
  }, [id, user?.uid]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const cleanTitle = title.trim();
    const cleanContent = content.trim();

    if (!cleanTitle || !cleanContent) {
      setError("Please enter both a title and content.");
      return;
    }

    if (cleanTitle.length > 150) {
      setError("The title cannot exceed 150 characters.");
      return;
    }

    if (cleanContent.length > 20000) {
      setError("The content cannot exceed 20,000 characters.");
      return;
    }

    if (isEditing) {
      setShowUpdateModal(true);
      return;
    }

    await executeSave();
  }

  async function executeSave() {
    setSaving(true);
    setError("");

    const cleanTitle = title.trim();
    const cleanContent = content.trim();

    try {
      if (isEditing) {
        const blog = await getBlogById(id);

        if (!blog || blog.userId !== user?.uid) {
          setError("You cannot edit this blog.");
          setShowUpdateModal(false);
          return;
        }

        await updateBlog(id, cleanTitle, cleanContent);
      } else {
        await addBlog(cleanTitle, cleanContent, user?.uid, user?.email || "");
      }

      setShowUpdateModal(false);
      navigate("/blogs");
    } catch (err) {
      console.error("Error saving blog:", err);
      setError(err.message || "Unable to save the blog. Please try again.");
      setShowUpdateModal(false);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    setDeleting(true);
    setError("");

    try {
      await deleteBlog(id);
      navigate("/blogs");
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError(err.message || "Unable to delete the blog. Please try again.");
      setShowDeleteModal(false);
    } finally {
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="page-container">
          <p className="loading-message">Loading blog...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page-container">
        <h1 className="page-title">
          {isEditing ? "Edit Blog" : "Create Blog"}
        </h1>

        <p className="page-description">
          {isEditing
            ? "Make changes to your blog post."
            : "Share your thoughts with the world."}
        </p>

        <form className="form-card blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter an interesting title..."
            maxLength={150}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Blog Content</label>

          <textarea
            id="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              if (error) setError("");
            }}
            placeholder="Write your blog content here..."
            rows={10}
            maxLength={20000}
            required
          />
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="blog-actions">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={saving || deleting}
          >
            {saving
              ? "Saving..."
              : isEditing
                ? "Update"
                : "Publish"}
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => navigate("/blogs")}
            disabled={saving || deleting}
          >
            Cancel
          </button>

          {isEditing && (
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => setShowDeleteModal(true)}
              disabled={saving || deleting}
              style={{ marginLeft: "auto" }}
            >
              Delete
            </button>
          )}
        </div>
      </form>

      <Popup
        isOpen={showUpdateModal}
        title="Confirm Update"
        message={`Are you sure you want to update "${title.trim() || "this blog"}"?`}
        confirmText="Update"
        cancelText="Cancel"
        confirmBtnClass="btn-primary"
        loadingText="Updating..."
        loading={saving}
        onConfirm={executeSave}
        onCancel={() => {
          if (!saving) setShowUpdateModal(false);
        }}
      />

      <Popup
        isOpen={showDeleteModal}
        title="Delete Blog"
        message={`Are you sure you want to delete "${title || "this blog"}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => {
          if (!deleting) setShowDeleteModal(false);
        }}
      />
      </main>
    </>
  );
}

export default CreateBlog;
