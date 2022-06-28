import React from "react";
import {Header} from "../components/header"
// import historybackgroundimg from "../assets/images/historybackimg.jpeg";
// import historyphonebgimg from "../assets/images/historyphoneimg.jpeg";


const HistoryandRoadmap = () => {
  return (
    <div className="flex w-full min-h-screen relative overflow-hidden background">
      <div className="flex z-30">
        <Header/>
      </div>
      < div className="min-h-screen min-w-full z-20 flex justify-center items-center ">
        <div className="flex w-4/5 mt-[128px] bg-[#00000090] rounded-2xl">
          <div className="flex w-full px-4">
            <div className="w-full">
              <div className="flex w-full justify-center text-center font-serif text-white text-[24px] sm:text-[30px] font-bold underline my-9">
                HISTORY AND ROADMAP
              </div>
              <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                HOW AND WHY IS IT BORN?
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] mb-5">
                IT WAS BORN WITH THE OBJECTIVE OF CREATING COMMUNITY OF PEOPLE IN DIFFERENT SECTORS, WITH OUR NFT YOU WILL BE ABLE TO ENTER IN PRIVATE CHATS AND MEET OTHER PEOPLE IN YOUR SAME SECTOR WITH WHICH TO CREATE BUSINESS TIES.
              </div>
              <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                UTILITY OF THE NFT
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] mb-5">
                OUR NFT IS A REAL TICKET TO ACCESS OUR EVENTS, YOU WILL BE ABLE TO ACCESS THE PRIVATE CHATS, YOU CAN HAVE DISCOUNTS AND FACILITIES FOR OUR FUTURE LAUNCHES, YOU WILL BE ABLE TO STAKE AND EARN OUR CRYPUTI TO HAVE OUR CRYPUTI OF THE PROJECT, YOU WILL ALSO HAVE ACCESS TO EXCLUSIVE EVENTS WITH TOP CELEBRITIES IN THE CRYPTO WORLD (EVENTS ORGANIZED BY THE DEVELOPMENT TEAM)
              </div>
              <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                ROAD MAP
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                1. EXPAND THE DEVELOPMENT TEAM.
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                2. MAKE ALL PRIVATE CHATS ACCESSIBLE, WHERE IT WILL BE POSSIBLE TO TALK TO OTHER PEOPLE ABOUT PROJECTS, INVESTMENTS….
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                3. AIRDROP OUR CRYPTO TO OUR NFT OWNERS AND MAKE OUR STAKE PLATFORM AVAILABLE.
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                4. OWNERS OF OUR NFT WILL BE ABLE TO REDEEM FREE AVATARS WITH WHICH THEY WILL HAVE ACCESS TO OUR INITIATIVES ON THE METAVERSE.
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                5. METAVERSE, WE WILL START CREATING PROJECTS IN THE SANDBOX METAVERSE WHERE OUR NFT OWNERS WILL HAVE ACCESS TO MUSEUMS, CASINOS, VIRTUAL RESTAURANTS….
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] mb-5">
                6. WILL START TO MOVE OUR ACTIVITIES ALSO IN THE REAL WORLD BY CREATING RESTAURANTS, GYMS, CLUBS, CASINOS ... ACTIVITIES WHERE OUR NFT OWNERS WILL HAVE DISCOUNTS AND FACILITIES.
              </div>
              <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                TEAM
              </div>
              <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] mb-5">
                THE TEAM IS IN CONTINUOUS EXPANSION, BLOCKCHAIN DEVELOPERS, NFT ARTIST,SOCIAL MEDIA MENAGER ... WILL BE ABLE TO APPLY TO WORK ON THE DEVELOPMENT OF THE PROJECT, SOON WILL BE MADE AVAILABLE OUR EMAIL FOR CANDIDATURES, WHICH WE WILL VALUE IN THIS SECTOR. ALREADY WORKED IN THE PAST ... FOR MORE INFORMATION PLEASE KEEP AN EYE ON THE OFFICIAL SOCIAL CHANNELS TEAM MEMBERS WILL BE IN CLOSE CONTACT WITH THE PROJECT CREATOR, THEIR SOCIAL CHANNELS WILL BE PUBLISHED, AND RECEIVE REWARDS IN THE FORM OF ETH FOR THEIR SERVICES.
              </div>
              <div className="flex w-full text-left text-red-500  text-[14px] sm:text-[18px] font-bold mb-16">
                THIS SECTION WILL BE UPDATED IN THE FUTURE WITH MORE INFORMATION
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full absolute z-20 text-center bottom-4 text-red-600 font-bold">
          <div className="flex w-full justify-center">optimized for computers</div>
      </div>
      {/* <div className="flex md:hidden absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden ">
        <img src={historyphonebgimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div>
      <div className="hidden md:flex absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden ">
        <img src={historybackgroundimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div> */}
    </div>
  );
};
export { HistoryandRoadmap };
