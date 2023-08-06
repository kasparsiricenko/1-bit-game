export default function ({ id, response, animationWidth }) {
  const dataView = new DataView(new Uint8Array(response.data).buffer)

  // BITMAPFILEHEADER
  let offset = dataView.getUint32(10, true)

  // BITMAPINFOHEADER
  const size = dataView.getUint32(14, true)
  const width = dataView.getInt32(18, true)
  const height = dataView.getInt32(22, true)
  const bitsPerPixel = dataView.getUint16(28, true)

  // Check if it's a 24-bit bitmap
  if (bitsPerPixel !== 24) {
    throw new Error("Only 24-bit bitmaps are supported")
  }

  if (width % animationWidth) {
    throw Error(
      `Wrong animation bmp file width: "${width}"; animationWidth: "${animationWidth}"`,
    )
  }

  const pixels = []
  const padding = (4 - ((width * 3) % 4)) % 4

  // For BMPs, the pixel data starts at the bottom left of the image
  for (var y = height - 1; y >= 0; y--) {
    const row = []
    for (var x = 0; x < width; x++) {
      const b = dataView.getUint8(offset)
      const g = dataView.getUint8(offset + 1)
      const r = dataView.getUint8(offset + 2)
      row.push(!!(r || b || g))

      offset += 3
    }

    pixels.push(row)
    // Skip padding bytes at the end of each row
    offset += padding
  }

  pixels.reverse()

  const animationsCount = Math.floor(width / animationWidth)
  const animations = Array.from({ length: animationsCount })
  animations.fill([])

  pixels.forEach((row) => {
    for (let i = 0; i < animationsCount; i++) {
      animations[i] = [
        ...animations[i],
        ...row.slice(i * animationWidth, (i + 1) * animationWidth),
      ]
    }
  })

  return {
    width: animationWidth,
    height,
    size,
    animations,
    id,
  }
}
