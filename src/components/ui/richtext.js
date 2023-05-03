import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const options = {};

export default function RichText({ content }) {
  return <>{documentToReactComponents(content, options)}</>;
}
