import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TurnkeyProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b1622] text-[#F5F2EA]">
        {/* HERO */}
        <section className="site-container py-32 lg:py-40">
          <p className="eyebrow text-[#C58C67]">
            Our Expertise — 04
          </p>

          <h1
            className="mt-6 text-[4rem] leading-none sm:text-[5rem] lg:text-[6rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Turnkey
            <br />
            Projects
          </h1>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#C8D3DE]">
            A connected approach bringing design, construction and
            execution together through one coordinated process.
          </p>
        </section>

        {/* CONTENT */}
        <section className="section-light text-[#10243a]">
          <div className="site-container py-24 sm:py-28 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="eyebrow text-[#C58C67]">
                  One connected process
                </p>

                <h2
                  className="mt-6 text-[3.2rem] leading-[0.98] sm:text-[4rem]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  From concept
                  <br />
                  to completion.
                </h2>
              </div>

              <div className="max-w-2xl text-[16px] leading-8 text-[#667586]">
                <p>
                  Turnkey projects bring different stages of a
                  project together into one coordinated journey.
                </p>

                <p className="mt-6">
                  For residential projects, this can mean creating
                  a clearer connection between the initial idea,
                  design decisions, construction and the finished
                  space.
                </p>

                <p className="mt-6">
                  Our design background gives us an appreciation
                  for how each stage influences the next, helping
                  us approach projects as complete spaces rather
                  than isolated tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#173754]">
          <div className="site-container py-24 sm:py-28 lg:py-32">
            <p className="eyebrow text-[#C58C67]">
              The Process
            </p>

            <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
              <div className="bg-[#173754] p-8 lg:p-10">
                <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                  01
                </span>

                <h3
                  className="mt-16 text-[2.2rem] leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Concept
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                  Understanding the vision, requirements and
                  possibilities of the project.
                </p>
              </div>

              <div className="bg-[#173754] p-8 lg:p-10">
                <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                  02
                </span>

                <h3
                  className="mt-16 text-[2.2rem] leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Execution
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                  Turning the agreed direction into a carefully
                  executed residential project.
                </p>
              </div>

              <div className="bg-[#173754] p-8 lg:p-10">
                <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                  03
                </span>

                <h3
                  className="mt-16 text-[2.2rem] leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Completion
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                  Bringing the different elements together into a
                  finished and considered space.
                </p>
              </div>
            </div>
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
                Ready to make a dream come true?
              </h2>

            <div className="mt-6 flex w-full justify-center">
              <p className="max-w-2xl text-center text-[16px] leading-7 text-[#C8D3DE] sm:text-[17px]">
                Your vision. Our hands. Let us build together              
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