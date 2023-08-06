import {
  darkColor,
  lightColor,
  pixelSize,
  transparentColor,
} from "../constants"

window.animations = []

const initilizeFrameChange = (frameId, framesCount, frameDelay) => {
  if (!window.animations[frameId]) {
    window.animations[frameId] = {
      currentFrame: 0,
    }
    window.animations[frameId].timer = setInterval(() => {
      window.animations[frameId].currentFrame =
        (window.animations[frameId].currentFrame + 1) % framesCount
    }, frameDelay)
  }

  return window.animations[frameId].timer
}

export default function (
  { animations, width, height, id: animationId },
  position,
  { drawId = "", frameDelay = 100 } = {},
) {
  const currentFrame =
    window.animations[animationId + drawId]?.currentFrame || 0

  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      context.fillStyle = animations[currentFrame][px + py * width]
        ? lightColor
        : transparentColor
      context.fillRect(
        position.x + px * pixelSize,
        position.y + py * pixelSize,
        pixelSize,
        pixelSize,
      )
    }
  }

  initilizeFrameChange(animationId + drawId, animations.length, frameDelay)
}
