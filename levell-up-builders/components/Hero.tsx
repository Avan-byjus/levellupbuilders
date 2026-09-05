import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-[#0F1318] sm:min-h-[820px] lg:min-h-[900px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#07101A]/45" />

      {/* Additional subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0F1318] via-[#0F1318]/70 to-transparent" />

      {/* HERO CONTENT */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1440px]
          items-center px-6 pb-20 pt-36
          sm:min-h-[820px] sm:px-8 sm:pb-24 sm:pt-40
          lg:min-h-[900px] lg:px-16 lg:pb-28 lg:pt-44
        "
      >
        <div
          className="
            grid w-full items-center gap-16
            lg:grid-cols-[minmax(0,1fr)_260px]
            xl:grid-cols-[minmax(0,1fr)_300px]
          "
        >
          {/* LEFT SIDE */}
          <div className="max-w-[760px]">

            {/* GOLD SERVICE LINE */}
            <div
              className="
                mb-7 flex flex-wrap items-center gap-x-5 gap-y-2
                text-[9px] font-medium uppercase
                tracking-[0.38em] text-[#C58C67]
                sm:text-[10px] sm:tracking-[0.42em]
              "
            >
              <span>Architecture</span>

              <span className="text-[#C58C67]/70">•</span>

              <span>Construction</span>

              <span className="text-[#C58C67]/70">•</span>

              <span>Interior Design</span>

              <span className="text-[#C58C67]/70">•</span>

              <span>Turnkey</span>
            </div>

            {/* MAIN HEADING */}
            <h1
              className="
                max-w-[760px]
                text-[clamp(3.5rem,7vw,6.8rem)]
                leading-[0.88]
                tracking-[-0.04em]
                text-[#F5F2EA]
              "
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Designed with
              <br />
              Vision.
              <br />
              Built with
              <br />
              Precision.
            </h1>

            {/* TAGLINE / DESCRIPTION */}
            <p
              className="
                mt-9 max-w-[650px]
                text-sm leading-7
                text-white/75
                sm:mt-10 sm:text-base sm:leading-8
                lg:mt-11
              "
            >
              At LEVELL UP BUILDERS, we transform ideas into exceptional
              spaces through quality craftsmanship, thoughtful design, and
              attention to every detail.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                mt-9 flex flex-wrap gap-3
                sm:mt-10 sm:gap-4
              "
            >
              <Link
                href="/projects"
                className="
                  border border-[#C58C67]
                  px-6 py-3.5
                  text-[10px] font-medium uppercase
                  tracking-[0.28em] text-white
                  transition-all duration-300
                  hover:bg-[#C58C67]
                  hover:text-white
                  sm:px-8 sm:py-4
                "
              >
                Explore Projects
              </Link>

              <Link
                href="/our-story"
                className="
                  border border-white/30
                  px-6 py-3.5
                  text-[10px] font-medium uppercase
                  tracking-[0.28em] text-white
                  transition-all duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-[#102B45]
                  sm:px-8 sm:py-4
                "
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE STATS */}
          <div
            className="
              hidden
              lg:flex lg:flex-col
              lg:items-end lg:justify-center
            "
          >
            {/* YEARS */}
            <div className="text-right">
              <p
                className="
                  text-4xl text-[#C58C67]
                  xl:text-5xl
                "
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                20+
              </p>

              <p
                className="
                  mt-1 text-[9px]
                  uppercase tracking-[0.35em]
                  text-white/60
                "
              >
                Years Experience
              </p>
            </div>

            {/* GOLD VERTICAL LINE */}
            <div
              className="
                my-8 h-24 w-px
                bg-[#C58C67]/50
                xl:my-10 xl:h-28
              "
            />

            {/* PROJECTS */}
            <div className="text-right">
              <p
                className="
                  text-4xl text-[#C58C67]
                  xl:text-5xl
                "
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                150+
              </p>

              <p
                className="
                  mt-1 text-[9px]
                  uppercase tracking-[0.35em]
                  text-white/60
                "
              >
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}