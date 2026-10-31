"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryMedia } from "@/lib/generated-gallery";

type Collection = "kitchens" | "bedrooms" | "others";

const collections: {
  id: Collection;
  title: string;
  description: string;
}[] = [
  {
    id: "kitchens",
    title: "Kitchens",
    description: "Kitchen spaces, finishes and thoughtful details.",
  },
  {
    id: "bedrooms",
    title: "Bedrooms",
    description: "Comfortable spaces designed for everyday living.",
  },
  {
    id: "others",
    title: "Others",
    description: "Living spaces, TV units, bathrooms, wardrobes and more.",
  },
];

export default function InteriorGallery() {
  const [activeCollection, setActiveCollection] =
    useState<Collection | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = galleryMedia.filter(
    (item) =>
      item.category === "interiors" &&
      item.type === "image" &&
      item.collection === activeCollection
  );

  return (
    <section className="bg-[#F3F0E8] px-4 pt-8 pb-5 text-[#10243a] md:px-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#98764f]">
          Explore our work
        </p>

        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl">
          Interior Gallery
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526071] md:text-base">
          Explore a selection of our interior design work, organised into
          collections.
        </p>

        {!activeCollection ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => {
              const collectionImages = galleryMedia.filter(
                (item) =>
                  item.category === "interiors" &&
                  item.type === "image" &&
                  item.collection === collection.id
              );

              const coverImage = collectionImages[0];

              return (
                <button
                  key={collection.id}
                  type="button"
                  onClick={() => setActiveCollection(collection.id)}
                  className="group overflow-hidden rounded-sm bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e6e0d5]">
                    {coverImage ? (
                      <Image
                        src={coverImage.src}
                        alt={collection.title}
                        fill
                        unoptimized
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-[#526071]">
                        Images coming soon
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-xs uppercase tracking-[0.2em]">
                        View collection
                      </p>
                      <h3 className="mt-2 font-[var(--font-heading)] text-3xl">
                        {collection.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 px-5 py-5">
                    <div>
                      <p className="text-sm text-[#526071]">
                        {collection.description}
                      </p>
                      <p className="mt-2 text-xs text-[#98764f]">
                        {collectionImages.length} photographs
                      </p>
                    </div>

                    <span className="text-xl text-[#98764f] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-[var(--font-heading)] text-3xl">
                {collections.find((item) => item.id === activeCollection)?.title}
              </h3>

              <button
                type="button"
                onClick={() => setActiveCollection(null)}
                className="border border-[#10243a] px-5 py-3 text-xs uppercase tracking-[0.15em] transition hover:bg-[#10243a] hover:text-white"
              >
                ← Back to collections
              </button>
            </div>

            {images.length > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setSelectedImage(image.src)}
                    className="group relative aspect-[4/3] overflow-hidden bg-[#e6e0d5]"
                    aria-label={`Open ${activeCollection} image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={`${activeCollection} interior ${index + 1}`}
                      fill
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-sm text-[#526071]">
                No photographs have been added to this collection yet.
              </p>
            )}
          </>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-5 z-10 text-4xl text-white"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Interior design photograph"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}