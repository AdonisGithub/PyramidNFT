import React from "react";
import {Header} from "../components/header";
// import stakingbakgroundimg from "../assets/images/stakingbackimg.jpeg";

const Staking = () => {
  return (
    <div className="flex w-full min-h-screen relative overflow-hidden background">
      <div className="flex z-30">
        <Header/>
      </div>
      < div className="min-h-screen min-w-full z-20 flex justify-center items-center">
        <div className="flex w-4/5 lg:w-3/4 mt-[128px] bg-[#00000090] rounded-2xl">
          <div className="flex w-full px-4 my-8 ">
            <div className="w-full">
              <div className="flex w-full justify-center text-center font-serif text-white text-[20px] sm:text-[30px] font-bold underline mb-9">
                TOKEN AND STAKING
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                THE OWNERS OF THE NFT WILL BE ABLE TO REDEEM 5555 EYE COINS.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                MOREOVER THROUGH STAKING THEIR NFT EARNS 8 EYE COINS A DAY.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                THE OWNERS OF OUR COIN WILL HAVE DECISION-MAKING POWER REGARDING THE FUTURE OF THE PROJECT.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                WHENEVER THE TEAM WANTS TO BRING OUT INITIATIVES THAT MAY BE NEW STARTUPS, NEW, NEW BARS.... SURVEYS WILL BE CARRIED OUT, ONLY THOSE WHO HAVE POSSESSION OF OUR NFT WILL PARTICIPATE.
              </div>
              <div className="flex w-full text-left text-white  text-[14px] sm:text-[18px] font-bold mb-5">
                5 EYE COINS WILL BE PERMANENTLY BURNED TO GIVE THEIR VOTE.
              </div>
              <button className="custombutton3 shrink-0 mb-5">
                STAKE YOUR NFT
              </button>
              <div className="flex w-full text-left text-red-500 text-[14px] sm:text-[18px] ">
                THIS SECTION WILL BE UPDATED IN THE FUTURE WITH MORE INFORMATION ABOUT THE TOKEN AND THE AVAILABILITY OF THE STAKING PLATFORM.
              </div>            
            </div>  
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full absolute text-center bottom-4 text-red-600 font-bold">
        <div className="flex w-full justify-center">optimized for computers</div>
      </div>
      {/* <div className="flex absolute z-10 overflow-hidden justify-center items-center">
        <img src={stakingbakgroundimg} alt="backgroundimg" className="h-screen bg-cover"/>
      </div> */}
    </div>
  );
};
export { Staking };
