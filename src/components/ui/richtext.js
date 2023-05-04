import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import ContentfulImage from "./contentfulimage";

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => {
      return (
        <pre className="pt-0 bg-gray-800 dark:bg-slate-200 text-white dark:text-gray-900">
          <code>{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="text-gray-900 dark:text-white">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-gray-900 dark:text-white">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-gray-900 dark:text-white">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="text-gray-900 dark:text-white">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className="text-gray-900 dark:text-white">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className="text-gray-900 dark:text-white">{children}</h6>;
    },
    [BLOCKS.QUOTE]: (node, children) => {
      return (
        <blockquote className="border-l-gray-900 dark:border-l-slate-200">
          {children}
        </blockquote>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find((item) =>
          item.marks?.find((mark) => mark.type === "code")
        )
      ) {
        return (
          <div>
            <pre className="m-0 pt-0 pb-0 bg-gray-800 dark:bg-slate-200">
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p className="text-gray-900 dark:text-white">{children}</p>;
    },

    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <Link href={`/posts/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },

    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          {text}
        </a>
      );
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "embedVideo") {
        return (
          <iframe
            height="400"
            width="100%"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
          className="h-20 w-20"
        />
      );
    },
  },
};

export default function RichText({ content }) {
  return <>{documentToReactComponents(content, options)}</>;
}
