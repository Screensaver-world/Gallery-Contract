export const getSVGFromEncodedURI = (tokenMetadata) => {
  let base64Prelude = 'data:application/json;base64,'
  let decodedMetadata = atob(tokenMetadata.replace(base64Prelude, ''))
  let jsonifiedMetadata = JSON.parse(decodedMetadata)
  let image = jsonifiedMetadata.image
  let base64SVGPreview = 'data:image/svg+xml;base64,'
  let decodedSVG = atob(jsonifiedMetadata.image.replace(base64SVGPreview, ''))
  return decodedSVG
}