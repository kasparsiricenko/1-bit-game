import handleControls from "../handlers/handleControls"
import drawAnimation from "../utils/drawAnimation"
import drawImage from "../utils/drawImage"

const initilize = () => {
  console.log("Level 2 started")
  window.player = { controls: { x: 0, y: 0 } }
}

const loop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawAnimation(actors.gnome.peaceToRight, player.controls)  
  drawImage(props.location11, { x: 16, y: 16})
  drawAnimation(props.torchRight, { x: 81, y: 29}, {frameDelay: 500})
handleControls()
  setTimeout(loop, 33)
}

export default { initilize, loop }
