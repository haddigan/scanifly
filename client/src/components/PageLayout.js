import { Children } from "react";

import "./PageLayout.css";

export const PageLayout = ({ children }) => {
  const [header, left, right] = Children.toArray(children);
  return (
    <>
    {header}
    <main className="layout-container">
      <section className="layout-left-sidebar">{left}</section>
      <section className="layout-right-content">{right}</section>
    </main>
    </>
  );
};
