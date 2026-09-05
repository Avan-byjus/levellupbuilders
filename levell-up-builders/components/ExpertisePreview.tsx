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
        <div className="grid overflow-hidden md:grid-cols-2">

          {services.map((service, index) => (
            <a
              key={service.number}
              href={service.href}
              className={`
                group block min-h-[320px]
                bg-[#173754] p-8
                text-[#F5F2EA]
                no-underline
                transition duration-500
                hover:bg-[#1D4264]
                sm:p-10
                lg:p-12
                ${index === 0 ? "md:border-r md:border-b md:border-white/10" : ""}
                ${index === 1 ? "md:border-b md:border-white/10" : ""}
                ${index === 2 ? "md:border-r md:border-white/10" : ""}
              `}
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