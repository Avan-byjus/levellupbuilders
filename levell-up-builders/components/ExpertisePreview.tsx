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

export default function ExpertisePreview() {
  return (
    <section id="expertise" className="bg-[#F3F0E8] text-[#10243A]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-8 md:py-28 lg:px-16 lg:py-32">

        {/* HEADING */}
        <div className="mb-12">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-[#C58C67]">
            Expertise
          </p>

          <h2
            className="text-[3.25rem] leading-none tracking-[-0.025em] sm:text-[3.75rem] lg:text-[4.25rem]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            What We Build
          </h2>
        </div>

        {/* EXPERTISE BOXES */}
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={service.number}
              href={service.href}
              className="group flex min-h-[360px] cursor-pointer flex-col justify-between bg-[#173754] p-8 text-[#F5F2EA] transition duration-500 hover:bg-[#1D4264] sm:p-10 lg:p-12"
            >

              {/* TOP ROW */}
              <div className="flex items-start justify-between">

                <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                  {service.number}
                </span>

                <span
                  className="
                    text-base
                    text-[#C8D3DE]
                    transition
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#C58C67]
                  "
                >
                  ↗
                </span>

              </div>

              {/* CONTENT */}
              <div className="mt-20">

                <h3
                  className="
                    text-[2rem]
                    leading-none
                    tracking-[-0.015em]
                    text-[#F5F2EA]
                    transition
                    duration-300
                    group-hover:text-white
                    sm:text-[2.2rem]
                  "
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {service.title}
                </h3>

                <p className="mt-5 max-w-md text-[15px] leading-7 text-[#C8D3DE]">
                  {service.description}
                </p>

                {/* CLICK INDICATOR */}
                <p
                  className="
                    mt-8
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#C58C67]
                    transition
                    duration-300
                    group-hover:tracking-[0.32em]
                  "
                >
                  Explore →
                </p>

              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  );
}