import { getSVGFromEncodedURI } from "./getSVGFromEncodedURI"

export const getSVGBackgroundColor = (tokenMetadata) => {
  let decodedSVG = getSVGFromEncodedURI(tokenMetadata)
  // now grab fill color from svg tag
  const htmlObject = document.createElement('div')
  htmlObject.innerHTML = decodedSVG;
  const fill = htmlObject.getElementsByTagName('rect')[0].getAttribute('fill')
  return fill
}