export default function ({ id, response }) {
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

  const pixels = []
  const padding = (4 - ((width * 3) % 4)) % 4

  // For BMPs, the pixel data starts at the bottom left of the image
  for (var y = height - 1; y >= 0; y--) {
    var row = []
    for (var x = 0; x < width; x++) {
      const b = dataView.getUint8(offset)
      const g = dataView.getUint8(offset + 1)
      const r = dataView.getUint8(offset + 2)

      row.push(!!(r || b || g))

      offset += 3
    }

    // Skip padding bytes at the end of each row
    offset += padding

    pixels.push(row)
  }

  pixels.reverse()

  return { width, height, size, pixels: pixels.flat(), animationId: id, id }
}
