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
  drawAnimation(props.gnomeJump, { x: 27, y: 24}, {frameDelay: 50})
  drawAnimation(props.torchRight, { x: 81, y: 29}, {frameDelay: 500})
  drawImage(props.locationA1, { x: 16, y: 87})
  drawAnimation(props.doorA1, { x: 18, y: 111}, {frameDelay: 1000})
  drawAnimation(props.vine, { x: 30, y: 94}, {frameDelay: 500})
  drawAnimation(props.vine1, { x: 62, y: 94}, {frameDelay: 650})
  drawAnimation(props.helmetL, { x: 59, y: 120}, {frameDelay: 700})
handleControls()
  setTimeout(loop, 33)
}

export default { initilize, loop }
