import React from "react";
import {Header} from "../components/header";
//  import backgroundimg from "../assets/images/background.jpeg";

const CommunityProject = () => {
  return (
    <div className="flex w-full min-h-screen relative overflow-hidden background">
      <div className="flex z-30">
        <Header/>
      </div>
      < div className="min-h-screen min-w-full z-20 flex justify-center items-center ">
          <div className="flex w-4/5 mt-[128px] bg-[#00000090] rounded-2xl">
            <div className="flex w-full pl-4">
              <div className="w-full">
                <div className="flex w-full justify-center text-center font-serif text-white text-[24px] sm:text-[30px] font-bold underline my-9">
                  COMMUNITY PROJECT
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                  THE OWNERS OF OUR NFT WITH A PROJECT WILL BE ABLE TO EXPOSE THEIR INITIATIVE TO THE FOUNDER OF THE EYE OF THE PYRAMID WHICH WILL ANALYZE THE INITIATIVE AND THROUGH A SURVEY TO THE COMMUNITY DECIDES WHETHER TO FINANCE IT.
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                  KEEP AN EYE OF PRIVATE CHATS.
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                  BUT NOT ONLY START UP WITH GREAT OBJECTIVES, ALSO SMALLER INITIATIVES WHICH CAN BE CASINOS, RESTAURANTS, BARS, DISCOS, GYMS ...
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold">
                  APPLICATIONS WILL BE AVAILABLE ON.
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold">
                  TO BE ELIGIBLE FOR CANDIDATURES, THE PROJECT MUST FOLLOW GUIDELINES DETAILED WHITE PAPER OF THE PROJECT
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold ml-4">
                  &#x2022; ALL THE DEVELOPMENT TEAM, NAMES, SURNAMES, FACES, SOCIAL PROFILES
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold ml-4">
                  &#x2022; PERSONAL MEETING BETWEEN THE PROJECT FOUNDER AND THE DEVELOPMENT TEAM
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold ml-4">
                 &#x2022; NFT COLLECTIONS WILL BE RELEASED WITH THE TASK OF FINANCING THE PROJECTS
                </div>
                <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold ml-4 mb-5">
                  &#x2022; ALL PROJECTS THAT LAUNCHED BY THE COMMUNITY WITH OUR CONSENT WILL BE PUBLISHED IN THIS SECTION
                </div>
                <div className="flex w-full text-left text-red-500  text-[14px] sm:text-[18px] font-bold mb-16">
                  THIS SECTION WILL BE UPDATED WITH FURTHER DETAILS IN THE FUTURE
                </div>
              </div>  
            </div>
          </div>
      </div>
      <div className="flex sm:hidden w-full absolute text-center bottom-4 text-red-600 font-bold">
        <div className="flex w-full justify-center">optimized for computers</div>
      </div>
      {/* <div className="hidden md:flex absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden justify-center items-center">
        <img src={backgroundimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div> */}
    </div>
  );
};
export { CommunityProject };
