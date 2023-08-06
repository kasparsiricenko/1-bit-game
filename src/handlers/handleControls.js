const validateControl = (c) => (c < 0 ? 0 : c)

export default function () {
  if (controls.right) {
    window.debug && console.log("Right key is being pressed")
    window.player.controls.x = validateControl(window.player.controls.x + 2)
  }
  if (controls.left) {
    window.debug && console.log("Left key is being pressed")
    window.player.controls.x = validateControl(window.player.controls.x - 2)
  }
  if (controls.down) {
    window.debug && console.log("Down key is being pressed")
    window.player.controls.y = validateControl(window.player.controls.y + 2)
  }
  if (controls.up) {
    window.debug && console.log("Up key is being pressed")
    window.player.controls.y = validateControl(window.player.controls.y - 2)
  }
  if (controls.f) {
    window.debug && console.log("F key is being pressed")
    if (!invertPressed) {
      window.invertPressed = true
      window.invert = !window.invert
    }
  }
}
