import { Link } from "gatsby";
import * as React from "react";

export function HorizontalLinks({ link }) {
  return (
    <Link className="p-3 m-3 hover:bg-black hover:text-gray-100" to={link.url}>
      {link.text} {">"}
    </Link>
  );
}
