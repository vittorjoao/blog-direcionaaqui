import Avatar from "../ui/avatar";
import ContentfulImage from "../ui/contentfulimage";
import DateComponent from "../ui/date";

export default function PostHeader({ post }) {
  const { title, coverImage, author, date } = post.fields;

  return (
    <>
      <h3 className="text-xl font-bold mb-2 leading-snug text-zinc-900 dark:text-slate-50">
        {title}
      </h3>
      <div className="hidden md:flex md:justify-between md:items-center md:mb-10 text-zinc-900 dark:text-slate-50">
        <Avatar
          name={author.fields.name}
          jobTitle={author.fields.jobTitle}
          picture={author.fields.picture}
        />
        <DateComponent dateString={date} className="text-sm text-gray-400" />
      </div>
      <div className="mb-8 sm:mx-0">
        <ContentfulImage
          alt={`Cover image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className="flex justify-between items-center md:hidden mb-6 text-zinc-900 dark:text-slate-50">
        <Avatar
          name={author.fields.name}
          jobTitle={author.fields.jobTitle}
          picture={author.fields.picture}
        />
        <DateComponent dateString={date} className="text-sm text-gray-400" />
      </div>
    </>
  );
}
