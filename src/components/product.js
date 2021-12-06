import { Link } from "gatsby";
import * as React from "react";

export function Product({ tag, text, description, url, urlText }) {
  return (
    <div>
      <span>{tag}</span>
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
