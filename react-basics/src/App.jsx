import React from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Breadcrumb from "./components/Breadcrumb";
import ProductCard from "./components/ProductCard";
import "./index.css";
import WelcomePopup from "./components/WelcomePopup";
import UserRequestBox from "./components/UserRequestBox";


function App() {
  return (
    <div>
      <WelcomePopup/>
      <Header />
      <MenuBar />
      <Breadcrumb />
      <ProductCard />
      
    </div>
  );
}

export default App;
