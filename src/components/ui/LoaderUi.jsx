import { Loader } from "lucide-react";
import React from "react";

const LoaderUi = () => {
  return (
    <div className="fixed w-[100%] flex justify-center items-center ">
      <div className=" bg-stone-400/[60%] w-[100vw] h-[100vh]"></div>
      <span class="absolute animate-[spin_3s_linear_infinite] ">
        {" "}
        <Loader size={80} className="text-stone-700" />{" "}
      </span>
    </div>
  );
};

export default LoaderUi;
