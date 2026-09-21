

import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

import "./Navbar.css";

function Navbar() {
  const {
    language,
    changeLanguage,
    t,
  } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener(
      "keydown",
      handleKeyDown
    );
  };
}, []);


  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">

      {/* =====================================================
          LOGO
          ===================================================== */}

      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <span className="logo-symbol">
          ✦
        </span>

        <span>
          Bharat Virasat
        </span>
      </Link>


      {/* =====================================================
          DESKTOP / MOBILE NAVIGATION
          ===================================================== */}

      <div
        className={`nav-links ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          end
          onClick={closeMenu}
        >
          {t("home")}
        </NavLink>


        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          onClick={closeMenu}
        >
          {t("explore")}
        </NavLink>


        <NavLink
          to="/culture-map"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          onClick={closeMenu}
        >
          {t("cultureMap")}
        </NavLink>


        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          onClick={closeMenu}
        >
          {t("community")}
        </NavLink>


        <NavLink
          to="/virtual-tour"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
          onClick={closeMenu}
        >
          {t("virtualTour")}
        </NavLink>

      </div>


      {/* =====================================================
          LANGUAGE + MENU
          ===================================================== */}

      <div className="navbar-actions">

        <select
          className="nav-language"
          value={language}
          onChange={handleLanguageChange}
          aria-label="Select language"
        >
          <option value="en">
            EN
          </option>

          <option value="hi">
            हिन्दी
          </option>
        </select>


        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;