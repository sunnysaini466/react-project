import React from "react";
import ReactDOM from "react-dom/client";

const Title = (
  <h2 id="title" key="h1">
    This is just a React element
  </h2>
);

const HeaderComponent = () => {
  return (
    <div>
      {Title}
      <h1>This is our functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
