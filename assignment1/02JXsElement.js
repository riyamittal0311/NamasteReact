import React from "react";
import ReactDom from "react-dom/client";

const heading1 = <h1 id="h1">Heading 1</h1>;
const heading2 = <h2 id="h2">Heading 2</h2>;
const heading3 = <h3 id="h3">Heading 3</h3>;

const parentDiv = (
  <div className="title">
    {heading1}
    {heading2}
    {heading3}
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parentDiv);
