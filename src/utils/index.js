export const imageProcess = (image) => {
  const img = image.replace('uploads/', '')
  return `http://social.hungvu.net/${img}`
}