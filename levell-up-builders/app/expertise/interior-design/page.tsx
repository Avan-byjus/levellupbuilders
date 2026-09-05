import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InteriorDesignPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b1622] text-[#F5F2EA]">
        {/* HERO */}
        <section className="site-container py-32 lg:py-40">
          <p className="eyebrow text-[#C58C67]">
            Our Expertise — 03
          </p>

          <h1
            className="mt-6 text-[4rem] leading-none sm:text-[5rem] lg:text-[6rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Interior
            <br />
            Design
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#C8D3DE]">
            More than two decades of interior design experience
            continue to shape the way we think about residential
            spaces.
          </p>
        </section>

        {/* CONTENT */}
        <section className="section-light text-[#10243a]">
          <div className="site-container py-24 sm:py-28 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="eyebrow text-[#C58C67]">
                  Design experience
                </p>

                <h2
                  className="mt-6 text-[3.2rem] leading-[0.98] sm:text-[4rem]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Interiors
                  <br />
                  that feel considered.
                </h2>
              </div>

              <div className="max-w-2xl text-[16px] leading-8 text-[#667586]">
                <p>
                  Before Levell Up Builders began its construction
                  journey, our founder spent more than 20 years
                  working in interior design.
                </p>

                <p className="mt-6">
                  That experience created a strong understanding of
                  materials, proportions, functionality and the
                  details that make a residential space feel
                  complete.
                </p>

                <p className="mt-6">
                  Today, that knowledge continues to influence the
                  way Levell Up Builders approaches the spaces it
                  creates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-[#10243a]">
          <div className="site-container py-24 sm:py-28 lg:py-32">
            <p className="eyebrow text-[#C58C67]">
              Our Perspective
            </p>

            <h2
              className="mt-6 max-w-4xl text-[3.2rem] leading-[0.98] sm:text-[4rem] lg:text-[5rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Good design is experienced
              <br />
              long after it is finished.
            </h2>
          </div>
        </section>

        {/* CTA */}
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
                Want to shape your space?
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