import { Link } from "gatsby";
import * as React from "react";
import { HorizontalLinks } from "../components/horizontal-links";
import { Layout } from "../components/layout";
import { PageHeader } from "../components/page-header";
import { Product } from "../components/product";
import { products } from "../dummyData/products";

const langLinks = [
  { text: "For 27 languages", url: "#" },
  { text: "Java", url: "#" },
  { text: "Javascript", url: "#" },
  { text: "C#", url: "#" },
  { text: "Python", url: "#" },
  { text: "C++", url: "#" },
  { text: "COBOL", url: "#" },
];

// markup
const IndexPage = () => {
  return (
    <main class="dark">
      <title>
        Code Quality and Code Security | Developers First | SonarClone
      </title>
      <div>
        <Layout>
          <PageHeader />
          <section className="bg-gray-900 py-6 text-gray-300">
            {langLinks.map((ll) => (
              <HorizontalLinks link={ll} />
            ))}
          </section>
          <div>
            <section className="text-center p-16">
              <h3 className="h3">Products First</h3>
              <span className="h5">
                Our prime focus and dedication is in building great products
                that
                <br />
                have an impact and are loved by their users.
              </span>
            </section>
            <section class="productContainer flex  flex-col sm:flex-row justify-center items-center">
              {products.map((p, i) => (
                <Product {...p} index={i} />
              ))}
            </section>
          </div>
        </Layout>
      </div>
    </main>
  );
};

export default IndexPage;
