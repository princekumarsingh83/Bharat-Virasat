
import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const buttonClass =
    `ui-button ui-button-${variant} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;