import { clothes } from '../clothes'

// takes the tokenMetadata, decodes it, cross checks it with strings of clothes
// we know this noun is wearing, and removes them from the SVG to achieve the
// base Noun. we could also hit the NounDescriptor, but this is easier
export const removeClothesFromSVG = (svg, clothingIds) => {
  let newSVG = svg
  if (clothingIds.length === 0) return newSVG
  clothingIds.forEach(id => {
    newSVG = newSVG.replace(clothes[id].svg, '')
  })
  return newSVG
}