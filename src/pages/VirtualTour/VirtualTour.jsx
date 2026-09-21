

import { useState } from "react";
import "./VirtualTour.css";

function VirtualTour() {
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 1,
      title: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      category: "Monument",
      image: "/images/taj-mahal.jpg",
      description:
        "Explore the architecture, history and cultural significance of one of India's most recognised heritage sites.",
      duration: "10 min",
      type: "Heritage Tour",
    },
    {
      id: 2,
      title: "Kerala Cultural Experience",
      location: "Kerala",
      category: "Folk Art",
      image: "/images/kathakali.jpg",
      description:
        "Discover traditional performance, costumes and cultural expressions from Kerala.",
      duration: "8 min",
      type: "Cultural Experience",
    },
    {
      id: 3,
      title: "Madhubani Art",
      location: "Bihar",
      category: "Craft",
      image: "/images/madhubani.jpg",
      description:
        "Explore the artistic traditions, patterns and cultural stories represented through Madhubani painting.",
      duration: "7 min",
      type: "Art Experience",
    },
  ];

  const featuredTour = tours[0];

  return (
    <main className="virtual-tour-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="tour-header">

        <p className="section-tag">
          IMMERSIVE HERITAGE
        </p>

        <h1>
          Experience India's
          <span> Heritage</span>
        </h1>

        <p>
          Explore cultural places, traditions and stories
          through interactive virtual experiences.
        </p>

      </section>


      {/* =====================================================
          FEATURED TOUR
      ===================================================== */}

      <section className="featured-tour">

        <div className="featured-tour-image">

          <img
            src={featuredTour.image}
            alt={featuredTour.title}
          />

          <div className="tour-preview-badge">
            Prototype Experience
          </div>

        </div>


        <div className="featured-tour-content">

          <p className="section-tag">
            FEATURED EXPERIENCE
          </p>

          <h2>
            {featuredTour.title}
          </h2>

          <p className="tour-location">
            📍 {featuredTour.location}
          </p>

          <p className="featured-tour-description">
            {featuredTour.description}
          </p>


          <div className="tour-meta">

            <div>
              <span>Type</span>
              <strong>
                {featuredTour.type}
              </strong>
            </div>

            <div>
              <span>Duration</span>
              <strong>
                {featuredTour.duration}
              </strong>
            </div>

          </div>


          <button
            className="start-tour-btn"
            onClick={() => setSelectedTour(featuredTour)}
          >
            Start Experience →
          </button>

        </div>

      </section>


      {/* =====================================================
          TOUR COLLECTION
      ===================================================== */}

      <section className="tour-collection">

        <div className="tour-collection-heading">

          <p className="section-tag">
            EXPLORE EXPERIENCES
          </p>

          <h2>
            Discover Heritage
            <span> Virtually</span>
          </h2>

          <p>
            Browse prototype virtual experiences covering
            monuments, arts and cultural traditions.
          </p>

        </div>


        <div className="tour-grid">

          {tours.map((tour) => (

            <article
              className="tour-card"
              key={tour.id}
            >

              <div className="tour-card-image">

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <span className="tour-card-type">
                  {tour.type}
                </span>

              </div>


              <div className="tour-card-content">

                <span className="tour-card-category">
                  {tour.category}
                </span>

                <h3>
                  {tour.title}
                </h3>

                <p className="tour-card-location">
                  📍 {tour.location}
                </p>

                <p>
                  {tour.description}
                </p>


                <div className="tour-card-footer">

                  <span>
                    {tour.duration}
                  </span>

                  <button
                    onClick={() => setSelectedTour(tour)}
                  >
                    Explore →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="tour-how-section">

        <div className="tour-how-heading">

          <p className="section-tag">
            HOW IT WORKS
          </p>

          <h2>
            Explore Heritage
            <span> Your Way</span>
          </h2>

        </div>


        <div className="tour-how-grid">

          <div className="tour-how-card">

            <div className="tour-how-number">
              01
            </div>

            <h3>
              Choose a Heritage
            </h3>

            <p>
              Select a monument, tradition, art or cultural
              experience from the collection.
            </p>

          </div>


          <div className="tour-how-card">

            <div className="tour-how-number">
              02
            </div>

            <h3>
              Enter the Experience
            </h3>

            <p>
              Explore the available digital content through
              an interactive experience.
            </p>

          </div>


          <div className="tour-how-card">

            <div className="tour-how-number">
              03
            </div>

            <h3>
              Learn & Discover
            </h3>

            <p>
              Learn about the history, culture and stories
              connected with the heritage.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROTOTYPE MODAL
      ===================================================== */}

      {selectedTour && (

        <div
          className="tour-modal-overlay"
          onClick={() => setSelectedTour(null)}
        >

          <div
            className="tour-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="tour-modal-close"
              onClick={() => setSelectedTour(null)}
            >
              ×
            </button>


            <div className="tour-modal-image">

              <img
                src={selectedTour.image}
                alt={selectedTour.title}
              />

            </div>


            <div className="tour-modal-content">

              <p className="section-tag">
                PROTOTYPE EXPERIENCE
              </p>

              <h2>
                {selectedTour.title}
              </h2>

              <p className="tour-modal-location">
                📍 {selectedTour.location}
              </p>

              <p>
                {selectedTour.description}
              </p>


              <div className="prototype-notice">

                <span>
                  ◉
                </span>

                <p>
                  This is currently a prototype interface.
                  Real 360° imagery and immersive tour content
                  can be connected in a later development phase.
                </p>

              </div>


              <button
                className="tour-modal-button"
                onClick={() => setSelectedTour(null)}
              >
                Close Experience
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default VirtualTour;