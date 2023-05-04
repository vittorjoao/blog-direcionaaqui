import Link from "next/link";
import ContentfulImage from "../ui/contentfulimage";

export default function KnowledgeCard({ item }) {
  const { title, slug, icon } = item.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-900 md:hover:scale-105 transition duration-500">
      <Link href={`/technology/${slug}`}>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-20 h-20 bg-slate-100 rounded-full">
            <ContentfulImage
              alt={`Icon image for ${title}`}
              src={icon.fields.file.url}
              layout="fill"
              className="p-2"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center text-gray-900 dark:text-white pb-4">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </Link>
    </li>
  );
}
