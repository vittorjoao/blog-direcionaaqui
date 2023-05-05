import RichText from "../ui/richtext";

export default function PostBody({ post }) {
  const { content } = post.fields;

  return (
    <div className="mx-auto prose text-zinc-900 dark:text-slate-50">
      <RichText content={content} />
    </div>
  );
}
