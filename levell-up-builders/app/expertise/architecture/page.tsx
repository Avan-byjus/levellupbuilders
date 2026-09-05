import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b1622] text-[#F5F2EA]">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="bg-[#0b1622]">
          <div className="site-container py-28 sm:py-32 lg:py-40">

            <p className="eyebrow text-[#C58C67]">
              Our Expertise — 01
            </p>

            <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

              <div>
                <h1
                  className="max-w-4xl text-[3.8rem] leading-[0.94] tracking-[-0.035em] sm:text-[5rem] lg:text-[6rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Architecture
                  <br />
                  with purpose.
                </h1>
              </div>

              <div className="max-w-xl lg:pb-2">
                <p className="text-[16px] leading-7 text-[#C8D3DE] sm:text-[17px]">
                  Thoughtful residential spaces shaped around
                  proportion, functionality, character and the way
                  people actually live.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="section-light text-[#10243a]">
          <div className="site-container py-24 sm:py-28 lg:py-32">

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

              <div>
                <p className="eyebrow text-[#C58C67]">
                  01 — Our Perspective
                </p>

                <h2
                  className="mt-6 max-w-xl text-[3.2rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem] lg:text-[4.5rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Spaces designed
                  <br />
                  around living.
                </h2>
              </div>

              <div className="max-w-2xl text-[16px] leading-8 text-[#667586] sm:text-[17px]">

                <p>
                  Our approach to residential architecture begins
                  with understanding the people who will inhabit the
                  space.
                </p>

                <p className="mt-6">
                  The proportions, movement, natural light,
                  materials and relationship between spaces all
                  contribute to how a home is experienced.
                </p>

                <p className="mt-6">
                  With a background rooted in interior design,
                  Levell Up Builders brings a design-led perspective
                  to the residential spaces we work on.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            ARCHITECTURAL APPROACH
        ===================================================== */}
        <section className="bg-[#10243a]">
          <div className="site-container py-24 sm:py-28 lg:py-32">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

              <div>
                <p className="eyebrow text-[#C58C67]">
                  02 — Architectural Approach
                </p>

                <h2
                  className="mt-6 max-w-lg text-[3.2rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Form,
                  <br />
                  function,
                  <br />
                  feeling.
                </h2>
              </div>

              <div className="grid gap-px bg-white/10 md:grid-cols-2">

                <article className="bg-[#10243a] p-8 sm:p-10">

                  <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                    01
                  </span>

                  <h3
                    className="mt-16 text-[2.2rem] leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Proportion
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                    Creating spaces where dimensions and
                    relationships feel balanced, intentional and
                    comfortable.
                  </p>

                </article>


                <article className="bg-[#10243a] p-8 sm:p-10">

                  <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                    02
                  </span>

                  <h3
                    className="mt-16 text-[2.2rem] leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Function
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                    Planning homes around practical movement,
                    everyday routines and the needs of the people
                    who live there.
                  </p>

                </article>


                <article className="bg-[#10243a] p-8 sm:p-10">

                  <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                    03
                  </span>

                  <h3
                    className="mt-16 text-[2.2rem] leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Materiality
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                    Considering materials not only for appearance,
                    but also for atmosphere, durability and how
                    they will age over time.
                  </p>

                </article>


                <article className="bg-[#10243a] p-8 sm:p-10">

                  <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                    04
                  </span>

                  <h3
                    className="mt-16 text-[2.2rem] leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Experience
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                    Thinking about the finished home as a complete
                    experience rather than simply a collection of
                    rooms.
                  </p>

                </article>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            RESIDENTIAL FOCUS
        ===================================================== */}
        <section className="section-light text-[#10243a]">
          <div className="site-container py-24 sm:py-28 lg:py-32">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">

              <div className="aspect-[4/3] overflow-hidden bg-[#10243a]">

                <div className="flex h-full w-full items-center justify-center text-center">

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C58C67]">
                      Residential Architecture
                    </p>

                    <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-[#C8D3DE]/60">
                      Replace with project photograph
                    </p>
                  </div>

                </div>

              </div>


              <div>

                <p className="eyebrow text-[#C58C67]">
                  03 — Residential Focus
                </p>

                <h2
                  className="mt-6 max-w-xl text-[3.2rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Homes that
                  <br />
                  belong to their owners.
                </h2>

                <div className="mt-8 max-w-xl text-[16px] leading-8 text-[#667586] sm:text-[17px]">

                  <p>
                    Residential architecture is ultimately about
                    creating a place that feels personal.
                  </p>

                  <p className="mt-6">
                    Every home has different requirements, habits
                    and aspirations. Our aim is to understand those
                    differences and translate them into thoughtful
                    spaces.
                  </p>

                  <p className="mt-6">
                    This is where our interior design background
                    becomes particularly valuable — allowing us to
                    consider the relationship between the building
                    and the interiors from the beginning.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            EXPERIENCE
        ===================================================== */}
        <section className="bg-[#173754]">
          <div className="site-container py-24 sm:py-28 lg:py-32">

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

              <div>

                <p className="eyebrow text-[#C58C67]">
                  04 — Experience Behind the Design
                </p>

                <h2
                  className="mt-6 max-w-xl text-[3.2rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  More than
                  <br />
                  twenty years
                  <br />
                  of design experience.
                </h2>

              </div>


              <div className="max-w-2xl text-[16px] leading-8 text-[#C8D3DE] sm:text-[17px]">

                <p>
                  Before Levell Up Builders entered the construction
                  field, our founder spent more than two decades
                  working in interior design.
                </p>

                <p className="mt-6">
                  That experience developed a strong understanding
                  of materials, proportions, functionality and the
                  details that influence how people experience a
                  space.
                </p>

                <p className="mt-6">
                  Architecture is now part of a new chapter for the
                  business, with that existing design knowledge
                  continuing to influence the way residential
                  projects are approached.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            CURRENT CHAPTER
        ===================================================== */}
        <section className="bg-[#0b1622]">
          <div className="site-container py-24 sm:py-28 lg:py-32">

            <div className="max-w-4xl">

              <p className="eyebrow text-[#C58C67]">
                05 — A New Chapter
              </p>

              <h2
                className="mt-6 text-[3.2rem] leading-[0.98] tracking-[-0.025em] sm:text-[4rem] lg:text-[5rem]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Bringing design
                <br />
                closer to building.
              </h2>

              <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#C8D3DE] sm:text-[17px]">
                Levell Up Builders was established in 2024 as the
                next chapter of a business shaped by years of
                interior design experience. The company began its
                first construction project in 2026, beginning a new
                journey into residential building.
              </p>

            </div>

          </div>
        </section>

{/* CTA */}
        <section className="bg-[#0b1622] text-[#F5F2EA]">
          <div className="site-container border-t border-white/10 py-24 sm:py-28 lg:py-32">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#C58C67]">
                Start a Conversation
              </p>

              <h2
                className="mt-6 text-center text-[3rem] leading-[0.95] tracking-[-0.035em] text-[#F5F2EA] sm:text-[4rem] lg:text-[5rem]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Have a residential project in mind?
              </h2>

            <div className="mt-6 flex w-full justify-center">
              <p className="max-w-2xl text-center text-[16px] leading-7 text-[#C8D3DE] sm:text-[17px]">
                Tell us about your project, your ideas and what you hope to create.
              </p>
            </div>

              <a
                href="/contact"
                className="mt-10 inline-flex min-h-[60px] min-w-[220px] items-center justify-center border border-[#C58C67] px-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5F2EA] transition duration-300 hover:bg-[#C58C67] hover:text-[#0b1622]"
              >
                Contact Us
              </a>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}