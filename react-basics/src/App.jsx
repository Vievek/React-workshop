import React from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Breadcrumb from "./components/Breadcrumb";
import ProductCard from "./components/ProductCard";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <MenuBar />
      <Breadcrumb />
      <ProductCard />
    </div>
  );
}

export default App;
