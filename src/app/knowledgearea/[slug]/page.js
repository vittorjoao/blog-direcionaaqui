import CourseCard from "@/components/main/coursecard";
import RichText from "@/components/ui/richtext";
import { client } from "@/lib/contentful";

export const revalidate = 60;

async function getTechnologyEntries(slug) {
  const response = await client.getEntries({
    content_type: "technology",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    throw new Error("Failed to fetch data");
  }

  return response.items[0];
}

async function getCourseEntries(slug) {
  const response = await client.getEntries({
    content_type: "course",
    "fields.tags": slug,
  });

  if (!response?.items?.length) {
    throw new Error("Failed to fetch data");
  }

  return response.items;
}

export default async function Technology({ params }) {
  const technologyData = await getTechnologyEntries(params.slug);
  const coursesData = await getCourseEntries(params.slug);

  const [technology, courses] = await Promise.all([
    technologyData,
    coursesData,
  ]);

  return (
    <section className="container flex justify-center gap-4">
      <>
        <article className="md:pr-8">
          <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
            Sobre {technology.fields?.title}
          </h3>
          <div className="mx-auto prose text-zinc-900 dark:text-slate-50">
            <RichText content={technology.fields?.description} />
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
              <CourseCard key={course.sys.id} item={course} />
            ))}
          </ul>
        </div>
      </>
    </section>
  );
}

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "technologyAreas" });

  return response?.items?.map((item) => ({
    slug: item.fields.slug,
  }));
}
