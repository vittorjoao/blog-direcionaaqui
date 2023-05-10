"use client";
import Link from "next/link";
import ContentfulImage from "../ui/contentfulimage";
import Flag from "react-world-flags";

export default function CourseCard({ item }) {
  const { title, languages, icon, slug } = item.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 md:hover:scale-105 md:hover:transition md:hover:duration-500">
      <Link href={`/course/${slug}`}>
        <div className="relative w-full h-36 text-gray-900 bg-slate-400 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-800">
          <ContentfulImage
            alt={`Icon image for ${title}`}
            src={icon.fields.file.url}
            layout="fill"
            className="p-4 object-contain bg-blend-color-burn"
          />
        </div>
        <p className="font-semibold p-4 text-zinc-900 dark:text-slate-50">
          {title}
        </p>
        <div className="px-4 pb-4 flex gap-1">
          {languages.map((language) => (
            <Flag
              key={language}
              code={language}
              className="h-4 object-contain"
            />
          ))}
        </div>
      </Link>
    </li>
  );
}
