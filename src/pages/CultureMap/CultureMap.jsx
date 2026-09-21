

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./CultureMap.css";

import heritageData from "../../data/heritageData";
import StatusMessage from "../../components/StatusMessage/StatusMessage";

function CultureMap() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Monument",
    "Festival",
    "Folk Art",
    "Craft",
    "Music",
    "Food",
    "Tradition",
  ];

  const filteredHeritage = heritageData.filter((heritage) => {
    return (
      selectedCategory === "All" ||
      heritage.category === selectedCategory
    );
  });

  return (
    <main className="culture-map-page">

      {/* HEADER */}
      <section className="map-header">
        <p className="section-tag">DISCOVER INDIA</p>

        <h1>
          Explore the <span>Culture Map</span>
        </h1>

        <p>
          Discover cultural heritage from different parts of India
          through an interactive map.
        </p>
      </section>


      {/* CATEGORY FILTERS */}
      <section className="map-filters">

        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}

      </section>


      {/* MAP */}
      <section className="map-section">

        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          scrollWheelZoom={true}
          className="india-map"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />


          {filteredHeritage.map((heritage) => {

            const position = [
              heritage.latitude,
              heritage.longitude,
            ];

            return (
              <Marker
                key={heritage.id}
                position={position}
              >

                <Popup>

                  <div className="map-popup">

                    <span className="popup-category">
                      {heritage.category}
                    </span>

                    <h3>
                      {heritage.title}
                    </h3>

                    <p>
                      📍 {heritage.location}
                    </p>

                    <p className="popup-description">
                      {heritage.shortDescription}
                    </p>

                    <Link
                      to={`/heritage/${heritage.id}`}
                      className="map-details-link"
                    >
                      View Full Details →
                    </Link>

                  </div>

                </Popup>

              </Marker>
            );
          })}

        </MapContainer>

      </section>


      {/* MAP RESULT SUMMARY */}
      <section className="map-results">

        <p>
          Showing{" "}
          <strong>
            {filteredHeritage.length}
          </strong>{" "}
          {selectedCategory === "All"
            ? "heritage entries"
            : `${selectedCategory} entries`}
        </p>

      </section>


      {/* HERITAGE LIST */}
      <section className="map-heritage-section">

        <div className="map-list-heading">

          <p className="section-tag">
            EXPLORE LOCATIONS
          </p>

          <h2>
            Heritage on the <span>Map</span>
          </h2>

          <p>
            Select a heritage entry to explore its cultural
            information and location.
          </p>

        </div>


        <div className="map-heritage-list">

  {filteredHeritage.length > 0 ? (

    filteredHeritage.map((heritage) => (

      <article
        className="map-heritage-card"
        key={heritage.id}
      >

        <div className="map-card-image">

          <img
            src={heritage.image}
            alt={heritage.title}
          />

        </div>


        <div className="map-card-content">

          <span className="map-card-category">
            {heritage.category}
          </span>

          <h3>
            {heritage.title}
          </h3>

          <p className="map-card-location">
            📍 {heritage.location}
          </p>

          <p>
            {heritage.shortDescription}
          </p>

          <Link
            to={`/heritage/${heritage.id}`}
            className="map-card-link"
          >
            Explore Heritage →
          </Link>

        </div>

      </article>

    ))

  ) : (

    <StatusMessage
      type="empty"
      title="No Heritage Found"
      message="There are no heritage entries in this category yet."
      actionText="Show All"
      onAction={() => setSelectedCategory("All")}
    />

  )}

</div>

      </section>

    </main>
  );
}

export default CultureMap;