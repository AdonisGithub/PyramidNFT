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
      <div className="flex w-full relative ">
        <div className="min-h-screen w-full z-20">
          <div className="flex static w-full h-[150px] items-center justify-between ">
            <img src={landingpagelogo} alt="landingpage logo" className="w-44 md:w-60 lg:w-96 flex lg:shrink-0"/>
            <img src={wellcomegif} alt="wellcome gif" className="hidden lg:flex w-96"/>
          </div>
          <div className="grid w-full h-[calc(100vh-150px)] ">
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] md:w-[300px] md:h-[59px] md:text-[29px]" onClick={onMint}>
                  MINT
                </button>
                <div className=" font-bold text-[14px] md:text-[21px] my-3">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] md:w-[300px] md:h-[59px] md:text-[29px]" onClick={onPrivateChat}>
                  PRIVATE CHAT
                </button>
                <div className=" font-bold text-[14px] md:text-[21px] my-3">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] md:w-[300px] md:h-[59px] md:text-[29px]" onClick={onStaking}>
                  STAKING
                </button>
                <div className=" font-bold text-[14px]  md:text-[21px] my-3">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-[75%] sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1 w-[160px] h-[40px] text-[14px] md:w-[300px] md:h-[59px] md:text-[29px]" onClick={onOurBrand}>
                  OUR BRAND
                </button>
                <div className=" font-bold text-[14px]  md:text-[21px] my-3">
                  DESCRIPTION(I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
          </div>
        </div>
        <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden flex justify-center">
          <video
            autoPlay
            loop
            muted
            className=" absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden"
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
