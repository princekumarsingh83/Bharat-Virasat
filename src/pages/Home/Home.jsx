


import { useLanguage } from "../../context/LanguageContext";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import HeritageCard from "../../components/HeritageCard/HeritageCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Button from "../../components/Button/Button";

import heritageData from "../../data/heritageData";

import "./Home.css";

function Home() {
  const { t } = useLanguage();

  return (
    <main className="home">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-tagline">
            {t("livingDigitalHeritage")}
          </p>

          <h1>
            <span>
              {t("discoverHeritage")}
            </span>
          </h1>

          <p className="hero-description">
            Discover India's diverse cultural heritage,
            traditions, monuments, crafts, festivals and
            stories through an interactive digital platform.
          </p>

          <div className="hero-buttons">

            <Button
              to="/explore"
              variant="primary"
            >
              {t("exploreHeritage")}
            </Button>

            <Button
              to="/culture-map"
              variant="secondary"
            >
              {t("exploreCultureMap")}
            </Button>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION SECTION
      ===================================================== */}

      <section className="intro">

        <SectionHeading
          tag="OUR HERITAGE"
          title="India's Culture,"
          highlight="One Journey."
          description="India is home to thousands of traditions, monuments, festivals, crafts, art forms, music and cultural practices. Bharat Virasat brings these diverse cultural experiences together in one digital space."
        />

      </section>


      {/* =====================================================
          CULTURAL CATEGORIES
      ===================================================== */}

      <section className="categories">

        <SectionHeading
          className="categories-heading"
          tag="DISCOVER & EXPLORE"
          title="Explore India's"
          highlight="Cultural Diversity"
          description="Explore different forms of India's cultural heritage and discover the stories behind them."
        />


        <div className="categories-grid">

          <CategoryCard
            icon="🏛️"
            title="Monuments"
            category="Monument"
            description="Discover historic monuments, architecture and sacred places."
          />

          <CategoryCard
            icon="🎉"
            title="Festivals"
            category="Festival"
            description="Experience India's vibrant festivals and celebrations."
          />

          <CategoryCard
            icon="🎨"
            title="Folk Arts"
            category="Folk Art"
            description="Explore traditional paintings, performances and folk expressions."
          />

          <CategoryCard
            icon="🧵"
            title="Crafts"
            category="Craft"
            description="Discover traditional crafts and the artisans behind them."
          />

          <CategoryCard
            icon="🎵"
            title="Music"
            category="Music"
            description="Explore India's classical, folk and regional musical traditions."
          />

          <CategoryCard
            icon="🍛"
            title="Food"
            category="Food"
            description="Discover regional cuisines, recipes and culinary traditions."
          />

          <CategoryCard
            icon="🌿"
            title="Traditions"
            category="Tradition"
            description="Learn about customs, rituals, languages and local traditions."
          />

        </div>

      </section>


      {/* =====================================================
          FEATURED HERITAGE
      ===================================================== */}

      <section className="featured">

        <SectionHeading
          className="featured-heading"
          tag="FEATURED HERITAGE"
          title="Stories from"
          highlight="Across India"
          description="Discover selected cultural heritage entries from different regions of India."
        />


        <div className="heritage-grid">

          {heritageData.map((heritage) => (

            <HeritageCard
              key={heritage.id}
              id={heritage.id}
              image={heritage.image}
              title={heritage.title}
              location={heritage.location}
              category={heritage.category}
              shortDescription={heritage.shortDescription}
            />

          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;