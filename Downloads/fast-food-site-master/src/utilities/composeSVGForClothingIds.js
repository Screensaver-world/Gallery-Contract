import { clothes } from '../clothes'

export const composeSVGForClothingIds = (ids) => {
  let finalSnippets = ''
  ids.forEach(id => {
    finalSnippets = finalSnippets + clothes[id].svg
  })
  return finalSnippets
}