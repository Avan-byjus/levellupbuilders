"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryMedia } from "@/lib/generated-gallery";

const projects = [
  {
    number: "01",
    category: "Residential",
    title: "Perambur Site",
    description:
      "A refined residential environment shaped around proportion, material and natural light.",
    href: "/projects/perambur-site",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const interiorImages = galleryMedia
    .filter(
      (item) =>
        item.category === "interiors" &&
        item.collection === "home-preview" &&
        item.type === "image"
    )
    .slice(0, 3);

    const constructionImages = galleryMedia
    .filter(
      (item) =>
        item.category === "construction" &&
        item.collection === "first-project" &&
        item.type === "image" &&
        !decodeURIComponent(item.src)
          .toLowerCase()
          .includes("project 1 img")
    )
    .slice(0, 2);

  const constructionVideo = galleryMedia
    .filter(
      (item) =>
        item.category === "construction" &&
        item.collection === "first-project" &&
        item.type === "video"
    )
    .slice(0, 1);

  return (
    <>
      {/* ORIGINAL FEATURED PROJECTS */}
      <section className="section-light projects-section">
        <div className="site-container">
          <div className="projects-header">
            <p className="eyebrow text-[#C58C67]">
              Featured Projects
            </p>

            <h2 className="section-title">
              Selected Works
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.href}
                className="group flex min-h-[480px] flex-col justify-between bg-[#173754] p-8 text-[#F5F2EA] no-underline transition duration-500 hover:-translate-y-1 hover:bg-[#1D4264] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.25em] text-[#C58C67]">
                    {project.number}
                  </span>

                  <span className="text-base text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C58C67]">
                    ↗
                  </span>
                </div>

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

      {/* SELECTED INTERIOR PREVIEWS */}
      <section className="section-light py-16">
        <div className="site-container">
          <div className="mb-10">
            <p className="eyebrow text-[#C58C67]">
              Interior Design
            </p>

            <h2 className="section-title">
              Spaces with Character
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              A glimpse into our interior design work, where materials,
              details and atmosphere come together.
            </p>
          </div>

          {interiorImages.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {interiorImages.map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden bg-[#173754]"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item.src)}
                      className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
                      aria-label="View interior image"
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={900}
                        height={675}
                        unoptimized
                        className="aspect-[4/3] w-full bg-[#173754] object-contain transition duration-300 hover:opacity-90"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/expertise/interior-design"
                  className="inline-block border-b border-[#C58C67] pb-2 text-xs uppercase tracking-[0.25em] text-[#173754] transition hover:text-[#C58C67]"
                >
                  Explore Interior Gallery →
                </a>
              </div>
            </>
          ) : (
            <p className="text-gray-500">
              Interior preview images will appear here once added to the gallery folder.
            </p>
          )}
        </div>
      </section>

      {/* SELECTED CONSTRUCTION PREVIEWS */}
      <section className="section-light py-16">
        <div className="site-container">
          <div className="mb-10">
            <p className="eyebrow text-[#C58C67]">
              Construction
            </p>

            <h2 className="section-title">
              Built with Purpose
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              A look at our construction work, from the project process
              to the finished result.
            </p>
          </div>

          {constructionImages.length > 0 || constructionVideo.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {constructionImages.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden bg-[#173754]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item.src)}
                    className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
                    aria-label="View construction image"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={900}
                      height={675}
                      unoptimized
                      className="aspect-[4/3] w-full bg-[#173754] object-contain transition duration-300 hover:opacity-90"
                    />
                  </button>
                </div>
              ))}

              {constructionVideo.map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden bg-[#173754]"
                >
                  <video
                    src={item.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-[4/3] w-full bg-[#173754] object-contain"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Construction preview media will appear here once added to the gallery folder.
            </p>
          )}
        </div>
      </section>

      {/* IMAGE POPUP / LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 text-4xl leading-none text-white transition hover:text-[#C58C67]"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="flex max-h-[90vh] max-w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected project image"
              width={1600}
              height={1200}
              unoptimized
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}