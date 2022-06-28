import React, {useState, useEffect} from "react";
import {Header} from "../components/header";
import {
  connectWallet
} from '../utils/interact'

const PrivateChat = () => {

  const [walletAddress, setWalletAddress] = useState('')
  // const [status, setStatus] = useState('');


  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet()
    setWalletAddress(walletResponse.address)
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
  }
  return (
    <div className="flex w-full min-h-screen relative overflow-hidden background">
      <div className="flex z-30">
        <Header
          onClickDisconnectWallet={onClickDisconnectWallet}
          onClickConnectWallet={onClickConnectWallet}
          walletAddress={walletAddress}
        />
      </div>
      < div className="min-h-screen min-w-full z-20 flex justify-center items-center">
        <div className="flex w-4/5 mt-[128px] ">
          <div className="flex w-full pl-4">
            <div className="w-full">
              <div className="flex w-full justify-center text-center font-serif text-white text-[24px] sm:text-[30px] font-bold underline my-9">
                PRIVATE CHAT
              </div>
              <div className="textshadow flex w-full  font-serif text-left text-white text-[14px] sm:text-[18px] ">
                IN THIS SECTION YOU WILL BE ABLE TO ENTER PRIVATE CHATS AND TALK ABOUT SPECIFIC TOPICS TO PARTICIPATE. 
              </div>
              <div className="textshadow flex w-full font-serif text-left text-white text-[14px] sm:text-[18px] mb-5">
                IT IS NECESSARY TO VALIDATE YOUR NFT THROUGH METAMASK.
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                  REAL ESTATE 
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  PRIVATE CHAT DEDICATED TO REAL ESTATE, HERE YOU CAN DISCUSS TOGETHER WITH OTHER OWNERS OF OUR NFT MARKET REAL ESTATE, INVESTMENTS AND NEW PROJECTS, SO TO DO YOU WILL BE ABLE TO FIND NEW MEMBERS OR INVESTORS.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                  CRYPTO AND NFT
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  PRIVATE CHAT DEDICATED TO BLOCKCHAIN, HERE YOU CAN TALK OF CRYPTO AND NFT, INVESTMENTS AND NEW COINS, A COMPARISON WITH OTHER INVESTORS IT WILL BE EASIER TO IDENTIFY THE NEW HIGH POTENTIAL ENCRYPTION.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                  START UP
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  COMPARE YOUR IDEAS WITH THOSE OF OTHERS, TALKING ABOUT YOURS PROJECT YOU WILL BE ABLE TO FIND INVESTORS WILLING TO FINANCE YOUR STAR UP.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold ">
                  AIR POLLUTION
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  IDEAS, PROJECTS, START UP THAT HAVE AS AIM THAT OF REDUCING POLLUTION CAN COMPARE HERE FIND FUNDING AND NEW POINTS TO SOLVE MORE SOON THE PROBLEM.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold ">
                  PROTECTION OF FLORA AND FAUNA
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                  THE IMPORTANT THEME IS THAT OF FLORA AND FAUNA, BURNT FORESTS, RISING SEA LEVEL, ANIMALS IN EXTINCTION ...  
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                  THERE ARE ONLY SOME PROBLEMS THAT MAN MUST SOLVE ASAP. 
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  COMPARE WITH OTHERS OF THESE THEMES AND WE PROPOSE IDEAS TO FIGHT JUST THESE PHENOMENA.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                  RENEWABLE ENERGIES
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                  RENEWABLE ENERGIES ARE ONE OF THE MAIN SECTORS GROWTH OF THE NEXT DECADES, HYDROELECTRIC ENERGY, WIND, PHOTOVOLTAIC, THERMOELECTRIC, NUCLEAR ...
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  ARE EXAMPLES OF RENEWABLE ENERGY SOURCES, EXHIBIT YOUR IDEAS AND YOUR PROJECTS TO SPEED UP THE PASSAGE FROM NON-RENEWABLE ENERGIES TO RENEWABLE ENERGIES.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold ">
                  ARTIFICIAL INTELLIGENCE
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                  ANOTHER SECTOR IN STRONG GROWTH IN THE NEXT DECADES AND ARTIFICIAL INTELLIGENCE, EXPRESS YOUR IDEAS FOR PROJECTS.
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  FUTURE NEW START-UPS ARE BORN IN THIS AREA AND GIVE A STRONG CONTRIBUTION TO THE DEVELOPMENT OF THIS SECTOR.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold ">
                  LACK OF FOOD, WATER AND CULTURE IN THIRD WORLD COUNTRIES.
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  CHARITY COMPANIES CAN BE BORN WITH THE OBJECTIVE OF BRING FOOD, WATER, BUILD SCHOOLS, HOSPITALS AND CENTERS OF WELCOME TO THIRD WORLD COUNTRIES
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>
              <div className="bg-[#00000090] rounded-2xl px-4 py-4 mb-5">  
                <div className="flex w-full text-left text-white text-[18px] sm:text-[24px] font-bold">
                  TEAM
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px] ">
                  THIS SECTION IS DEDICATED TO TEAM MEMBERS, MEMBER ONLY. 
                </div>
                <div className="flex w-full text-left text-white text-[14px] sm:text-[18px]">
                  YOU WILL HAVE ACCESS TO WRITE, BUT EVERYONE CAN VIEW THE CHAT.
                </div>
                <button className="custombutton3 shrink-0 my-2">
                  JOIN WITH WALLET
                </button>
              </div>  
              <div className="textshadow flex w-full text-left text-red-500 font-bold text-[14px] sm:text-[18px]" >
                IN THE FUTURE NEW PRIVATE CHATS ARE BORN: GENOMICS, BLOCKCHAIN APPLIED TO THE FOOD SECTOR ... 
              </div>
              <div className="textshadow flex w-full text-left text-red-500 font-bold text-[14px] sm:text-[18px]  mb-16">
                JOIN OUR AIRDROP OF OUR TOKEN TO HAVE DECISION POWER ON THE FUTURE OF THE PROJECT.
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full absolute z-20 text-center bottom-4 text-red-600 font-bold">
        <div className="flex w-full justify-center">optimized for computers</div>
      </div>
      {/* <div className="flex md:hidden absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden">
        <img src={privatechatphonebgimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div>
      <div className="hidden md:flex absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden">
        <img src={privatechatbackgroundimg} alt="backgroundimg" className="flex h-screen w-full"/>
      </div> */}
    </div>
  );
};
export { PrivateChat };
