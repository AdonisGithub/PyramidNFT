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
            <img src={landingpagelogo} alt="landingpage logo" className="w-96 flex shrink-0"/>
            <img src={wellcomegif} alt="wellcome gif" className="hidden lg:flex w-96"/>
          </div>
          <div className="grid w-full h-[calc(100vh-150px)] place-content-evenly">
              <div className="lg:flex w-full sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1" onClick={onMint}>
                  MINT
                </button>
                <div className=" font-bold sm:text-[21px] sm:my-3">
                  HERE LEAVE SPACE FOR A SMALL DESCRIPTION THE CLIENT WILL MODIFY (I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-full sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1" onClick={onPrivateChat}>
                  PRIVATE CHAT
                </button>
                <div className=" font-bold  sm:text-[21px] sm:my-3">
                  HERE LEAVE SPACE FOR A SMALL DESCRIPTION THE CLIENT WILL MODIFY (I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-full sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1" onClick={onStaking}>
                  STAKING
                </button>
                <div className=" font-bold  sm:text-[21px] sm:my-3">
                  HERE LEAVE SPACE FOR A SMALL DESCRIPTION THE CLIENT WILL MODIFY (I WILL NEED FROM WHERE I CAN EDIT IT)
                </div>
              </div>
              <div className="lg:flex w-full sm:w-3/4 lg:w-4/5 justify-center text-center items-center text-white gap-10 mx-auto ">
                <button className="custombutton1" onClick={onOurBrand}>
                  OUR BRAND
                </button>
                <div className=" font-bold  sm:text-[21px] sm:my-3">
                  HERE LEAVE SPACE FOR A SMALL DESCRIPTION THE CLIENT WILL MODIFY (I WILL NEED FROM WHERE I CAN EDIT IT)
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
