import RichText from "../ui/richtext";

export default function PostBody({ post }) {
  const { content } = post.fields;

  return (
    <div className="mx-auto prose text-gray-900 dark:text-white">
      <RichText content={content} />
    </div>
  );
}
