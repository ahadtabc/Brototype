import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "../components/Navbar";
import { getAllBlogs } from "../services/blogService";

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

function Dashboard() {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loadedUserId, setLoadedUserId] = useState(undefined);
  const [reloadKey, setReloadKey] = useState(0);

  const userId = user?.uid ?? null;
  const loading = loadedUserId !== userId;

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      try {
        const result = await getAllBlogs(user?.uid);
        if (active) {
          setBlogs(result.blogs || []);
          setError("");
        }
      } catch (err) {
        console.error("Error loading community blogs:", err);
        if (active) {
          setError("Unable to load blogs. Please check your connection or permissions.");
        }
      } finally {
        if (active) {
          setLoadedUserId(userId);
        }
      }
    }

    void loadBlogs();

    return () => {
      active = false;
    };
  }, [user?.uid, userId, reloadKey]);

  function fetchBlogs() {
    setError("");
    setLoadedUserId(undefined);
    setReloadKey((currentKey) => currentKey + 1);
  }

  return (
    <>
      <Navbar />

      <main className="page-container">
        <header className="page-header">
          <div>
            <h1 className="page-title">Community Feed</h1>
            <p className="welcome-text">
              Explore public stories and ideas shared by fellow writers.
            </p>
          </div>
        </header>

        {error && (
          <div className="error-box">
            <p className="error-message">{error}</p>
            <button className="btn btn-secondary" type="button" onClick={fetchBlogs}>
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <p className="loading-message">Loading community feed...</p>
        ) : blogs.length === 0 ? (
          <section className="empty-state">
            <h2>No blogs found</h2>
            <p>No blogs have been published yet.</p>
            <Link className="btn btn-primary" to="/blogs/new">
              Write the First Blog
            </Link>
          </section>
        ) : (
          <section className="dashboard-masonry">
            {blogs.map((blog) => {
              const formattedDate = formatDate(blog.createdAt);
              const isOwner = blog.userId === user?.uid;

              return (
                <article className="blog-card" key={blog.id}>
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-content">{blog.content}</p>

                  <div className="card-bottom">
                    <small className="blog-date">
                      Published: {formattedDate || "Recently"}
                    </small>

                    {isOwner ? (
                      <Link to={`/blogs/edit/${blog.id}`} className="btn btn-secondary btn-sm">
                        Edit
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
}

export default Dashboard;
