import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Design-Led Building",
    description:
      "Where Vision Meets Structural Excellence. Great spaces aren’t born from blueprints alone—they start with a clear, cohesive vision. We unify design imagination with engineering precision from day one, ensuring every elevation, layout, and detail is thoughtfully crafted for both timeless aesthetics and functional elegance.",
    href: "/expertise/construction",
  },
  {
    number: "02",
    title: "Bespoke Interior Environments",
    description:
      "Tailored Spaces Crafted for Living. Interior design is the art of spatial flow, texture, and light. We curate custom layouts, refined material palettes, and lighting concepts that seamlessly transform structural builds into warm, sophisticated, and deeply personal living environments.",
    href: "/expertise/interior-design",
  },
  {
    number: "03",
    title: "Turnkey Execution & Delivery",
    description:
      "​From Concept to Key—Single-Point Accountability. We take complete ownership of your project’s entire lifecycle, eliminating multi-vendor friction, timeline uncertainty, and budget variance. You receive total transparency, effortless management, and a finished space ready for you to step into",
    href: "/expertise/turnkey-projects",
  },
];

export default function ExpertisePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[#0b1622] text-[#F5F2EA]">
          <div className="site-container py-32 lg:py-40">
            <p className="eyebrow text-[#C58C67]">
              Our Expertise
            </p>

            <h1
              className="mt-7 max-w-4xl text-[4rem] leading-[0.94] tracking-[-0.035em] sm:text-[5rem] lg:text-[6rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ​One Vision. Complete Execution.
            </h1>

            <p className="mt-8 max-w-2xl text-[16px] leading-7 text-[#C8D3DE] sm:text-[17px]">
              ​A unified approach to design-led construction, 
              engineering, and luxury interiors.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-light">
          <div className="site-container py-24 sm:py-28 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="eyebrow text-[#C58C67]">
                  01 — Our Approach
                </p>

                <h2
                  className="mt-6 max-w-xl text-[3.2rem] leading-[0.98] sm:text-[4rem] lg:text-[4.5rem]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Design-led building.
                </h2>
              </div>

              <div className="max-w-2xl text-[16px] leading-8 text-[#667586] sm:text-[17px]">
                <p>
                  ​At LevellUp Builders, expertise is not just about 
                  executing individual trades—it is the seamless 
                  integration of vision, engineering, and craftsmanship.

                </p>

                <p className="mt-6">
                  From initial concept to final handover, 
                  we bring design-led thinking, uncompromising structural integrity, 
                  custom interior curation, and complete turnkey management 
                  under single-point leadership. 
                </p>

                <p className="mt-6">
                  The result is a frictionless building journey 
                  and a space built to endure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF EXPERTISE */}
        <section className="section-light">
          <div className="site-container pb-24 sm:pb-28 lg:pb-32">
            <div className="mb-8 border-b border-[#10243a]/10 pb-5">
              <p className="eyebrow text-[#C58C67]">
                02 — Areas of Expertise
              </p>
            </div>

          <div className="grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => (
                <a
                  key={service.number}
                  href={service.href}
                  className="group flex min-h-[360px] cursor-pointer flex-col justify-between bg-[#173754] p-8 text-[#F5F2EA] transition duration-500 hover:bg-[#1D4264] sm:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-medium tracking-[0.25em] text-[#C58C67]">
                      {service.number}
                    </span>

                    <span className="text-lg text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C58C67]">
                      ↗
                    </span>
                  </div>

                  <div className="mt-20">
                    <h3
                      className="text-[2.3rem] leading-none tracking-[-0.02em] text-[#F5F2EA] sm:text-[2.7rem]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#C8D3DE]">
                      {service.description}
                    </p>

                    <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C58C67]">
                      Explore →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section-dark">
          <div className="site-container py-24 sm:py-28 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="eyebrow text-[#C58C67]">
                  03 — Experience
                </p>

                <h2
                  className="mt-6 max-w-xl text-[3.2rem] leading-[0.98] sm:text-[4rem] lg:text-[4.5rem]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ​The Integrated Advantage:
                </h2>
              </div>

              <div className="max-w-2xl text-[16px] leading-8 text-[#C8D3DE] sm:text-[17px]">
                <p>
                  Because design, construction, and interiors happen under 
                  single-point leadership, your vision remains completely 
                  uncompromised from foundation to handover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
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