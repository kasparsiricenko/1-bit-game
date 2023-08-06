import levels from "./levels/levels"
import drawAnimation from "./utils/drawAnimation"

const main = async () => {
  await levels[currentLevel].initilize()
  levels[currentLevel].loop()
}

export default main
