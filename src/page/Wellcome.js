import React from "react";
import { useNavigate} from "react-router-dom";
import backgroundvideo from "../assets/images/backvideo.mp4";
import landingpagelogo from "../assets/images/LANDING PAGE LOGO.png";
import wellcomegif from "../assets/images/WELCOME.gif";
const Wellcome = () => {
  const navigate = useNavigate();
  const onMint = () => {
    navigate("/mint");
  };
  const onOurBrand = () => {
    navigate("/ourbrand");
  }
  const onPrivateChat = () => {
    navigate("/privatechat");
  }
  const onStaking = () => {
    navigate("/staking");
  }
  return (
    <div>
      <div className="flex w-full relative bg-black">
        <div className="min-h-screen w-full z-20 flex justify-center items-center">
          <div className="flex fixed top-0 w-full h-[150px] items-center justify-between ">
            <a href="https://discord.gg/Jzz48CS6WR" target="_blank" rel="noreferrer">
              <img src={wellcomegif} alt="wellcome gif" className="hidden sm:flex w-44 md:w-60 lg:w-96"/>
            </a>
            <a href="https://twitter.com/eyeANDpyramid" target="_blank" rel="noreferrer">
              <img src={landingpagelogo} alt="landingpage logo" className="w-44 md:w-60 lg:w-96 flex lg:shrink-0"/>
            </a>
          </div>
          <div className="flex w-full justify-center items-center">
            <div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] lg:w-[300px] lg:h-[59px] lg:text-[29px]" onClick={onMint}>
                  MINT
                </button>
                <div className=" font-bold text-[14px] lg:text-[21px] lg:my-3 xl:my-7 2xl:my-[50px]">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] lg:w-[300px] lg:h-[59px] lg:text-[29px]" onClick={onPrivateChat}>
                  PRIVATE CHAT
                </button>
                <div className=" font-bold text-[14px] lg:text-[21px] lg:my-3 xl:my-7 2xl:my-[50px]">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] lg:w-[300px] lg:h-[59px] lg:text-[29px]" onClick={onStaking}>
                  STAKING
                </button>
                <div className=" font-bold text-[14px]  lg:text-[21px] lg:my-3 xl:my-7 2xl:my-[50px]">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] lg:w-[300px] lg:h-[59px] lg:text-[29px]" onClick={onOurBrand}>
                  OUR BRAND
                </button>
                <div className=" font-bold text-[14px]  lg:text-[21px] lg:my-3 xl:my-7 2xl:my-[50px]">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden flex justify-center items-center">
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
      </div>
    </div>
  );
};
export { Wellcome };
