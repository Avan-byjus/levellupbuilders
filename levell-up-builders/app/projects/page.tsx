"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryMedia } from "@/lib/generated-gallery";

const projects = [
  {
    number: "01",
    category: "Residential",
    title: "Perambur Site",
    description:
      "A residential project shaped around considered proportions, materiality and everyday living.",
    href: "/projects/perambur-site",
    mediaCategory: "interiors",
  },
  {
    number: "02",
    category: "Residential",
    title: "Residential Project",
    description:
      "A design-led residential environment developed with attention to functionality, detail and execution.",
    href: "/projects/corporate-office",
    mediaCategory: "construction",
  },
  {
    number: "03",
    category: "Residential",
    title: "Future Residence",
    description:
      "Explore more of the work and direction of Levell Up Builders.",
    href: "/projects/commercial-complex",
    mediaCategory: "interiors",
  },
] as const;

function ProjectMedia({
  src,
  type,
  alt,
  onImageClick,
}: {
  src: string;
  type: "image" | "video";
  alt: string;
  onImageClick?: (src: string) => void;
}) {
  if (type === "video") {
    return (
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={alt}
        className="h-full w-full object-cover"
      />
    );
  }

  const image = (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={750}
      unoptimized
      className="h-full w-full object-contain transition-transform duration-700"    
    />
  );

  if (onImageClick) {
    return (
      <button
        type="button"
        onClick={() => onImageClick(src)}
        aria-label={`View ${alt}`}
        className="group block h-full w-full cursor-zoom-in overflow-hidden"
      >
        {image}
      </button>
    );
  }

  return image;
}

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Remove repeated media paths.
  const uniqueMedia = Array.from(
    new Map(galleryMedia.map((item) => [item.src, item])).values()
  );

  const interiorMedia = uniqueMedia.filter(
    (item) => item.category === "interiors"
  );

  const constructionMedia = uniqueMedia.filter(
    (item) => item.category === "construction"
  );

  // Homepage images are kept separate from the six Projects previews.
  const interiorPreviewMedia = interiorMedia.filter(
  (item) =>
    ["kitchens", "bedrooms", "others"].includes(item.collection) &&
    item.type === "image"
);

  const constructionImages = constructionMedia.filter(
    (item) => item.type === "image"
  );

  const featuredImage = constructionImages.find((item) =>
  decodeURIComponent(item.src).toLowerCase().includes("project 1 img")
);

// Only the Perambur Site row uses a thumbnail.
const peramburSiteImage = constructionImages.find((item) =>
  decodeURIComponent(item.src).toLowerCase().includes("project 1 img")
);

  const interiorPreviews = interiorPreviewMedia.slice(0, 6);

  return (
    <main className="bg-[#F3F0E8] text-[#F5F2EA]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0D1926] pt-32 pb-20 text-[#F5F2EA] sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-36">
        <div className="site-container">
          <p className="eyebrow mb-6 text-[#C58C67]">
            Our Projects
          </p>

          <h1 className="max-w-4xl text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
            Spaces built
            <br />
            with purpose.
          </h1>

          <p className="!mt-10 max-w-xl text-base leading-10 text-[#C8D3DE] sm:text-lg">
            A collection of interior design and construction work shaped
            by thoughtful planning, practical execution and attention to detail.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-24">
        <div className="site-container grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow mb-5 text-[#C58C67]">
              Selected Work
            </p>

            <h2 className="max-w-lg text-4xl leading-tight tracking-[-0.04em] sm:text-5xl text-[#0D1926]">
              From ideas to spaces.
            </h2>
          </div>

          <div className="max-w-xl space-y-5 text-base leading-8 text-[#566779]">
            <p>
              Levell Up Builders brings together interior design experience
              and construction expertise to create considered spaces.
            </p>

            <p>
              Each project balances visual character, practical function
              and the details that make a space work in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-[#122B41] py-14 text-[#F5F2EA] sm:py-20">
        <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="block overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-[#1B3B56]">
              {featuredImage ? (
                <ProjectMedia
                  src={featuredImage.src}
                  type="image"
                  alt="Featured interior design project"
                  onImageClick={setSelectedImage}
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-white/60">
                  Project photograph coming soon
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5 text-[#C58C67]">
              01 — Featured Project
            </p>

            <h2 className="max-w-xl text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              A considered
              <br />
              residential space.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#C8D3DE]">
              Explore a project where materials, interiors and everyday
              functionality come together in a considered environment.
            </p>

            <Link
              href="/projects/perambur-site"
              className="mt-8 inline-flex border-b border-[#C58C67] pb-2 text-sm text-[#F5F2EA] transition hover:text-[#C58C67]"
            >
              Explore featured project
              <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CLICKABLE PROJECT COLLECTION */}
      <section className="py-16 sm:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5 text-[#C58C67]">
                Project Collection
              </p>

              <h2 className="text-[#0D1926] text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                Selected projects.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#566779]">
              Browse our project pages to discover more about our work.
            </p>
          </div>

          <div className="border-t border-[#D9D4C9]">
            {projects.map((project, index) => {
              const media = index === 0 ? peramburSiteImage : undefined;

              return (
                <Link
                  key={project.number}
                  href={project.href}
                  className="group grid gap-5 border-b border-[#D9D4C9] py-6 no-underline transition-colors hover:bg-[#EAE5DA] sm:grid-cols-[40px_180px_minmax(0,1fr)_32px] sm:items-center sm:gap-7 sm:py-8"
                >
                  <span className="text-xs tracking-[0.2em] text-[#0D1926] transition-colors group-hover:text-[#A76F4E]">
                    {project.number}
                  </span>

                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#1B3B56]">
                    {media ? (
                      <ProjectMedia
                        src={media.src}
                        type="image"
                        alt={`${project.title} photograph`}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-white/70">
                        Image coming soon
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="eyebrow mb-2 text-[#C58C67]">
                      {project.category}
                    </p>

                    <h3 className="text-2xl text-[#0D1926] tracking-[-0.025em] transition-colors group-hover:text-[#A76F4E]">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#566779]">
                      {project.description}
                    </p>

                    <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.18em] text-[#173754]">
                      {project.number === "01"
                        ? "Featured Project"
                        : project.number === "02"
                          ? "Residential"
                          : "View Project"}
                    </span>
                  </div>

                  <span className="text-xl text-[#C58C67] transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERIOR DESIGN PREVIEWS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5 text-[#C58C67]">
                Interior Design
              </p>

              <h2 className="text-[#0D1926] text-4xl tracking-[-0.04em] sm:text-5xl">
                Spaces and details.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#566779]">
              A glimpse into our interior design work, from considered
              materials to carefully shaped spaces.
            </p>
          </div>

          {interiorPreviews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {interiorPreviews.map((item, index) => (
                  <div
                    key={item.src}
                    className="group aspect-[4/3] min-w-0 overflow-hidden bg-[#173754]"
                  >
                    <ProjectMedia
                      src={item.src}
                      type="image"
                      alt={`Interior design preview ${index + 1}`}
                      onImageClick={setSelectedImage}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/expertise/interior-design"
                  className="inline-flex items-center gap-4 border border-[#0D1926] px-7 py-4 !text-[#0D1926] text-xs uppercase tracking-[0.16em] transition-colors hover:!border-[#A76F4E] hover:!bg-[#A76F4E] hover:!text-white"
                >
                  Explore Interior Gallery
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </>
          ) : (
            <p className="text-[#566779]">
              Interior design images will appear here when available.
            </p>
          )}
        </div>
      </section>

      {/* CONSTRUCTION COLLECTION CARD */}
      <section className="bg-[#0D1926] py-16 text-[#F5F2EA] sm:py-24">
        <div className="site-container">
          <p className="eyebrow mb-5 text-[#C58C67]">
            Construction
          </p>

          <h2 className="mb-6 text-4xl tracking-[-0.04em] sm:text-5xl">
            Progress in practice.
          </h2>

          <p className="mb-10 max-w-xl leading-8 text-[#C8D3DE]">
            Explore the work behind the finished spaces, from construction
            progress to the details of project execution.
          </p>

          <Link
            href="/projects/perambur-site"
            className="group block max-w-3xl overflow-hidden border border-white/15 bg-[#122B41] transition-colors hover:border-[#C58C67]"
          >
            <div className="grid sm:grid-cols-[1.2fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1B3B56]">
                {constructionImages[0] ? (
                  <Image
                    src={constructionImages[0].src}
                    alt="Construction project collection"
                    width={1000}
                    height={750}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-white/60">
                    Construction photograph coming soon
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <span className="eyebrow mb-5 text-[#C58C67]">
                  Project Collection
                </span>

                <h3 className="text-3xl tracking-[-0.03em] text-[#F5F2EA] transition-colors group-hover:text-[#C58C67] sm:text-4xl">
                  First Construction Project
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#C8D3DE]">
                  View the project photographs and videos, and follow
                  the work through its different stages.
                </p>

                <span className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#C58C67]">
                  Explore project
                  <span className="text-base transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#F3F0E8] py-16 sm:py-24">
        <div className="site-container grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow mb-5 text-[#C58C67]">
              Our Approach
            </p>

            <h2 className="text-[#0D1926] text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              Design informs
              <br />
              everything.
            </h2>
          </div>

          <div className="divide-y divide-[#D9D4C9]">
            {[
              {
                number: "01",
                title: "Thoughtful Design",
                text: "Interior design experience informs how spaces are considered before work begins.",
              },
              {
                number: "02",
                title: "Practical Function",
                text: "Every space should balance visual character with the needs of everyday life.",
              },
              {
                number: "03",
                title: "Attention to Detail",
                text: "Materials, proportions and finishing details contribute to the overall result.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[36px_1fr] gap-4 py-6"
              >
                <span className="text-xs text-[#0D1926]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl text-[#C58C67]">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-[#0D1926]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
          >
            ×
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged project photograph"
              width={1600}
              height={1200}
              unoptimized
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}