
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
  console.log('trigger container build');
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp ></MarketingApp>
      </div>
    </BrowserRouter>
  )
};