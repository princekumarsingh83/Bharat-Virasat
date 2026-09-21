
import { Link } from "react-router-dom";
import "./HeritageCard.css";

function HeritageCard({
  id,
  image,
  title,
  location,
  category,
  shortDescription,
}) {
  return (
    <div className="heritage-card">

      <div className="heritage-image">

        <img
          src={
            image ||
            "/images/heritage-placeholder.jpg"
          }
          alt={title}
        />

      </div>


      <div className="heritage-content">

        <span className="heritage-category">
          {category}
        </span>

        <h3>
          {title}
        </h3>

        <p>
          📍 {location}
        </p>

        <p className="heritage-description">
          {shortDescription}
        </p>

        <Link
          to={`/heritage/${id}`}
          className="discover-link"
        >
          Discover →
        </Link>

      </div>

    </div>
  );
}

export default HeritageCard;