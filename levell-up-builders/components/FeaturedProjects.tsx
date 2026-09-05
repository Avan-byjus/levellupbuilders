const projects = [
  {
    number: "01",
    category: "Residential",
    title: "Luxury Residence",
    description:
      "A refined residential environment shaped around proportion, material and natural light.",
    href: "/projects/luxury-residence",
  },
  {
    number: "02",
    category: "Commercial",
    title: "Corporate Office",
    description:
      "A contemporary workplace designed for clarity, collaboration and long-term functionality.",
    href: "/projects/corporate-office",
  },
  {
    number: "03",
    category: "Commercial",
    title: "Commercial Complex",
    description:
      "A complete commercial development combining architectural presence with practical execution.",
    href: "/projects/commercial-complex",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-light projects-section">
      <div className="site-container">

        {/* HEADER */}
        <div className="projects-header">
          <p className="eyebrow text-[#C58C67]">
            Featured Projects
          </p>

          <h2 className="section-title">
            Selected Works
          </h2>
        </div>

        {/* PROJECTS */}
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              className="group flex min-h-[480px] flex-col justify-between bg-[#173754] p-8 text-[#F5F2EA] no-underline transition duration-500 hover:-translate-y-1 hover:bg-[#1D4264] lg:p-10"
            >

              {/* TOP */}
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                  {project.number}
                </span>

                <span className="text-base text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C58C67]">
                  ↗
                </span>
              </div>

              {/* CONTENT */}
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C58C67]">
                  {project.category}
                </p>

                <h3 className="card-title text-[#F5F2EA]">
                  {project.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#C8D3DE]">
                  {project.description}
                </p>

                <span className="mt-7 inline-block border-b border-white/25 pb-1 text-[10px] uppercase tracking-[0.28em] text-white/65 transition duration-300 group-hover:border-[#C58C67] group-hover:text-[#C58C67]">
                  View Project →
                </span>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}