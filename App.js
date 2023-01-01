import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading1" }, "Heading 1");
const heading2 = React.createElement("h2", null, "Heading 2");
const parent = React.createElement("div", {}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading, heading2);

root.render(parent);
