import { ethers } from 'ethers'
import web3 from 'web3'
import store from '../redux/store'
import { loadClothing } from '../redux/actions'
import { ffnContractFactory } from '../utilities/ffnContractFactory'
import { getSVGFromEncodedURI } from '../utilities/getSVGFromEncodedURI'
import { loadSVGs } from '../redux/actions'

// fetch each nouns SVG directly from chain
export const fetchSVGsFromNode = async (tokenIds) => {
  let contract = await ffnContractFactory()
  let finalList = {}
  for (const id of tokenIds) {
    let metadata = await contract.tokenURI(id)
    let decodedSVG = getSVGFromEncodedURI(metadata)
    finalList[id] = decodedSVG
  }
  store.dispatch(loadSVGs({ ...finalList }))
}