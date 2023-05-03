import ContentfulImage from "./contentfulimage";

export default function Avatar({ name, jobTitle, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 mr-4">
        <ContentfulImage
          src={picture.fields.file.url}
          layout="fill"
          className="rounded-full m-0"
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-500">{jobTitle}</span>
      </div>
    </div>
  );
}
