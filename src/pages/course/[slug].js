import ContentfulImage from "@/components/ui/contentfulimage";
import RichText from "@/components/ui/richtext";
import Skeleton from "@/components/ui/skeleton";
import { client } from "@/lib/contentful";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import Flag from "react-world-flags";

export default function Course({ course }) {
  const router = useRouter();
  const { source } = router.query;
  console.log(course);

  return (
    <section className="container flex justify-center gap-4">
      {router.isFallback ? (
        <Skeleton />
      ) : (
        <>
          <article className="md:pr-8">
            <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
              Sobre {course.fields.title}
            </h3>
            <div className="mx-auto prose text-zinc-900 dark:text-slate-50">
              <ContentfulImage
                alt={`Cover image for ${course.fields.title}`}
                src={course.fields.coverImage.fields.file.url}
                width={course.fields.coverImage.fields.file.details.image.width}
                height={
                  course.fields.coverImage.fields.file.details.image.height
                }
              />
              <RichText content={course.fields.description} />
            </div>
            <div className="block lg:hidden pt-4 md:pt-0">{source}</div>
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
                <div className="felx gap-1">
                  <FontAwesomeIcon icon={faTags} /> Tags:
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {course.fields.tags.map((tag) => (
                    <Link href={`/knowledgearea/${tag}`} passHref={true}>
                      <span
                        key={tag}
                        class="w-full bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-50 text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-center"
                      >
                        {String(tag).toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await client.getEntries({
    content_type: "course",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      course: response?.items?.[0],
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "course" });

  const paths = response?.items?.map((item) => ({
    params: {
      slug: item.fields.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};
