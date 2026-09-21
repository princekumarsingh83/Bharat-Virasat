

import { Link, useParams, useNavigate } from "react-router-dom";
import "./HeritageDetails.css";

import heritageData from "../../data/heritageData";
import HeritageCard from "../../components/HeritageCard/HeritageCard";
import StatusMessage from "../../components/StatusMessage/StatusMessage";

function HeritageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const heritage = heritageData.find(
    (item) => item.id === Number(id)
  );

  if (!heritage) {
  return (
    <main className="heritage-not-found">

      <StatusMessage
        type="error"
        title="Heritage Not Found"
        message="The heritage entry you are looking for does not exist."
        actionText="Back to Explore"
        onAction={() => navigate("/explore")}
      />

    </main>
  );
}

  const relatedHeritage = heritageData.filter(
    (item) =>
      item.category === heritage.category &&
      item.id !== heritage.id
  );

  return (
    <main className="heritage-details">

      {/* HERO */}

      <section className="details-hero">

        <img
          src={heritage.image}
          alt={heritage.title}
        />

        <div className="details-overlay">

          <span>
            {heritage.category}
          </span>

          <h1>
            {heritage.title}
          </h1>

          <p>
            📍 {heritage.location}
          </p>

        </div>

      </section>


      {/* MAIN CONTENT */}

      <section className="details-content">

        <div className="details-main">

          <p className="section-tag">
            CULTURAL HERITAGE
          </p>

          <h2>
            Discover {heritage.title}
          </h2>

          <p>
            {heritage.fullDescription}
          </p>

          <div className="cultural-overview">

            <h3>
              About this Heritage
            </h3>

            <p>
              {heritage.shortDescription}
            </p>

          </div>


          {/* LOCATION */}

          <div className="location-section">

            <p className="section-tag">
              LOCATION
            </p>

            <h3>
              Where to find it
            </h3>

            <div className="location-card">

              <div className="location-icon">
                📍
              </div>

              <div>
                <strong>
                  {heritage.city}
                </strong>

                <p>
                  {heritage.state}
                </p>

                <small>
                  Coordinates: {heritage.latitude},{" "}
                  {heritage.longitude}
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* SIDEBAR */}

        <aside className="details-sidebar">

          <h3>
            Heritage Information
          </h3>

          <div className="info-item">
            <span>Category</span>
            <strong>{heritage.category}</strong>
          </div>

          <div className="info-item">
            <span>State</span>
            <strong>{heritage.state}</strong>
          </div>

          <div className="info-item">
            <span>City</span>
            <strong>{heritage.city}</strong>
          </div>

          <div className="info-item">
            <span>Location</span>
            <strong>{heritage.location}</strong>
          </div>

          <div className="info-item">
            <span>Platform</span>
            <strong>Bharat Virasat</strong>
          </div>

        </aside>

      </section>


      {/* RELATED HERITAGE */}

      {relatedHeritage.length > 0 && (

        <section className="related-section">

          <div className="related-heading">

            <p className="section-tag">
              EXPLORE MORE
            </p>

            <h2>
              More {heritage.category}
            </h2>

            <p>
              Discover other cultural heritage entries
              in this category.
            </p>

          </div>

          <div className="related-grid">

            {relatedHeritage.map((item) => (

              <HeritageCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                location={item.location}
                category={item.category}
                shortDescription={item.shortDescription}
              />

            ))}

          </div>

        </section>

      )}


      {/* BACK BUTTON */}

      <div className="details-back">

        <Link to="/explore">
          ← Back to Explore
        </Link>

      </div>

    </main>
  );
}

export default HeritageDetails;