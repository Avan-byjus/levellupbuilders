import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OurStoryPage() {
  return (
    <main className="our-story-page">
      <Navbar />

      {/* HERO */}
      <section className="our-story-hero section-dark">
        <div className="site-container">
          <div className="our-story-hero-inner">
            <p className="eyebrow text-[#C58C67]">
              Our Story
            </p>

            <h1 className="our-story-hero-title">
              From design
              <br />
              to building.
            </h1>

            <p className="our-story-hero-copy">
              A journey shaped by more than two decades of interior
              design experience, now entering a new chapter in
              residential construction.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="story-block section-light">
        <div className="site-container story-grid">
          
          <div className="story-image overflow-hidden">

        <Image
            src="/images/owner.jpg"
            alt="Founder of Levell Up Builders"
            width={500}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

          <div className="story-copy">
            <p className="eyebrow text-[#C58C67]">
              01 — The Founder
            </p>

            <h2 className="story-title">
              Built from
              <br />
              experience.
            </h2>

            <p>
              With more than 20 years of experience in interior design,
              our founder has spent decades understanding how people
              experience the spaces around them.
            </p>

            <p>
              From materials and proportions to functionality and
              everyday comfort, years of hands-on design work have
              shaped an approach rooted in detail, practicality and
              thoughtful execution.
            </p>

            <p>
              Levell Up Builders carries that experience into its next
              chapter, bringing a design-led perspective to residential
              building projects.
            </p>

            <div className="story-signature">
              <strong>Founder: PETER DAMIN A</strong>
              <span>LEVELL UP BUILDERS</span>
            </div>
          </div>

        </div>
      </section>

      {/* COMPANY */}
      <section className="story-block section-blue">
        <div className="site-container story-grid story-grid-company">

          <div className="story-copy">
            <p className="eyebrow text-[#C58C67]">
              02 — The Company
            </p>

            <h2 className="story-title">
              A new chapter
              <br />
              in building.
            </h2>

            <p>
              The journey began with Kitchen Icon, an interior design
              studio built around a passion for creating thoughtful
              residential spaces.
            </p>

            <p>
              After more than two decades of experience in interior
              design, the business evolved into Levell Up Builders in
              2024, marking the beginning of a new direction focused on
              residential construction.
            </p>

            <p>
              In 2026, Levell Up Builders began its first construction
              project — opening a new chapter for the company while
              carrying forward the experience gained through years of
              design.
            </p>

            <p>
              Today, that design experience remains at the heart of
              the way we approach every space we build.
            </p>
          </div>

          <div className="story-image">
            <div className="story-placeholder">
              <span>COMPANY / PROJECT PHOTOGRAPH</span>
              <small>Replace with project image</small>
            </div>
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="story-journey section-light">
        <div className="site-container">

          <div className="journey-heading">
            <p className="eyebrow text-[#C58C67]">
              The Journey
            </p>

            <h2 className="story-title">
              One chapter
              <br />
              at a time.
            </h2>
          </div>

          <div className="journey-list">

            <div className="journey-item">
              <span>01</span>

              <div>
                <p className="journey-year">
                  [YEAR]
                </p>

                <h3>Kitchen Icon</h3>

                <p>
                  The beginning of the journey as an interior design
                  studio.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <span>02</span>

              <div>
                <p className="journey-year">
                  20+ YEARS
                </p>

                <h3>Interior Design</h3>

                <p>
                  More than two decades of hands-on experience creating
                  thoughtful residential interiors.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <span>03</span>

              <div>
                <p className="journey-year">
                  2024
                </p>

                <h3>Levell Up Builders</h3>

                <p>
                  The business evolves into a new company focused on
                  residential construction.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <span>04</span>

              <div>
                <p className="journey-year">
                  2026
                </p>

                <h3>First Construction Project</h3>

                <p>
                  Levell Up Builders begins its first construction
                  project.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="story-closing section-dark">
        <div className="site-container">

          <p className="eyebrow text-[#C58C67]">
            The Next Chapter
          </p>

          <h2 className="story-closing-title">
            The experience
            <br />
            continues.
          </h2>

          <p className="story-closing-copy">
            From designing interiors to building the spaces themselves,
            Levell Up Builders is taking the next step with the same
            attention to detail that has defined its journey so far.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}