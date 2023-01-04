import React from "react";
import ReactDom from "react-dom/client";

const Heading1 = () => <h1 id="h1">Heading 1</h1>;
const Heading2 = () => <h2 id="h2">Heading 2</h2>;
const Heading3 = () => <h3 id="h3">Heading 3</h3>;

const ParentDiv = () => (
  <div className="title">
    <Heading1 />
    <Heading2 />
    <Heading3 />
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<ParentDiv />);
