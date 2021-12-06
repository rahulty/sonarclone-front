import { Link } from "gatsby";
import * as React from "react";

export function Product({ index, tag, text, description, url, urlText }) {
  const tagColors = ["bg-red-600", "bg-yellow-500", "bg-blue-500"];

  return (
    <div className="flex-1 max-w-xs ">
      <span
        className={`rounded-sm ${tagColors[index]} text-xs text-white font-semibold py-1 px-2`}
      >
        {tag}
      </span>
      <div>
        <span>
          <b>sonar</b>
          {text}
        </span>
      </div>
      <div>{description}</div>
      <div className="text-red-700 font-semibold">
        <Link to={url}>{urlText}</Link>
      </div>
    </div>
  );
}
