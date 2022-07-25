import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    <>
      <section>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </section>
    </>
  );
}
