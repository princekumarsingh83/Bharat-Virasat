
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">

      <div className="not-found-content">

        <div className="not-found-symbol">
          ✦
        </div>

        <p className="section-tag">
          BHARAT VIRASAT
        </p>

        <h1>
          404
        </h1>

        <h2>
          Page Not Found
        </h2>

        <p>
          The page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="not-found-button"
        >
          ← Back to Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;