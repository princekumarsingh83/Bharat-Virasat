

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            ✦ Bharat Virasat
          </Link>

          <p>
            Discover, explore and preserve India's
            rich cultural heritage.
          </p>

        </div>

        <div className="footer-links">

          <h3>Explore</h3>

          <Link to="/explore">
            Explore Heritage
          </Link>

          <Link to="/culture-map">
            Culture Map
          </Link>

          <Link to="/virtual-tour">
            Virtual Tour
          </Link>

        </div>

        <div className="footer-links">

          <h3>Community</h3>

          <Link to="/community">
            Share Your Story
          </Link>

          <Link to="/community">
            Local Heritage
          </Link>

          <Link to="/community">
            Cultural Stories
          </Link>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Bharat Virasat. Preserving India's living heritage.
        </p>

      </div>

    </footer>
  );
}

export default Footer;