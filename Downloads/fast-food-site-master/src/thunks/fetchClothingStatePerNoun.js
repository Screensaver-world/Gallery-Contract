import { ethers } from 'ethers'
import web3 from 'web3'
import store from '../redux/store'
import { loadClothing } from '../redux/actions'
import { ffnContractFactory } from '../utilities/ffnContractFactory'

export const fetchClothingStatePerNoun = async (tokenIds) => {
  let contract = await ffnContractFactory()
  // for each noun owned, cycle through them and fetch the clothing states
  for (const id of tokenIds) {
    let clothes = await contract.getClothesForTokenId(id);
    let finalList = []
    const inventoryClothes = clothes.forEach((item, index) => {
      let num = web3.utils.hexToBytes(clothes[index]._hex)[0]
      finalList.push(num)
    })
    // submit the clothing states for this noun to redux
    store.dispatch(loadClothing(id, finalList))
  }
}