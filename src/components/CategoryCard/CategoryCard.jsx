

import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({
  icon,
  title,
  description,
  category,
}) {
  return (
    <Link
      to={`/explore?category=${encodeURIComponent(category)}`}
      className="category-card"
    >

      <div className="category-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="category-link">
        Explore →
      </span>

    </Link>
  );
}

export default CategoryCard;