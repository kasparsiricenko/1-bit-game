import { lightColor, pixelSize, transparentColor } from "../constants"

export default function ({ pixels, width, height }, position) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      context.fillStyle = pixels[x + y * width] ? lightColor : transparentColor
      context.fillRect(
        position.x + x * pixelSize,
        position.y + y * pixelSize,
        pixelSize,
        pixelSize,
      )
    }
  }
}
