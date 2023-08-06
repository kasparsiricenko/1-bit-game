const initilize = () => {
  console.log("Level 2 started")
  window.actors.gnome.controls = { x: 0, y: 0 }
}

const loop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

export default { initilize, loop }
