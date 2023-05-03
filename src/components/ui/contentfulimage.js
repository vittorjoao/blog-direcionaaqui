import Image from "next/image";

export default function ContentfulImage(props) {
  return <Image loading="lazy" loader={contentfulLoader} {...props} />;
}

function contentfulLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
