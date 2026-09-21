import "./StatusMessage.css";

function StatusMessage({
  type = "empty",
  title,
  message,
  actionText,
  onAction,
}) {
  const icons = {
    error: "⚠️",
    empty: "🔎",
  };

  return (
    <div
      className={`status-message status-${type}`}
      role={type === "error" ? "alert" : "status"}
      aria-live="polite"
    >

      <div
        className="status-icon"
        aria-hidden="true"
      >
        {type === "loading" ? (
          <div
            className="loading-spinner"
            aria-hidden="true"
          ></div>
        ) : (
          icons[type]
        )}
      </div>


      <h3>
        {title}
      </h3>


      <p>
        {message}
      </p>


      {actionText && onAction && (
        <button
          type="button"
          className="status-action"
          onClick={onAction}
        >
          {actionText}
        </button>
      )}

    </div>
  );
}

export default StatusMessage;