import React from "react";
import {Header} from "../components/header"

const OurBrand = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <Header/>
      < div className="flex w-full h-[calc(100vh-128px)] justify-center items-center ">
        <div className="flex w-4/5 mt-[128px] lg:mt-[0px]">
          <div className="flex w-full pl-4">
            <div className="w-full">
              <div className="flex w-full justify-center text-center text-white text-2xl font-bold underline mb-9">
                OUR BRAND
              </div>
              <div className="flex w-full justify-center text-center text-white text-sm font-bold mb-5">
                NEVER MISS AN UPDATE, OUR OUR MECHANDISE IS
              </div>
              <div className="flex w-full justify-center text-center text-white text-2xl font-bold mb-4">
                COMING OUT SOON.
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
export { OurBrand };
