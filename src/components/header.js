import { Link } from "gatsby";
import React from "react";
export function Header() {
  return (
    <header className="dark:text-white body-font dark:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-700">
      <div className="bg-red-600 h-1"></div>
      <div
        className="
        container
        mx-auto
        flex 
        p-5
        flex-col
        md:flex-row
        items-center
      "
      >
        <Link className="">
          {/* <img src="../assets/img/logo.png" alt="" className="w-8" /> */}
          <span className="ml-3 text-xl">
            <b>sonar</b>
            clone
          </span>
        </Link>

        <nav
          className="
          md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400
          flex-1
          flex flex-wrap
          text-base
          justify-between
          items-center
        "
        >
          <div>
            <Link className="mr-5 hover:text-gray-900 hover:border-red-600">
              Why Us
            </Link>
            <Link className="mr-5 hover:text-gray-900">Products</Link>
            <Link className="mr-5 hover:text-gray-900">Customer</Link>
            <Link className="mr-5 hover:text-gray-900">Company</Link>
          </div>
          <div>
            <button className="btnRed text-sm">Choose your plan</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
