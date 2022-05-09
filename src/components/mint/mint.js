// import { useState, useEffect } from 'react'
import { BigNumber } from 'ethers'
// import { MerkleTree } from 'merkletreejs'
// import keccak256 from 'keccak256'
import { getContract } from '../../utils/interact'

export const Mint = (props) => {
  const {
    loading,
    walletAddress,
    setStatus,
    setMintLoading,
    mintprice,
    totalSupply,
    maxMintSupply,
  } = props


  const handleMint = async () => {

    if (!walletAddress) {
      setStatus('Please connect your wallet!')
      return
    }

    const contract = getContract(walletAddress)
    setMintLoading(true);
    try {
        let tx = await contract.mint({value: BigNumber.from(mintprice)})
        let res = await tx.wait()
        console.log('mint res:', res)
        if (res.transactionHash) {
            setStatus(`You minted Successfully!`)
            setMintLoading(false)
        }
    } catch (err) {
        console.log('mint error:', err)
        let errorContainer =
            err.error && err.error.message ? err.error.message : ''
        let errorBody = errorContainer.substr(errorContainer.indexOf(':') + 1)
        let status =
            'Transaction failed because you have insufficient funds or sales not started'
        errorContainer.indexOf('execution reverted') === -1
            ? setStatus(status)
            : setStatus(errorBody)
        setMintLoading(false)
    }
    setMintLoading(false)
  }

  return (
    <div className="">
      <h2 className='text-white text-center'>
        {totalSupply} / {maxMintSupply}{' '}
      </h2>
      {loading ? (
        <button className="custombutton2" disabled={false}>
          {' '}
          MINTING{' '}
        </button>
      ) : (
        <button className="custombutton2" onClick={handleMint} disabled={false}>
          {' '}
          MINT{' '}
        </button>
      )}
    </div>
  )
}
