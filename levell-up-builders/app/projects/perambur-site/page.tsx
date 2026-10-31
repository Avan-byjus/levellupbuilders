"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryMedia } from "@/lib/generated-gallery";

export default function PeramburSitePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const constructionGallery = galleryMedia.filter(
  (item) =>
    item.category === "construction" &&
    item.collection === "first-project" &&
    !decodeURIComponent(item.src)
      .toLowerCase()
      .includes("project 1 img")
);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1622] text-[#F5F2EA]">
        {/* HERO */}
        <section className="site-container py-28 sm:py-36 lg:py-40">
          <p className="eyebrow text-[#C58C67]">
            Residential — Project 01
          </p>

          <h1
            className="mt-8 text-[4rem] leading-[0.95] tracking-[-0.035em] sm:text-[5rem] lg:text-[7rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Perambur
            <br />
            Site
          </h1>

          <p className="!mt-10 max-w-2xl text-[17px] leading-9 text-[#C8D3DE]">
            A closer look at our work at the Perambur site.
          </p>
        </section>

        {/* PROJECT GALLERY */}
        <section className="bg-[#F3F0E8] py-30 text-[#10243a] sm:py-32 lg:py-32">
          <div className="site-container">
            <h2
              className="mb-10 text-4xl font-medium leading-tight tracking-[-0.03em] text-[#C58C67] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Project Gallery
            </h2>

            {constructionGallery.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {constructionGallery.map((item, index) => (
                  <div
                    key={item.src}
                    className="group overflow-hidden bg-[#E7E1D6]"
                  >
                    {item.type === "video" ? (
                      <div className="aspect-[4/3] w-full">
                        <video
                          src={item.src}
                          controls
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedImage(item.src)}
                        aria-label={`Enlarge Perambur Site photograph ${index + 1}`}
                        className="block aspect-[4/3] w-full cursor-zoom-in overflow-hidden"
                      >
                        <Image
                          src={item.src}
                          alt={`Perambur Site photograph ${index + 1}`}
                          width={1200}
                          height={900}
                          unoptimized
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[350px] items-center justify-center bg-[#E7E1D6] text-[#566779] sm:min-h-[500px]">
                Project photographs and videos coming soon
              </div>
            )}
          </div>
        </section>

        {/* PROJECT INFORMATION */}
        <section className="bg-[#122B41] py-20 sm:py-28">
          <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow text-[#C58C67]">
                The Project
              </p>

              <h2
                className="mt-6 max-w-xl text-4xl leading-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Perambur Site
              </h2>
            </div>

            <div className="max-w-2xl text-[16px] leading-8 text-[#C8D3DE]">
              <p>
                Explore the work and progress at our Perambur site.
                More project details and photographs will be added
                as the collection develops.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close enlarged image"
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
              alt="Enlarged Perambur Site photograph"
              width={1800}
              height={1400}
              unoptimized
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}