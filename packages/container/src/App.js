
import React from "react";
import MarketingApp from "./components/MarketingApp";

export default () => {
  console.log('trigger container build');
  return (
    <div>
      <h1>Hi there!!!!!</h1>
      <hr />
      <MarketingApp ></MarketingApp>
    </div>
  )
};