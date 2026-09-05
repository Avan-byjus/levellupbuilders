import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    number: "01",
    category: "Residential",
    title: "Featured Residence",
    description:
      "A residential project shaped around considered proportions, materiality and everyday living.",
    status: "Featured Project",
  },
  {
    number: "02",
    category: "Residential",
    title: "Residential Project",
    description:
      "A design-led residential environment developed with attention to functionality, detail and execution.",
    status: "Residential",
  },
  {
    number: "03",
    category: "Residential",
    title: "Future Residence",
    description:
      "A forthcoming residential project representing the continuing direction of Levell Up Builders.",
    status: "Coming Soon",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero section-dark">
        <div className="site-container">
          <div className="projects-hero-inner">

            <p className="eyebrow text-[#C58C67]">
              Our Projects
            </p>

            <h1 className="projects-hero-title">
              Spaces built
              <br />
              with purpose.
            </h1>

            <p className="projects-hero-copy">
              A collection of residential work shaped by design
              experience, thoughtful planning and a commitment to
              creating spaces that feel considered from every angle.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="projects-intro section-light">
        <div className="site-container">

          <div className="projects-intro-grid">

            <div>
              <p className="eyebrow text-[#C58C67]">
                Selected Work
              </p>

              <h2 className="projects-intro-title">
                From ideas
                <br />
                to spaces.
              </h2>
            </div>

            <div className="projects-intro-copy">
              <p>
                Levell Up Builders brings together years of interior
                design experience with a new direction in residential
                construction.
              </p>

              <p>
                Each project is approached with an understanding that
                good spaces are not only about how they look, but how
                they function, feel and become part of everyday life.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}

      <section className="featured-project section-blue">
        <div className="site-container">

          <div className="featured-project-grid">

            <div className="featured-project-image">
              <div className="project-placeholder">
                <span>FEATURED PROJECT IMAGE</span>
                <small>
                  Replace with project photograph
                </small>
              </div>
            </div>

            <div className="featured-project-content">

              <p className="eyebrow text-[#C58C67]">
                01 — Featured Project
              </p>

              <h2 className="featured-project-title">
                A considered
                <br />
                residential space.
              </h2>

              <p className="featured-project-text">
                A residential environment where architectural form,
                interiors, materials and everyday functionality come
                together as one considered experience.
              </p>

              <div className="featured-project-meta">

                <div>
                  <span>TYPE</span>
                  <strong>Residential</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>Featured Work</strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT COLLECTION
      ===================================================== */}

      <section className="projects-collection section-light">
        <div className="site-container">

          <div className="projects-collection-heading">

            <div>
              <p className="eyebrow text-[#C58C67]">
                Project Collection
              </p>

              <h2 className="projects-section-title">
                Selected
                <br />
                projects.
              </h2>
            </div>

            <p className="projects-section-copy">
              A growing body of residential work as Levell Up Builders
              begins its next chapter.
            </p>

          </div>


          <div className="projects-list">

            {projects.map((project) => (
              <article
                key={project.number}
                className="project-row"
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-row-image">
                  <div className="project-placeholder project-placeholder-small">
                    <span>PROJECT IMAGE</span>
                  </div>
                </div>

                <div className="project-row-content">

                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <span className="project-status">
                    {project.status}
                  </span>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="projects-approach section-dark">
        <div className="site-container">

          <div className="projects-approach-grid">

            <div>
              <p className="eyebrow text-[#C58C67]">
                Our Approach
              </p>

              <h2 className="projects-approach-title">
                Design
                <br />
                informs
                <br />
                everything.
              </h2>
            </div>

            <div className="projects-approach-copy">

              <div className="approach-item">
                <span>01</span>

                <div>
                  <h3>Thoughtful Design</h3>

                  <p>
                    Years of interior design experience inform the way
                    spaces are considered before construction begins.
                  </p>
                </div>
              </div>


              <div className="approach-item">
                <span>02</span>

                <div>
                  <h3>Practical Function</h3>

                  <p>
                    Every residential space should work as naturally
                    as it looks, balancing visual character with
                    everyday requirements.
                  </p>
                </div>
              </div>


              <div className="approach-item">
                <span>03</span>

                <div>
                  <h3>Attention to Detail</h3>

                  <p>
                    Materials, proportions and finishing details are
                    treated as essential parts of the overall result.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="projects-closing section-blue">
        <div className="site-container">

          <p className="eyebrow text-[#C58C67]">
            The Work Continues
          </p>

          <h2 className="projects-closing-title">
            More spaces.
            <br />
            More stories.
          </h2>

          <p className="projects-closing-copy">
            As Levell Up Builders grows, so does the collection of
            spaces created through its design-led approach to
            residential building.
          </p>

        </div>
      </section>


      <Footer />
    </main>
  );
}