import Link from "next/link";
import ContentfulImage from "../ui/contentfulimage";

export default function KnowledgeCard({ item }) {
  const { title, slug, icon } = item.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 md:hover:scale-105 md:hover:transition md:hover:duration-500">
      <Link href={`/knowledgearea/${slug}`}>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-20 h-20 bg-slate-50 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-800 rounded-full">
            <ContentfulImage
              alt={`Icon image for ${title}`}
              src={icon.fields.file.url}
              layout="fill"
              className="p-2"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center text-zinc-900 dark:text-slate-50 pb-4">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </Link>
    </li>
  );
}
