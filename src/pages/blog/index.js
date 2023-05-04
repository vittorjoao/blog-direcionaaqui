import PostCard from "@/components/blog/postcard";
import { client } from "@/lib/contentful";

export default function Posts({ posts }) {
  return (
    <section className="container">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};
