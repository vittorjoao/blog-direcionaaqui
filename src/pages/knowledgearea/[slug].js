import CourseCard from "@/components/main/coursecard";
import RichText from "@/components/ui/richtext";
import Skeleton from "@/components/ui/skeleton";
import { client } from "@/lib/contentful";
import { useRouter } from "next/router";

export default function Technology({ technology, courses }) {
  const router = useRouter();

  return (
    <section className="container flex justify-center gap-4">
      {router.isFallback ? (
        <Skeleton />
      ) : (
        <>
          <article className="md:pr-8">
            <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
              Sobre {technology.fields.title}
            </h3>
            <div className="mx-auto prose text-zinc-900 dark:text-slate-50">
              <RichText content={technology.fields.description} />
            </div>
            <div className="block lg:hidden pt-4 md:pt-0">
              <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
                Cursos
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {courses.map((course) => (
                  <CourseCard key={course.sys.id} item={course} />
                ))}
              </ul>
            </div>
          </article>
          <div className="hidden lg:block flex-1">
            <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
              Cursos
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courses.map((course) => (
                <CourseCard
                  key={course.sys.id}
                  item={course}
                  source={technology.fields.slug}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  let courses = [];

  const response = await client.getEntries({
    content_type: "technology",
    "fields.slug": slug,
  });

  const coursesResponse = await client.getEntries({
    content_type: "course",
    "fields.tags": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (coursesResponse?.items?.length) {
    courses = coursesResponse?.items;
  }

  return {
    props: {
      technology: response?.items?.[0],
      courses: courses,
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "technologyAreas" });

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
