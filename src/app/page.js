import KnowledgeCard from "@/components/main/knowledgecard";
import { client } from "@/lib/contentful";

async function getEntries() {
  const response = await client.getEntries({ content_type: "technologyAreas" });

  if (!response?.items) {
    return [];
  }

  return response.items;
}

export default async function Home() {
  const items = await getEntries();

  return (
    <section className="container">
      <p className="text-lg md:text-2xl font-bold pb-8 text-gray-900 dark:text-white">
        Com o que deseja aprimorar seu conhecimento hoje ?
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((item) => (
          <KnowledgeCard key={item.sys.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
