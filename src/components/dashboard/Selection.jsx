import React from "react";
import Sidebar from "../Sidebar";

const Selection = () => {
  return (
    <div className="flex flex-row">
      <Sidebar page="selection"/>
      <div className=" w-[80%] pt-[5em]">
        <p>Selection</p>
      </div>
    </div>
  );
};

export default Selection;
