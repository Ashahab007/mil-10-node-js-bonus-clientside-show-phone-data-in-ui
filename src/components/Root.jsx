import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
