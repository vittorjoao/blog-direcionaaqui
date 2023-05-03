import { formatDate } from "../../../lib/util";

export default function DateComponent({ dateString, options, ...rest }) {
  return (
    <time dateTime={dateString} {...rest}>
      {formatDate(dateString, options)}
    </time>
  );
}
