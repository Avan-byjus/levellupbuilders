
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
              Beyond the Blueprint
            </h1>

            <p className="our-story-hero-copy text-lg leading-9 sm:text-xl sm:leading-10 lg:text-3xl">
              ​Bridging Generations, Elevating Spaces
              ​Crafting Wholesome Spaces
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER — TEXT ONLY, CENTRED */}
      <section className="story-block section-light">
        <div className="site-container">
          <div className="story-copy mx-auto max-w-3xl text-center">
            <p className="eyebrow text-[#C58C67]">
              01 — The Founder
            </p>

            <h2 className="story-title">
              Building on a 
              <br />
              Legacy of Excellence.
            </h2>

           <p className="text-base leading-8 sm:text-lg sm:leading-9">
              They say the apple doesn't fall far from the tree—and in the world of
              construction, Peter Damin is proving to be a true chip off the old block
              as he follows in his father's footsteps.
          </p>

            <p className="text-base leading-8 sm:text-lg sm:leading-9">
              Raised with a front-row view of the industry,Peter Damin inherited a deep-seated 
              respect for the craft, but turning that innate drive into unmatched expertise 
              required forging a unique path.
            </p>

            <p className="text-base leading-8 sm:text-lg sm:leading-9">
              Levell Up Builders carries that experience into its next
              chapter, bringing a design-led perspective to residential
              building projects.
            </p>

            <div className="story-signature mt-8">
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
              The Journey 
              <br />
              & Expertise.
            </h2>

            <p>
              ​Academic Foundation: Earned a degree in Civil Engineering, 
              mastering the technical precision, structural integrity, 
              and core mechanics required to build from the ground up.
            </p>

            <p>
              ​Refining the Craft: Transitioned into interior and landscape design, 
              recognizing that a truly great structure seamlessly connects its 
              external environment with its internal space.
            </p>

            <p>
              ​Industry Rigor: Spent years gaining hands-on experience at premier, 
              top-tier design firms, mastering high-end spatial aesthetics, 
              project execution, and client management.
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
        <section className="story-block section-light">
          <div className="site-container">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
              <h2
                className="w-full text-center text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Complete Canvas
              </h2>

              <p className="mt-8 w-full max-w-3xl text-center text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
                Driven by a desire to offer clients a seamless journey from blueprint
                to final decor, Peter Damin first built a successful interior design
                enterprise—a venture that served as the ultimate stepping stone.
                Today, by uniting a solid foundation in civil engineering, high-end
                interior aesthetics, landscape integration, and a rich legacy of
                construction excellence, this venture delivers a truly wholesome,
                end-to-end building experience.
              </p>
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
            continues...
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
