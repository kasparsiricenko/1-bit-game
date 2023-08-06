import axios from "axios"
import decodeAnimation from "./decodeAnimation"
import decodeImage from "./decodeImage"

export default async function ({ url, id, container, key, animationWidth }) {
  return axios.get(url, { responseType: "arraybuffer" }).then((response) => {
    const decode = animationWidth ? decodeAnimation : decodeImage
    container[key] = decode({
      id,
      response,
      animationWidth,
    })
  })
}
