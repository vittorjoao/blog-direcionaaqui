import PostBody from "@/components/blog/postbody";
import PostHeader from "@/components/blog/postheader";
import PreviewAlert from "@/components/ui/previewalert";
import Skeleton from "@/components/ui/skeleton";
import { client, previewClient } from "@/lib/contentful";
import { useRouter } from "next/router";

export default function Post({ post, preview }) {
  const router = useRouter();

  return (
    <>
      {preview && <PreviewAlert />}
      <section className="container">
        <article className="prose mx-auto">
          {router.isFallback ? (
            <Skeleton />
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </section>
    </>
  );
}

export const getStaticProps = async ({ params, preview = false }) => {
  const cfClient = preview ? previewClient : client;
  const { slug } = params;

  const response = await cfClient.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "blogPost" });

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
