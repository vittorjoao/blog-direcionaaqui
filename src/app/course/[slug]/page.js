import ContentfulImage from "@/components/ui/contentfulimage";
import RichText from "@/components/ui/richtext";
import { client } from "@/lib/contentful";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Flag from "react-world-flags";

export const revalidate = 60;

async function getCourse(slug) {
  const response = await client.getEntries({
    content_type: "course",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    throw new Error("Failed to fetch data");
  }

  return response.items[0];
}

export default async function Course({ params }) {
  const course = await getCourse(params.slug);

  return (
    <section className="container flex flex-col lg:flex-row justify-center gap-8">
      <article>
        <div className="mx-auto prose text-zinc-900 dark:text-slate-50">
          <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
            Sobre {course.fields.title}
          </h3>
          <ContentfulImage
            alt={`Cover image for ${course.fields.title}`}
            src={course.fields.coverImage.fields.file.url}
            width={course.fields.coverImage.fields.file.details.image.width}
            height={course.fields.coverImage.fields.file.details.image.height}
          />
          <div className="flex flex-col sm:hidden items-center lg:hidden text-sm font-medium bg-white dark:bg-zinc-900 border-r border-t border-l border-slate-300 dark:border-zinc-800 rounded-tl-lg rounded-tr-lg">
            <div className="w-full flex grow gap-1 px-4 py-2 border-b border-slate-300 dark:border-zinc-800">
              <FontAwesomeIcon icon={faStar} />
              Cursos Certificados
            </div>
            <div className="w-full flex grow gap-1 px-4 py-2 border-b">
              <FontAwesomeIcon icon={faExternalLink} />
              <Link href={course.fields.website} passHref={true}>
                {course.fields.website}
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center lg:hidden text-sm font-medium bg-white dark:bg-zinc-900 border-r border-t border-l border-slate-300 dark:border-zinc-800 rounded-tl-lg rounded-tr-lg">
            <div className="flex grow items-center gap-1 px-4 py-2 border-r border-slate-300 dark:border-zinc-800 ">
              <FontAwesomeIcon icon={faStar} />
              Cursos Certificados
            </div>
            <div className="flex grow items-center gap-1 px-4 py-2">
              <FontAwesomeIcon icon={faExternalLink} />
              <Link href={course.fields.website} passHref={true}>
                {course.fields.website}
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden text-sm font-medium bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 rounded-bl-lg rounded-br-lg">
            <div className="flex flex-col grow gap-1 px-4 py-2">
              <div className="flex gap-1">
                <FontAwesomeIcon icon={faTags} /> Tags
              </div>
              <div className="grid grid-cols-2 gap-1">
                {course.fields.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/knowledgearea/${tag}`}
                    passHref={true}
                  >
                    <span className="w-full bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-50 text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-center">
                      {String(tag).toUpperCase()}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <RichText content={course.fields.description} />
        </div>
      </article>
      <div className="hidden lg:block py-9">
        <ul className="w-64 text-sm font-medium bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-zinc-900 dark:text-slate-50 rounded-lg">
          <li className="w-full flex items-center gap-1 px-4 py-2 border-b border-slate-300 dark:border-zinc-800 rounded-t-lg">
            <div>
              <FontAwesomeIcon icon={faLanguage} /> Linguagens
            </div>
            {course.fields.languages.map((language) => (
              <Flag
                key={language}
                code={language}
                className="h-4 object-contain"
              />
            ))}
          </li>
          <li className="w-full flex items-center gap-1 px-4 py-2 border-b border-slate-300 dark:border-zinc-800">
            <FontAwesomeIcon icon={faStar} />
            Cursos Certificados
          </li>
          <li className="w-full flex items-center gap-1 px-4 py-2 border-b border-slate-300 dark:border-zinc-800">
            <FontAwesomeIcon icon={faExternalLink} />
            <Link href={course.fields.website} passHref={true}>
              {course.fields.website}
            </Link>
          </li>
          <li className="w-full flex flex-col gap-1 px-4 py-2 rounded-b-lg">
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faTags} /> Tags
            </div>
            <div className="grid grid-cols-2 gap-1">
              {course.fields.tags.map((tag) => (
                <Link key={tag} href={`/knowledgearea/${tag}`} passHref={true}>
                  <span className="w-full bg-slate-200 dark:bg-zinc-700 text-zinc-900 dark:text-slate-50 text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-center">
                    {String(tag).toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "course" });

  return response?.items?.map((item) => ({
    slug: item.fields.slug,
  }));
}
