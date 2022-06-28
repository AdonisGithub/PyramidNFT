import React from "react";
import {Header} from "../components/header"
// import ourprojectbackgroundimg from "../assets/images/ourprojectbackimg.jpeg";

const OurProject = () => {
  return (
    <div className="flex w-full min-h-screen relative overflow-hidden background">
      <div className="flex z-30">
        <Header/>
      </div>
      < div className="min-h-screen min-w-full flex justify-center items-center ">
        <div className="flex w-4/5 mt-[128px]  bg-[#00000090] rounded-2xl">
          <div className="flex w-full px-4">
            <div className="w-full">
              <div className="flex w-full justify-center text-center font-serif text-white text-[24px] sm:text-[30px] font-bold underline my-9">
                OUR PROJECT
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                THE FOUNDER OF THE PROJECT WILL LAUNCH NEW INITIATIVES IN THE FUTURE IN DIFFERENT SECTORS, EVERY TIME THERE WILL BE NEW PROJECTS READY TO LAUNCH AN ALL COMMUNITY SURVEY WILL BE DONE TO EXPRESS ITS OPINION ABOUT IT.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                IF THE COMMUNITY IS IN AGREEMENT, A NEW COLLECTION WILL BE CREATED WITH THE OBJECTIVE OF FINANCING THE INITIATIVE.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                IF THE COMMUNITY IS IN AGREEMENT, A NEW COLLECTION WILL BE CREATED WITH THE OBJECTIVE OF FINANCING THE INITIATIVE.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold">
                INITIATIVES WHICH CAN BE NEW LOCALS, RESTAURANTS, BARS, CLUBS, GYMS ... 
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                BUT ALSO BIG START UP IN DIFFERENT AREAS WITH BIG OBJECTIVES.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                THE INITIATIVES WILL START IN THE PRIVATE CHATS.
              </div>
              <div className="flex w-full text-left text-red-500  text-[14px] sm:text-[18px] font-bold mb-16">
                THIS SECTION WILL BE UPDATED WITH FURTHER DETAILS IN THE FUTURE.
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full absolute text-center bottom-4 text-red-600 font-bold">
        <div className="flex w-full justify-center">optimized for computers</div>
      </div>
      {/* <div className="hidden lg:flex absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden justify-center items-center">
        <img src={ourprojectbackgroundimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div> */}
    </div>
  );
};
export { OurProject };
