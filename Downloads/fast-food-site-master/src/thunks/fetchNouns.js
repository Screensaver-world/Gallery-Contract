import axios from 'axios'
import store from '../redux/store'
import { loadNouns, updateSettings } from '../redux/actions'
import { fetchClothingStatePerNoun } from './fetchClothingStatePerNoun';
import { getSVGBackgroundColor } from '../utilities/getSVGBackgroundColor';
import { fetchSVGsFromNode } from './fetchSVGsFromNode';

export const fetchNouns = (owner) => {
  const address = '0xFbA74f771FCEE22f2FFEC7A66EC14207C7075a32'
  return new Promise((resolve, reject) => {
    // NOTE: we can omit the key in development, but need one in production
    const options = {
      url: !owner ? `https://api.opensea.io/api/v1/assets?asset_contract_address=${address}&token_ids=${Math.floor(Math.random() * 1000)}` : `https://api.opensea.io/api/v1/assets?owner=${owner}&asset_contract_address=${address}`,
      method: 'get'
    }
    axios.request(options).then((res) => {
      // `res` is a plain array. Format it into an object with tokenIds as keys
      let finalObj = {}
      if (res.data.assets.length <= 0) return // no tokens, stop
      res.data.assets.forEach(token => {
        finalObj[token.token_id] = token
      })
      store.dispatch(loadNouns(finalObj))
      // whenever we load new nouns, also auto-select the first one
      store.dispatch(updateSettings({
        ...store.getState().settings,
        selectedNounId: res.data.assets[0].token_id,
        connectedAddress: owner,
        backgroundColor: getSVGBackgroundColor(res.data.assets[0].token_metadata)
      }))
      // also fetch and load clothing states for each of them
      fetchClothingStatePerNoun(Object.keys(finalObj))
      // also fetch SVGs from node so we don't have to wait for metadata on OS
      fetchSVGsFromNode(Object.keys(finalObj))
      resolve(res.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}