const initilizeControls = () => {
  window.controls = {}

  document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase()

    switch (key) {
      case "arrowup":
      case "w": {
        window.debug && console.log("Up key pressed")
        window.controls.up = true
        return
      }

      case "arrowdown":
      case "s": {
        window.debug && console.log("Down key pressed")
        window.controls.down = true
        return
      }

      case "arrowleft":
      case "a": {
        window.debug && console.log("Left key pressed")
        window.controls.left = true
        return
      }

      case "arrowright":
      case "d": {
        window.debug && console.log("Right key pressed")
        window.controls.right = true
        return
      }

      case "e": {
        window.debug && console.log("E key pressed")
        window.controls.e = true
        return
      }

      case "r": {
        window.debug && console.log("R key pressed")
        window.controls.r = true
        return
      }

      case "f": {
        window.debug && console.log("F key pressed")
        window.controls.f = true
        return
      }

      case "q": {
        window.debug && console.log("Q key pressed")
        window.controls.q = true
        return
      }

      case " ": {
        window.debug && console.log("Space pressed")
        window.controls.space = true
        return
      }

      default:
        return
    }
  })

  document.addEventListener("keyup", function (event) {
    var key = event.key.toLowerCase()

    switch (key) {
      case "arrowup":
      case "w": {
        window.debug && console.log("Up key unpressed")
        window.controls.up = false
        return
      }

      case "arrowdown":
      case "s": {
        window.debug && console.log("Down key unpressed")
        window.controls.down = false
        return
      }

      case "arrowleft":
      case "a": {
        window.debug && console.log("Left key unpressed")
        window.controls.left = false
        return
      }

      case "arrowright":
      case "d": {
        window.debug && console.log("Right key unpressed")
        window.controls.right = false
        return
      }

      case "e": {
        window.debug && console.log("E key unpressed")
        window.controls.e = false
        return
      }

      case "r": {
        window.debug && console.log("R key unpressed")
        window.controls.r = false
        return
      }

      case "f": {
        window.debug && console.log("F key unpressed")
        window.controls.f = false
        window.invertPressed = false
        return
      }

      case "q": {
        window.debug && console.log("Q key unpressed")
        window.controls.q = false
        return
      }

      case " ": {
        window.debug && console.log("Space unpressed")
        window.controls.space = false
        return
      }

      default:
        return
    }
  })
}

export default initilizeControls
