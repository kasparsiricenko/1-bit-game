import handleControls from "../handlers/handleControls"
import handlePlayer from "../handlers/handlePlayer"
import drawAnimation from "../utils/drawAnimation"
import drawImage from "../utils/drawImage"

const initilize = () => {
  console.log("Level 1 started")
  window.player = { controls: { x: 0, y: 0 } }
}

const loop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)

  drawAnimation(actors.gnome.peaceToRight, player.controls)
  drawAnimation(props.cloth, { x: 50, y: 20 }, { frameDelay: 1320 })
  drawAnimation(props.torchRight, { x: 100, y: 10 }, { frameDelay: 840 })
  drawAnimation(props.bird, { x: 100, y: 80 }, { frameDelay: 240 })
  drawAnimation(props.helmet, { x: 50, y: 50 }, { frameDelay: 500 })
  drawAnimation(
    props.helmet,
    { x: 40, y: 50 },
    { frameDelay: 500, drawId: "1" },
  )
  drawImage(props.door, { x: 60, y: 60 })
  drawAnimation(props.chandelierOn, { x: 30, y: 30 }, { frameDelay: 500 })
  drawAnimation(props.chandelierWindy, { x: 29, y: 40 }, { frameDelay: 500 })

  handleControls()
  handlePlayer()
  setTimeout(loop, 33)
}

export default { initilize, loop }
