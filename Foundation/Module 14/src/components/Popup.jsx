import { useEffect } from "react";

function Popup({
  isOpen,
  title = "Confirm Delete",
  message = "Are you sure you want to delete this blog? This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  loadingText,
  confirmBtnClass = "btn-danger",
  onConfirm,
  onCancel,
  loading = false,
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen && !loading) {
        onCancel();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, loading, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        if (!loading) onCancel();
      }}
      role="presentation"
    >
      <div
        className="modal-card"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onCancel}
            disabled={loading}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <p id="modal-desc" className="modal-body">
          {message}
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
            disabled={loading}
          >
            {cancelText}
          </button>

          <button
            type="button"
            className={`btn ${confirmBtnClass}`}
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? (loadingText || `${confirmText}...`) : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
