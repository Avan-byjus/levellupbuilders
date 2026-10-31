import fs from "node:fs";
import path from "node:path";

const folders = [
  {
    name: "Interior Design",
    directory: "public/images/interiors/home-preview",
    urlPrefix: "/images/interiors/home-preview",
    category: "interiors",
    collection: "home-preview",
  },
  {
    name: "Interior Design",
    directory: "public/images/interiors/gallery",
    urlPrefix: "/images/interiors/gallery",
    category: "interiors",
    collection: "gallery",
    useSubfolders: true,
  },
  {
    name: "Construction Site",
    directory: "public/images/construction/first-project/imgs",
    urlPrefix: "/images/construction/first-project/imgs",
    category: "construction",
    collection: "first-project",
  },
  {
    name: "Construction Site",
    directory: "public/images/construction/first-project/videos",
    urlPrefix: "/images/construction/first-project/videos",
    category: "construction",
    collection: "first-project",
  },
];

const supported = /\.(jpe?g|png|webp|gif|mp4|webm|mov|m4v)$/i;
const videoExtensions = /\.(mp4|webm|mov|m4v)$/i;

function scan(dir, urlPrefix, collection, useSubfolders = false) {
  if (!fs.existsSync(dir)) {
    console.warn(`Folder not found: ${dir}`);
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const folderCollection =
          useSubfolders && collection === "gallery"
            ? entry.name.toLowerCase().replace(/\s+/g, "-")
            : collection;

        return scan(
          fullPath,
          `${urlPrefix}/${encodeURIComponent(entry.name)}`,
          folderCollection,
          false
        );
      }

      if (!entry.isFile() || !supported.test(entry.name)) {
        return [];
      }

      const isVideo = videoExtensions.test(entry.name);

      return [
        {
          src: `${urlPrefix}/${encodeURIComponent(entry.name)}`,
          type: isVideo ? "video" : "image",
          collection,
        },
      ];
    });
}

const media = folders.flatMap((folder) =>
  scan(
    folder.directory,
    folder.urlPrefix,
    folder.collection,
    folder.useSubfolders
  ).map((item) => ({
    ...item,
    category: folder.category,
    title: folder.name,
  }))
);

const output = `// Automatically generated. Do not edit by hand.
export const galleryMedia = ${JSON.stringify(media, null, 2)} as const;
`;

fs.mkdirSync("lib", { recursive: true });
fs.writeFileSync("lib/generated-gallery.ts", output);

console.log(`Gallery generated: ${media.length} media files found.`);