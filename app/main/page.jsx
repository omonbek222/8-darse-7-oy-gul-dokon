import React from "react";
import CategoriesMain from "./CategoriesMain/page";
import Card from "./Card";

const Main = () => {
  return (
    <div className="flex mt-[50px] gap-[50px]">
      <CategoriesMain />
      <Card/>
    </div>
  );
};

export default Main;
