
import { useState } from "react";

import Button from "../../components/Button/Button";

import "./Community.css";

function Community() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    heritageName: "",
    location: "",
    category: "",
    story: "",
    image: null,
  });

  const [errors, setErrors] = useState({});


  /* =====================================================
     PROTOTYPE COMMUNITY CONTRIBUTIONS
     ===================================================== */

  const contributions = [
    {
      id: 1,
      title: "Traditional Folk Dance",
      location: "Rajasthan",
      category: "Folk Art",
      contributor: "Community Member",
      description:
        "A local cultural tradition shared by the community.",
      status: "Verified",
      statusDescription:
        "Reviewed and verified for publication.",
    },

    {
      id: 2,
      title: "Traditional Handicraft",
      location: "Kutch, Gujarat",
      category: "Craft",
      contributor: "Community Member",
      description:
        "A traditional craft representing local artistic heritage.",
      status: "Verified",
      statusDescription:
        "Reviewed and verified for publication.",
    },

    {
      id: 3,
      title: "Village Festival",
      location: "Uttar Pradesh",
      category: "Festival",
      contributor: "Community Member",
      description:
        "A local celebration carrying cultural traditions across generations.",
      status: "Community Shared",
      statusDescription:
        "Shared by the community and awaiting further review.",
    },

    {
      id: 4,
      title: "Local Temple Tradition",
      location: "Uttarakhand",
      category: "Tradition",
      contributor: "Community Member",
      description:
        "A regional tradition preserved and shared by local residents.",
      status: "Pending Review",
      statusDescription:
        "Submitted and awaiting verification.",
    },
  ];


  /* =====================================================
     HANDLE TEXT / SELECT INPUT
     ===================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };


  /* =====================================================
     HANDLE IMAGE INPUT
     ===================================================== */

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setFormData((previousData) => ({
      ...previousData,
      image: file || null,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      image: "",
    }));

    if (!file) {
      return;
    }


    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        image:
          "Only JPG, PNG or WEBP images are allowed.",
      }));

      return;
    }


    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        image:
          "Image size must be less than 5 MB.",
      }));
    }
  };


  /* =====================================================
     VALIDATE FORM
     ===================================================== */

  const validateForm = () => {
    const newErrors = {};

    const heritageName =
      formData.heritageName.trim();

    const location =
      formData.location.trim();

    const story =
      formData.story.trim();


    if (!heritageName) {
      newErrors.heritageName =
        "Heritage name is required.";
    } else if (heritageName.length < 3) {
      newErrors.heritageName =
        "Heritage name must contain at least 3 characters.";
    }


    if (!location) {
      newErrors.location =
        "Location is required.";
    }


    if (!formData.category) {
      newErrors.category =
        "Please select a category.";
    }


    if (!story) {
      newErrors.story =
        "Please describe the cultural heritage.";
    } else if (story.length < 20) {
      newErrors.story =
        "Story should contain at least 20 characters.";
    }


    if (formData.image) {

      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
      ];

      if (!allowedTypes.includes(formData.image.type)) {
        newErrors.image =
          "Only JPG, PNG or WEBP images are allowed.";
      }

      const maxSize = 5 * 1024 * 1024;

      if (formData.image.size > maxSize) {
        newErrors.image =
          "Image size must be less than 5 MB.";
      }
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  /* =====================================================
     FORM SUBMISSION
     ===================================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    /*
      Prototype frontend submission.

      Later, this form can send data to the
      backend REST API provided by your teammates.
    */

    setSubmitted(true);

    setShowForm(false);

    setFormData({
      heritageName: "",
      location: "",
      category: "",
      story: "",
      image: null,
    });

    setErrors({});
  };


  /* =====================================================
     RESET FORM
     ===================================================== */

  const resetForm = () => {
    setFormData({
      heritageName: "",
      location: "",
      category: "",
      story: "",
      image: null,
    });

    setErrors({});
  };


  return (
    <main className="community-page">

      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="community-header">

        <p className="section-tag">
          COMMUNITY
        </p>

        <h1>
          Share India's <span>Living Heritage</span>
        </h1>

        <p>
          Help preserve India's cultural heritage by sharing
          local traditions, stories, crafts, festivals and
          cultural experiences.
        </p>

        <Button
          variant="primary"
          className="contribute-btn"
          onClick={() => {
            setShowForm(!showForm);
            setSubmitted(false);

            if (!showForm) {
              resetForm();
            }
          }}
        >
          {showForm
            ? "Close Form"
            : "Share Your Heritage"}
        </Button>

      </section>


      {/* =====================================================
          SUCCESS MESSAGE
          ===================================================== */}

      {submitted && (
        <section className="submission-success">

          <div
            className="success-icon"
            aria-hidden="true"
          >
            ✓
          </div>

          <div>

            <h3>
              Contribution Submitted
            </h3>

            <p>
              Your cultural contribution has been submitted
              for review. It can be published after verification.
            </p>

          </div>

        </section>
      )}


      {/* =====================================================
          WHY CONTRIBUTE SECTION
          ===================================================== */}

      <section className="community-intro">

        <div className="community-intro-heading">

          <p className="section-tag">
            PRESERVE TOGETHER
          </p>

          <h2>
            Your Story is Part of
            <span> India's Heritage</span>
          </h2>

          <p>
            Many cultural traditions live within communities
            and families. Bharat Virasat provides a space to
            document and share these cultural experiences.
          </p>

        </div>


        <div className="community-benefits">

          {/* BENEFIT 1 */}

          <div className="benefit-card">

            <div
              className="benefit-icon"
              aria-hidden="true"
            >
              📖
            </div>

            <h3>
              Share Stories
            </h3>

            <p>
              Document local traditions, festivals,
              crafts and cultural stories.
            </p>

          </div>


          {/* BENEFIT 2 */}

          <div className="benefit-card">

            <div
              className="benefit-icon"
              aria-hidden="true"
            >
              🏺
            </div>

            <h3>
              Preserve Heritage
            </h3>

            <p>
              Help create a digital record of
              India's diverse cultural heritage.
            </p>

          </div>


          {/* BENEFIT 3 */}

          <div className="benefit-card">

            <div
              className="benefit-icon"
              aria-hidden="true"
            >
              🤝
            </div>

            <h3>
              Connect Communities
            </h3>

            <p>
              Discover cultural knowledge shared by
              people from different regions.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTRIBUTION FORM
          ===================================================== */}

      {showForm && (
        <section className="contribution-form-section">

          <div className="contribution-form">

            <div className="form-heading">

              <p className="section-tag">
                YOUR CONTRIBUTION
              </p>

              <h2>
                Share a Cultural Story
              </h2>

              <p>
                Tell us about a cultural tradition,
                place, craft, festival or story.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              noValidate
            >

              {/* =================================================
                  HERITAGE NAME
                  ================================================= */}

              <div className="form-group">

                <label htmlFor="heritageName">
                  Heritage Name
                </label>

                <input
                  id="heritageName"
                  name="heritageName"
                  type="text"
                  placeholder="e.g. Traditional Folk Dance"
                  value={formData.heritageName}
                  onChange={handleChange}
                  className={
                    errors.heritageName
                      ? "input-error"
                      : ""
                  }
                  aria-invalid={
                    Boolean(errors.heritageName)
                  }
                  aria-describedby={
                    errors.heritageName
                      ? "heritageName-error"
                      : undefined
                  }
                />

                {errors.heritageName && (
                  <p
                    id="heritageName-error"
                    className="field-error"
                  >
                    {errors.heritageName}
                  </p>
                )}

              </div>


              {/* =================================================
                  LOCATION + CATEGORY
                  ================================================= */}

              <div className="form-row">

                {/* LOCATION */}

                <div className="form-group">

                  <label htmlFor="location">
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City / State"
                    value={formData.location}
                    onChange={handleChange}
                    className={
                      errors.location
                        ? "input-error"
                        : ""
                    }
                    aria-invalid={
                      Boolean(errors.location)
                    }
                    aria-describedby={
                      errors.location
                        ? "location-error"
                        : undefined
                    }
                  />

                  {errors.location && (
                    <p
                      id="location-error"
                      className="field-error"
                    >
                      {errors.location}
                    </p>
                  )}

                </div>


                {/* CATEGORY */}

                <div className="form-group">

                  <label htmlFor="category">
                    Category
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={
                      errors.category
                        ? "input-error"
                        : ""
                    }
                    aria-invalid={
                      Boolean(errors.category)
                    }
                    aria-describedby={
                      errors.category
                        ? "category-error"
                        : undefined
                    }
                  >

                    <option value="">
                      Select Category
                    </option>

                    <option value="Monument">
                      Monument
                    </option>

                    <option value="Festival">
                      Festival
                    </option>

                    <option value="Folk Art">
                      Folk Art
                    </option>

                    <option value="Craft">
                      Craft
                    </option>

                    <option value="Music">
                      Music
                    </option>

                    <option value="Food">
                      Food
                    </option>

                    <option value="Tradition">
                      Tradition
                    </option>

                  </select>

                  {errors.category && (
                    <p
                      id="category-error"
                      className="field-error"
                    >
                      {errors.category}
                    </p>
                  )}

                </div>

              </div>


              {/* =================================================
                  STORY
                  ================================================= */}

              <div className="form-group">

                <label htmlFor="story">
                  Your Story
                </label>

                <textarea
                  id="story"
                  name="story"
                  rows="6"
                  placeholder="Describe this cultural heritage, tradition or experience..."
                  value={formData.story}
                  onChange={handleChange}
                  className={
                    errors.story
                      ? "input-error"
                      : ""
                  }
                  aria-invalid={
                    Boolean(errors.story)
                  }
                  aria-describedby={
                    errors.story
                      ? "story-error story-count"
                      : "story-count"
                  }
                />

                <div
                  id="story-count"
                  className="character-count"
                  aria-live="polite"
                >
                  {formData.story.length} characters
                </div>

                {errors.story && (
                  <p
                    id="story-error"
                    className="field-error"
                  >
                    {errors.story}
                  </p>
                )}

              </div>


              {/* =================================================
                  IMAGE
                  ================================================= */}

              <div className="form-group">

                <label htmlFor="image">
                  Upload Image
                </label>

                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                  className={
                    errors.image
                      ? "input-error"
                      : ""
                  }
                  aria-invalid={
                    Boolean(errors.image)
                  }
                  aria-describedby={
                    errors.image
                      ? "image-help image-error"
                      : "image-help"
                  }
                />

                <small id="image-help">
                  JPG, PNG or WEBP. Maximum size: 5 MB.
                </small>

                {errors.image && (
                  <p
                    id="image-error"
                    className="field-error"
                  >
                    {errors.image}
                  </p>
                )}

              </div>


              {/* =================================================
                  VERIFICATION NOTE
                  ================================================= */}

              <div className="form-note">

                <span aria-hidden="true">
                  🔎
                </span>

                <p>
                  Contributions may be reviewed for
                  authenticity before being published.
                </p>

              </div>


              {/* =================================================
                  SUBMIT
                  ================================================= */}

              <button
                type="submit"
                className="submit-btn"
              >
                Submit Contribution
              </button>

            </form>

          </div>

        </section>
      )}


      {/* =====================================================
          VERIFICATION WORKFLOW
          ===================================================== */}

      <section className="verification-section">

        <div className="verification-heading">

          <p className="section-tag">
            TRUST & AUTHENTICITY
          </p>

          <h2>
            From Community
            <span> to Verified Heritage</span>
          </h2>

          <p>
            Cultural contributions can move through a review
            process before becoming part of the heritage archive.
          </p>

        </div>


        <div className="verification-steps">

          {/* STEP 1 */}

          <div className="verification-step">

            <div
              className="verification-number"
              aria-hidden="true"
            >
              1
            </div>

            <div>

              <h3>
                Community Contribution
              </h3>

              <p>
                A community member shares a cultural story,
                tradition, craft, festival or place.
              </p>

            </div>

          </div>


          <div
            className="verification-arrow"
            aria-hidden="true"
          >
            →
          </div>


          {/* STEP 2 */}

          <div className="verification-step">

            <div
              className="verification-number"
              aria-hidden="true"
            >
              2
            </div>

            <div>

              <h3>
                Review
              </h3>

              <p>
                The submitted information can be reviewed
                for authenticity and completeness.
              </p>

            </div>

          </div>


          <div
            className="verification-arrow"
            aria-hidden="true"
          >
            →
          </div>


          {/* STEP 3 */}

          <div className="verification-step">

            <div
              className="verification-number"
              aria-hidden="true"
            >
              3
            </div>

            <div>

              <h3>
                Published Heritage
              </h3>

              <p>
                Approved contributions can become part of
                the digital heritage collection.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMUNITY STORIES
          ===================================================== */}

      <section className="community-contributions">

        <div className="contributions-heading">

          <p className="section-tag">
            COMMUNITY STORIES
          </p>

          <h2>
            Discover Heritage
            <span> Shared by People</span>
          </h2>

          <p>
            Explore cultural stories and traditions contributed
            by communities from different parts of India.
          </p>

        </div>


        <div className="contributions-grid">

          {contributions.map((contribution) => (

            <article
              className="contribution-card"
              key={contribution.id}
            >

              <div
                className="contribution-image"
                aria-hidden="true"
              >
                🏛️
              </div>


              <div className="contribution-content">

                <div className="contribution-top">

                  <span className="contribution-category">
                    {contribution.category}
                  </span>

                  <span
                    className={
                      `contribution-status status-${contribution.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    }
                  >

                    {contribution.status === "Verified" &&
                      "✓ "}

                    {contribution.status === "Pending Review" &&
                      "◷ "}

                    {contribution.status === "Community Shared" &&
                      "● "}

                    {contribution.status}

                  </span>

                </div>


                <h3>
                  {contribution.title}
                </h3>


                <p className="contribution-location">
                  <span aria-hidden="true">
                    📍
                  </span>{" "}
                  {contribution.location}
                </p>


                <p>
                  {contribution.description}
                </p>


                <div className="status-description">
                  {contribution.statusDescription}
                </div>


                <span className="contributor">
                  Shared by {contribution.contributor}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Community;