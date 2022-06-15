import React from "react";
import { useNavigate} from "react-router-dom";
import backgroundvideo from "../assets/images/backvideo.mp4";
import backgroundimg from "../assets/images/backimg.jpeg";
import landingpagelogo from "../assets/images/LANDING PAGE LOGO.png";
import wellcomegif from "../assets/images/WELCOME.gif";
const Wellcome = () => {
  const navigate = useNavigate();
  const onMint = () => {
    navigate("/mint");
  };
  const onOurProject = () => {
    navigate("/ourproject");
  }
  const onPrivateChat = () => {
    navigate("/privatechat");
  }
  const onStaking = () => {
    navigate("/staking");
  }
  const onCommunityProject = () => {
    navigate("/communityproject");
  }
  const onHistoryandRoadmap = () => {
    navigate("/historyandroadmap");
  }
  return (
    <div>
      <div className="flex w-full relative bg-black">
        <div className="min-h-screen w-full z-20 flex justify-center items-center">
          <div className="w-full">
            <div className="flex fixed top-0 w-full h-[120px] items-center justify-between ">
              <a href="https://discord.gg/Jzz48CS6WR" target="_blank" rel="noreferrer">
                <img src={wellcomegif} alt="wellcome gif" className="hidden sm:flex w-44 md:w-60 lg:w-72"/>
              </a>
              <a href="https://twitter.com/eyeANDpyramid" target="_blank" rel="noreferrer">
                <img src={landingpagelogo} alt="landingpage logo" className="w-44 md:w-60 lg:w-72 flex lg:shrink-0"/>
              </a>
            </div>
            <div className="flex w-full justify-center items-center ">
              <div>
                <div className="sm:flex  justify-center text-center items-center text-white gap-10  my-5 sm:my-6  ">
                  <button className="custombutton1 w-[250px] sm:w-[400px]  h-[40px] sm:h-[50px] lg:h-[59px] text-[14px] sm:text-[18px] lg:text-[22px] " onClick={onHistoryandRoadmap}>
                    HISTORY AND ROADMAP
                  </button>
                  {/* <div className=" font-bold text-[14px]  lg:text-[21px] my-5 sm:my-6   ">
                    DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                  </div> */}
                </div>
                <div className="sm:flex  justify-center text-center items-center text-white gap-10  my-5 sm:my-6  ">
                  <button className="custombutton1 w-[250px] sm:w-[400px]  h-[40px] sm:h-[50px] lg:h-[59px] text-[14px] sm:text-[18px] lg:text-[22px] " onClick={onMint}>
                    MINT
                  </button>
                </div>
                <div className="sm:flex  justify-center text-center items-center text-white gap-10  my-5 sm:my-6  ">
                  <button className="custombutton1 w-[250px] sm:w-[400px]  h-[40px] sm:h-[50px] lg:h-[59px] text-[14px] sm:text-[18px] lg:text-[22px] " onClick={onStaking}>
                    STAKING
                  </button>
                </div>
                <div className="sm:flex  justify-center text-center items-center text-white gap-10  my-5 sm:my-6  ">
                  <button className="custombutton1 w-[250px] sm:w-[400px]  h-[40px] sm:h-[50px] lg:h-[59px] text-[14px] sm:text-[18px] lg:text-[22px] " onClick={onPrivateChat}>
                    PRIVATE CHAT
                  </button>
                </div>
                <div className="sm:flex  justify-center text-center items-center text-white gap-10  my-5 sm:my-6  ">
                  <button className="custombutton1 w-[250px] sm:w-[400px]  h-[40px] sm:h-[50px] lg:h-[59px] text-[14px] sm:text-[18px] lg:text-[22px] " onClick={onOurProject}>
                    OUR PROJECT
                  </button>
                </div>
                <div className="sm:flex  justify-center text-center items-center text-white gap-10  my-5 sm:my-6  ">
                  <button className="custombutton1 w-[250px] sm:w-[400px]  h-[40px] sm:h-[50px] lg:h-[59px] text-[14px] sm:text-[18px] lg:text-[22px] " onClick={onCommunityProject}>
                    COMMUNITY PROJECT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex  absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden justify-center items-center">
          <video
            autoPlay
            loop
            muted
            className=" absolute z-10 "
          >
            <source src={backgroundvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex md:hidden  absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden justify-center items-center">
          <img src={backgroundimg} alt="backgroundimg" className="flex  h-screen w-full"/>
        </div>
        <div className="flex sm:hidden w-full absolute z-20 text-center bottom-4 text-red-600 font-bold">
          <div className="flex w-full justify-center">optimized for computers</div>
        </div>
      </div>
    </div>
  );
};
export { Wellcome };
