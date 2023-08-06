import assets from "./assets"
import fetchAsset from "./utils/fetchAsset"
import initilizeControls from "./initilizeControls"

const init = async () => {
  await Promise.all(assets.map((asset) => fetchAsset(asset)))

  window.canvas = document.getElementById("root")
  window.context = canvas.getContext("2d")
  context.imageSmoothingEnabled = false

  window.debug = false
  window.currentLevel = 2

  initilizeControls()
}

export default init
