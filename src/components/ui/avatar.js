import ContentfulImage from "./contentfulimage";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 mr-4">
        <ContentfulImage
          src="https://i.pravatar.cc/300"
          layout="fill"
          className="rounded-full m-0"
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="font-semibold">{name}</div>
    </div>
  );
}
