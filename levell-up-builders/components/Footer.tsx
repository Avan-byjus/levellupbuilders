import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#102F4F] text-[#F5F2EA]">
      <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-14 py-20 md:grid-cols-[1.7fr_0.8fr_0.9fr] md:gap-12 lg:py-24 lg:gap-20">

          {/* BRAND */}
          <div className="max-w-[560px]">

            <div className="mb-8 flex items-center gap-4">

              {/* IMPORTANT: fixed-size wrapper */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Levell Up Builders"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em]">
                  Levell Up
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#B8C5D0]">
                  Builders
                </p>
              </div>

            </div>

            <h2
              className="max-w-[560px] text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Building timeless spaces with vision, precision and trust.
            </h2>

            <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#B8C5D0]">
              Architecture, construction and interior design solutions
              tailored to create spaces that inspire today and endure
              tomorrow.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <p className="mb-7 text-[10px] uppercase tracking-[0.4em] text-[#C58C67]">
              Navigation
            </p>

            <nav className="flex flex-col gap-4">

              <Link
                href="/"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#C58C67]"
              >
                Home
              </Link>

              <Link
                href="/our-story"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#C58C67]"
              >
                Our Story
              </Link>

              <Link
                href="/expertise"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#C58C67]"
              >
                Expertise
              </Link>

              <Link
                href="/projects"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#C58C67]"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#C58C67]"
              >
                Contact
              </Link>

            </nav>
          </div>

          {/* CONTACT */}
          <div>

            <p className="mb-7 text-[10px] uppercase tracking-[0.4em] text-[#C58C67]">
              Contact
            </p>

            <div className="flex flex-col gap-5">

              <a
                href="mailto:levellupbuilders@gmail.com"
                className="break-all text-sm leading-6 text-white/70 transition-colors hover:text-[#C58C67]"
              >
                levellupbuilders@gmail.com
              </a>

              <a
                href="tel:+919600014483"
                className="text-sm text-white/70 transition-colors hover:text-[#C58C67]"
              >
                +91 96000 14483
              </a>

              <p className="text-sm text-white/50">
                No.3, 1st Floor,5thStreet,Tansi Nagar, 100ft.Taramani Link Road, Velachery, Chennai 600042.
              </p>

            </div>

            <div className="mt-10">

              <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-white/35">
                Let's Talk
              </p>

              <a
                href="mailto:levellupbuilders@gmail.com"
                className="inline-block border-b border-[#C58C67]/50 pb-2 text-[10px] uppercase tracking-[0.3em] text-[#C58C67] transition-colors hover:border-[#C58C67] hover:text-white"
              >
                Start a Conversation →
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-7">

          <div className="flex flex-col gap-4 text-[9px] uppercase tracking-[0.25em] text-white/35 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Levell Up Builders. All Rights Reserved.
            </p>

            <p>
              Designed with Vision. Built with Precision.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}