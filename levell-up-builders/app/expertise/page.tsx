import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Thoughtful planning, strong spatial concepts and architecture designed around the way people live and work.",
    href: "/expertise/architecture",
  },
  {
    number: "02",
    title: "Construction",
    description:
      "Disciplined execution, reliable coordination and uncompromising attention to quality from foundation to finish.",
    href: "/expertise/construction",
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Refined interiors balancing materiality, functionality and a timeless sense of character.",
    href: "/expertise/interior-design",
  },
  {
    number: "04",
    title: "Turnkey Projects",
    description:
      "One integrated process taking your project from initial concept through execution and final delivery.",
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
              What we build.
            </h1>

            <p className="mt-8 max-w-2xl text-[16px] leading-7 text-[#C8D3DE] sm:text-[17px]">
              Residential spaces shaped by design experience,
              thoughtful planning and a commitment to quality.
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
                  Levell Up Builders brings more than two decades of
                  interior design experience into residential
                  construction.
                </p>

                <p className="mt-6">
                  Our approach begins with understanding how a space
                  should look, feel and function before turning those
                  ideas into a finished building.
                </p>

                <p className="mt-6">
                  That design background allows us to approach
                  residential projects with particular attention to
                  proportion, materials, functionality and detail.
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

            <div className="grid overflow-hidden md:grid-cols-2">
              {services.map((service, index) => (
                <a
                  key={service.number}
                  href={service.href}
                  className={`group flex min-h-[360px] cursor-pointer flex-col justify-between bg-[#173754] p-8 text-[#F5F2EA] transition duration-500 hover:bg-[#1D4264] sm:p-10 lg:p-12 ${
                    index === 0
                      ? "border-b border-white/10 md:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "border-b border-white/10"
                      : ""
                  } ${
                    index === 2
                      ? "border-b border-white/10 md:border-r md:border-b-0"
                      : ""
                  }`}
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
                    }}>
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
                  Experience
                  <br />
                  behind every detail.
                </h2>
              </div>

              <div className="max-w-2xl text-[16px] leading-8 text-[#C8D3DE] sm:text-[17px]">
                <p>
                  Before Levell Up Builders entered construction,
                  our founder spent more than 20 years working in
                  interior design.
                </p>

                <p className="mt-6">
                  That experience continues to influence the way we
                  think about residential spaces today — from
                  materials and proportions to functionality and
                  everyday comfort.
                </p>

                <p className="mt-6">
                  Levell Up Builders represents the next chapter:
                  taking that experience beyond interiors and into
                  the construction of complete residential spaces.
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