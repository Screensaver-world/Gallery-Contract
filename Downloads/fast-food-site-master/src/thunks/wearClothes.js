import { ffnContractFactory } from '../utilities/ffnContractFactory'
import { ethers } from 'ethers'
import web3 from 'web3'

export const wearClothes = async (tokenId, clothesArray) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  var signer = provider.getSigner();
  let contract = await ffnContractFactory(signer)
  let wearClothes = await contract.wearClothes(tokenId, clothesArray);
}