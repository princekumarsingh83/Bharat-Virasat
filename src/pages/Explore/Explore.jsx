

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Explore.css";

import HeritageCard from "../../components/HeritageCard/HeritageCard";
import StatusMessage from "../../components/StatusMessage/StatusMessage";

import heritageData from "../../data/heritageData";

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "All"
  );


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


  /* =====================================================
     KEEP CATEGORY IN SYNC WITH URL
     ===================================================== */

  useEffect(() => {
    setSelectedCategory(
      categoryFromUrl || "All"
    );
  }, [categoryFromUrl]);


  /* =====================================================
     CATEGORY CHANGE
     ===================================================== */

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  };


  /* =====================================================
     FILTER HERITAGE
     ===================================================== */

  const normalizedSearch =
    searchTerm.trim().toLowerCase();


  const filteredHeritage =
    heritageData.filter((heritage) => {

      const matchesCategory =
        selectedCategory === "All" ||
        heritage.category === selectedCategory;


      const searchableText = `
        ${heritage.title}
        ${heritage.location}
        ${heritage.category}
        ${heritage.state}
        ${heritage.city}
      `.toLowerCase();


      const matchesSearch =
        !normalizedSearch ||
        searchableText.includes(normalizedSearch);


      return matchesCategory && matchesSearch;
    });


  /* =====================================================
     CLEAR SEARCH
     ===================================================== */

  const clearSearch = () => {
    setSearchTerm("");
  };


  /* =====================================================
     CLEAR ALL FILTERS
     ===================================================== */

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSearchParams({});
  };


  const hasActiveFilters =
    normalizedSearch !== "" ||
    selectedCategory !== "All";


  return (
    <main className="explore-page">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <section className="explore-header">

        <p className="section-tag">
          DISCOVER INDIA
        </p>

        <h1>
          Explore <span>Heritage</span>
        </h1>

        <p>
          Discover monuments, festivals, crafts, folk arts,
          music, food and traditions from across India.
        </p>

      </section>


      {/* =====================================================
          SEARCH
          ===================================================== */}

      <section className="explore-search">

        <div className="search-input-wrapper">

          <input
            type="text"
            placeholder="Search heritage, places, traditions..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            aria-label="Search heritage"
          />


          {searchTerm && (
            <button
              type="button"
              className="clear-search-button"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              ×
            </button>
          )}

        </div>


        <button
          type="button"
          className="search-button"
          onClick={() =>
            setSearchTerm(searchTerm.trim())
          }
        >
          Search
        </button>

      </section>


      {/* =====================================================
          CATEGORY FILTERS
          ===================================================== */}

      <section className="explore-categories">

        {categories.map((category) => (

          <button
            key={category}
            type="button"
            className={
              selectedCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              handleCategoryChange(category)
            }
          >
            {category}
          </button>

        ))}

      </section>


      {/* =====================================================
          ACTIVE FILTER SUMMARY
          ===================================================== */}

      {hasActiveFilters && (
        <section className="active-filters">

          <div className="active-filter-content">

            <span className="active-filter-label">
              Active filters:
            </span>


            {normalizedSearch && (
              <span className="filter-chip">

                Search:
                <strong>
                  "{searchTerm.trim()}"
                </strong>

                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Remove search filter"
                >
                  ×
                </button>

              </span>
            )}


            {selectedCategory !== "All" && (
              <span className="filter-chip">

                Category:
                <strong>
                  {selectedCategory}
                </strong>

                <button
                  type="button"
                  onClick={() =>
                    handleCategoryChange("All")
                  }
                  aria-label="Remove category filter"
                >
                  ×
                </button>

              </span>
            )}


            <button
              type="button"
              className="clear-all-button"
              onClick={clearAllFilters}
            >
              Clear All
            </button>

          </div>

        </section>
      )}


      {/* =====================================================
          RESULTS
          ===================================================== */}

      <section className="explore-results">

        <div className="results-heading">

          <div>

            <h2>
              {selectedCategory === "All"
                ? "Featured Heritage"
                : selectedCategory}
            </h2>

            <p>
              {filteredHeritage.length} heritage{" "}
              {filteredHeritage.length === 1
                ? "entry"
                : "entries"}{" "}
              found
            </p>

          </div>


          {hasActiveFilters && (
            <button
              type="button"
              className="results-clear-button"
              onClick={clearAllFilters}
            >
              Clear Filters
            </button>
          )}

        </div>


        {/* =====================================================
            HERITAGE GRID
            ===================================================== */}

        <div className="explore-grid">

          {filteredHeritage.length > 0 ? (

            filteredHeritage.map((heritage) => (

              <HeritageCard
                key={heritage.id}
                id={heritage.id}
                image={heritage.image}
                title={heritage.title}
                location={heritage.location}
                category={heritage.category}
                shortDescription={
                  heritage.shortDescription
                }
              />

            ))

          ) : (

            <StatusMessage
              type="empty"
              title="No Heritage Found"
              message="Try a different search term or category."
              actionText="Clear Filters"
              onAction={clearAllFilters}
            />

          )}

        </div>

      </section>

    </main>
  );
}

export default Explore;