import { useState } from "react";
import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Popup from "./Popup";

function Navbar({ isAuth = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggingOut, setLoggingOut] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const isAuthPage = isAuth || location.pathname === "/login" || location.pathname === "/signup";

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await signOut(auth);
      setShowLogoutModal(false);
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed:", err);
      setLoggingOut(false);
    }
  }

  return (
    <>
      <nav className="app-navbar" aria-label="Main Navigation">
        <div className="nav-container">
          <Link to={isAuthPage ? "/login" : "/dashboard"} className="nav-brand">
            BlogApp
          </Link>

          <div className="nav-links">
            {isAuthPage ? (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-btn-signin active" : "nav-link nav-btn-signin"
                  }
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-btn-signup active" : "nav-link nav-btn-signup"
                  }
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  end
                  aria-label="Home dashboard"
                  title="Home dashboard"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-btn-home active" : "nav-link nav-btn-home"
                  }
                >
                  <i className="fa-solid fa-house" aria-hidden="true" />
                </NavLink>

                <NavLink
                  to="/blogs/new"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-btn-create active" : "nav-link nav-btn-create"
                  }
                >
                  + Create Blog
                </NavLink>

                <NavLink
                  to="/blogs"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-btn-blogs active" : "nav-link nav-btn-blogs"
                  }
                >
                  My Blogs
                </NavLink>

                <button
                  type="button"
                  className="btn btn-danger nav-logout-btn"
                  onClick={() => setShowLogoutModal(true)}
                  disabled={loggingOut}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <Popup
        isOpen={showLogoutModal}
        title="Confirm Logout"
        message="Are you sure you want to log out of your account?"
        confirmText="Logout"
        cancelText="Cancel"
        loadingText="Logging out..."
        loading={loggingOut}
        onConfirm={handleLogout}
        onCancel={() => {
          if (!loggingOut) setShowLogoutModal(false);
        }}
      />
    </>
  );
}

export default Navbar;
