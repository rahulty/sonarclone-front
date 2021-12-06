import * as React from "react";

export function PageHeader() {
  return (
    <section className="dark:bg-gray-900 text-center p-16">
      <h2 className="dark:text-white text-2xl font-semibold">
        SonarClone builds world-class products for
      </h2>
      <h1 className="text-6xl font-bold text-red-600 leading-50">
        Code Quality & Code Security
      </h1>
    </section>
  );
}
