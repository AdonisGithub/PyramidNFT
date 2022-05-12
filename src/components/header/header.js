import React from "react";
import {useLocation,Link} from "react-router-dom"
import HumburgerMenu from "./humburgermenu";
import logo from "../../assets/images/logo.png";
import twitterimg from "../../assets/images/twitter.png";
import discordimg from "../../assets/images/discord.png";

const Header = (props) => {
  const location = useLocation();
  const currentpath = location.pathname.replace("/","");
  const { onClickConnectWallet, onClickDisconnectWallet, walletAddress } = props;
  // useEffect(() => {
  //     console.log(currentpath);
  // }); 
  return (
    <nav id="nav">
      <div className="flex fixed lg:static w-full h-[128px] py-3 bg-black border-b-2">
        <div className="flex flex-row justify-around w-full items-center">
          <div className="hidden lg:flex">
              <Link to="/">
                <img src={logo} alt="logo" className="max-w-[90px] px-4"/>
              </Link>
              <Link to="/" className="headerfont flex shrink-0 items-center px-4 "
              >
                HOME
              </Link>
              <Link to="/mint" className={`${currentpath==="mint"?"hidden ":"headerfont flex shrink-0 items-center px-4"}`}
              >
                MINT
              </Link>
              <Link to="/privatechat" className={`${currentpath==="privatechat"?"hidden":"headerfont flex shrink-0 items-center px-4"}`}
              >
                PRIVATE CHAT
              </Link>
              <Link to="/staking" className={`${currentpath==="staking"?"hidden":"headerfont flex shrink-0 items-center px-4"}`}
              >
                STAKING
              </Link>
              <Link to="/ourbrand" className={`${currentpath==="ourbrand"?"hidden":"headerfont flex shrink-0 items-center px-4"}`}
              >
                OUR BRAND
              </Link>

          </div>
          <div className="hidden lg:flex">
            <div className="Minter">
              {
                walletAddress ? 
                <button className="custombutton2 mx-4 shrink-0" onClick={onClickDisconnectWallet}>
                  { walletAddress.slice(0, 11) }...
                </button>
                :
                <button className="custombutton2 mx-4 shrink-0" onClick={onClickConnectWallet}>
                  CONNECT
                </button>
              }
            </div>
            <a
              href="https://twitter.com/eyeANDpyramid"
              className="flex  items-center cursor-pointer px-4"
              target="_blank" rel="noreferrer"
            >
              <img src={twitterimg} alt="twitterimg" className="min-w-[30px] max-w-[30px] "/>
            </a>
            <a
              href="https://discord.gg/Jzz48CS6WR"
              className="flex items-center cursor-pointer px-4"
              target="_blank" rel="noreferrer"
            >
              <img src={discordimg} alt="discordimg" className="min-w-[30px] max-w-[30px]"/>
            </a>
          </div>
          <div className="flex lg:hidden w-full justify-between items-center px-1 sm:px-8">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[75px] "/>
            </Link>
            <div className="flex items-center">
              <div className="Minter">
                  {
                    walletAddress ? 
                    <button className="custombutton2 mx-4 shrink-0" onClick={onClickDisconnectWallet}>
                      { walletAddress.slice(0, 11) }...
                    </button>
                    :
                    <button className="custombutton2 mx-4 shrink-0" onClick={onClickConnectWallet}>
                      CONNECT
                    </button>
                  }
              </div>
              <div className="hidden sm:flex">
                <a
                  href="https://twitter.com/eyeANDpyramid"
                  className="flex  items-center cursor-pointer px-4"
                  target="_blank" rel="noreferrer"
                >
                  <img src={twitterimg} alt="twitterimg" className="min-w-[30px] max-w-[30px] "/>
                </a>
                <a
                  href="https://discord.gg/Jzz48CS6WR"
                  className="flex items-center cursor-pointer pl-4 pr-8"
                  target="_blank" rel="noreferrer"
                >
                  <img src={discordimg} alt="discordimg" className="min-w-[30px] max-w-[30px]"/>
                </a>
              </div>
              <HumburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Header };
