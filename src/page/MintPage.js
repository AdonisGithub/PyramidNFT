import React, { useState, useEffect } from 'react'
import { BigNumber } from 'ethers'
import { ToastContainer, toast } from 'react-toastify'
import {Header} from "../components/header"
import { Mint } from '../components/mint'
import NFT from "../assets/images/NFT.MP4";
import 'react-toastify/dist/ReactToastify.css'
import {
  connectWallet,
  getCurrentWalletConnected,
  getContract,
} from '../utils/interact'


const MintPage = () => {

  const [walletAddress, setWalletAddress] = useState('')
  const [status, setStatus] = useState('');
  const [loading, setMintLoading] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [mintPrice, setmintPrice] =useState("");
  const [maxMintSupply, setMaxMintSupply] = useState(0);

  useEffect(() => {
    async function fetchWalletInfo() {
      const { address, status } = await getCurrentWalletConnected()
      setWalletAddress(address)
      setStatus(status)
    }
    fetchWalletInfo()
  }, [])

  useEffect(() => {
    async function fetchContractInfo() {
      let contract = getContract(walletAddress)
      setMaxMintSupply(Number(await contract.MAX_SUPPLY()))
      setTotalSupply(BigNumber.from(await contract.totalSupply()).toNumber()) // original value * 1e5
      setmintPrice(BigNumber.from(await contract.mint_price()).toString(),)
    }
    fetchContractInfo()
  }, [loading, walletAddress]);

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
    // eslint-disable-next-line
  }, [status])

  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet()
    setStatus(walletResponse.status)
    setWalletAddress(walletResponse.address)
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
  }

  const notify = () =>
    toast.info(status, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

  return (
    <div className="w-full lg:h-screen  bg-black">
      <Header
        onClickDisconnectWallet={onClickDisconnectWallet}
        onClickConnectWallet={onClickConnectWallet}
        walletAddress={walletAddress}
      />
      < div className="flex w-full lg:h-screen justify-center items-center ">
        <div className="flex flex-col lg:flex-row w-4/5">
          <div className="flex w-full lg:w-1/3 p-8 mt-[128px] lg:mt-[0px]">
              <video
                autoPlay
                loop
                muted
                className="w-full h-auto"
              >
                <source src={NFT} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
          <div className="flex w-full lg:w-2/3 px-8 py-4">
            <div className="w-full">
              <div className="flex w-full justify-center text-center text-white text-sm md:text-xl xl:text-2xl font-bold underline mb-3">
                THE EYE OF THE PYRAMID TICKET
              </div>
              <div className="text-white text-center text-xs xl:text-sm font-bold mb-4">
                BUILT ON THE ETHEREUM BLOCKCHAIN WHTH A LIMITED SUPPLY OF 1499 NFTS, THE EYE OF THE PYRAMID WILL GIVE EXCLUSIVE ACCESS TO OUR SERVICES. AS A DIGITAL COMPANY, THE GOAL OF THE EYE OF THE PYRAMID IS TO CREATE MORE DIGITAL EVENTS, WHICH INCLUDE PRIVATE PARTIES WHERE YOU CAN TALK TO OTHER PEOPLE ABOUT NFTS AND CRYPTOS.
              </div>
              <div className="text-white text-center text-xs xl:text-sm font-bold mb-4">
                A CASINOS'WHERE YOU CAN PLAY WITH OUR TOKEN (EARNED BY STAKING THE NFTS) AND THE MOST IMPORTANT THING IS THE POSSIBILITY TO VOTE AND CHOOSE THE DIRECTION THAT THE PROJECT WILL TAKE.
              </div>
              <div className="text-white text-center text-xs xl:text-sm font-bold mb-4">
                ADDITIONALLY YOU WILL HAVE EARLY ACCESS TO OUR FUTURE COLLECTIONS AND TO OUR MERCHANDISING.
              </div>
              <div className="text-white text-center text-xs xl:text-sm font-bold mb-4">
                WE'RE HERE FOR THE LONG TERM, AND YOU?
              </div>
              <div className="flex w-full justify-center mb-3">
                <Mint
                  loading={loading}
                  setMintLoading={setMintLoading}
                  walletAddress={walletAddress}
                  setStatus={setStatus}
                  mintprice ={mintPrice}
                  totalSupply={totalSupply}
                  maxMintSupply={maxMintSupply}
                />
              </div>
              <ToastContainer />
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
export { MintPage };
