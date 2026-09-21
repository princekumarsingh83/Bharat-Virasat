

import "./SectionHeading.css";

function SectionHeading({
  tag,
  title,
  highlight,
  description,
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`}>

      {tag && (
        <p className="section-tag">
          {tag}
        </p>
      )}

      <h2>
        {title}

        {highlight && (
          <span> {highlight}</span>
        )}
      </h2>

      {description && (
        <p className="section-heading-description">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;