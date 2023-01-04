import React from "react";
import ReactDom from "react-dom/client";

const heading1 = React.createElement("h1", { id: "h1" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "h2" }, "Heading 2");
const heading3 = React.createElement("h3", { id: "h3" }, "Heading 3");

const parentDiv = React.createElement("div", { class: "title" }, [
  heading1,
  heading2,
  heading3,
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parentDiv);
