import React from "react";
import {Header} from "../components/header"
import historybackgroundimg from "../assets/images/historybackimg.jpeg";

const HistoryandRoadmap = () => {
  return (
    <div className="flex w-full min-h-screen relative overflow-hidden bg-black">
      <div className="flex z-30">
        <Header/>
      </div>
      < div className="min-h-screen min-w-full z-20 flex justify-center items-center">
        <div className="flex w-4/5 mt-[128px] lg:mt-[0px]">
          <div className="flex w-full pl-4">
            <div className="w-full">
              <div className="flex w-full justify-center text-center text-white text-sm md:text-2xl font-bold underline mb-9">
                HISTORY AND ROADMAP
              </div>
              <div className="flex w-full justify-center text-center text-white text-sm md:text-2xl font-bold mb-4">
                COMING OUT SOON.
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden justify-center items-center">
        <img src={historybackgroundimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div>
    </div>
  );
};
export { HistoryandRoadmap };
