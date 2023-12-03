import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "sunny",
    className: "saini",
    style: {
      color: "red",
    },
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "sunny2",
    className: "saini2",
    style: {
      color: "green",
    },
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
