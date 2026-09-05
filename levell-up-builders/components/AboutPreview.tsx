import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-[#10243A] text-[#F5F2EA]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-8 md:py-28 lg:px-16 lg:py-32">

        {/* EYEBROW */}
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-[#C58C67]">
          The Story Behind Levell Up Builders
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* LEFT */}
          <div>
            <h2
              className="max-w-4xl text-[3.0rem] leading-[1.0] tracking-[-0.02em] sm:text-[3.5rem] lg:text-[4.2rem]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Built on experience.
              <br />
              Driven by a passion
              <br />
              to create.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-xl">

            <p className="text-[15px] leading-7 text-[#C8D3DE] sm:text-base sm:leading-8">
              For our founder, construction was never just a profession—it
              was part of his world from the very beginning.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-[#C8D3DE] sm:text-base sm:leading-8">
              Growing up with a father deeply involved in construction,
              he was introduced early to the realities of building and
              the countless decisions, skilled hands and commitment
              required to get things right.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-[#C8D3DE] sm:text-base sm:leading-8">
              After pursuing Civil Engineering, he went on to build more
              than two decades of experience in interior design and
              execution, working with established names including Sleek
              and Johnson.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-[#C8D3DE] sm:text-base sm:leading-8">
              Today, LEVELL UP BUILDERS brings together those roots in
              construction, engineering expertise and years of experience
              creating beautiful spaces.
            </p>

            <Link
              href="/our-story"
              className="mt-8 inline-block border-b border-[#C58C67] pb-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#F5F2EA] transition hover:text-[#C58C67]"
            >
              Discover Our Story →
            </Link>

          </div>

        </div>

        {/* PHILOSOPHY */}
        <div className="mt-20 border-t border-white/10 pt-10 lg:mt-24 lg:pt-12">

          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#C58C67]">
            Our Belief
          </p>

          <p
            className="mt-5 max-w-4xl text-[2rem] leading-[1.08] tracking-[-0.015em] text-[#F5F2EA] sm:text-[2.5rem] lg:text-[3rem]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            A great space is created when design, engineering and
            execution work as one.
          </p>

        </div>

      </div>
    </section>
  );
}