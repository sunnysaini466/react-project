import React from "react";
import ReactDOM from "react-dom/client";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
