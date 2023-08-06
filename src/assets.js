window.props = {}

/**
 * Here is the list of actors
 */
window.actors = {
  gnome: {},
  player: {},
}

/**
 * Here is the list of actors assets
 */
export const actorsAssets = [
  {
    url: "actors/gnome/peaceToRight.bmp",
    id: "actors.gnome.peaceToRight",
    container: window.actors.gnome,
    key: "peaceToRight",
    animationWidth: 11,
  },
  {
    url: "actors/gnome/peaceToLeft.bmp",
    id: "actors.gnome.peaceToLeft",
    container: window.actors.gnome,
    key: "peaceToLeft",
    animationWidth: 11,
  },
]

/**
 * Here is the list of props assets
 */
export const propsAssets = [
  {
    name: "gnome",
  },
  {
    name: "cloth",
    animationWidth: 10,
  },
  {
    name: "torchRight",
    animationWidth: 3,
  },
  {
    name: "bird",
    animationWidth: 7,
  },
  {
    name: "helmet",
    animationWidth: 5,
  },
  {
    name: "door",
  },
  {
    name: "chandelierOn",
    animationWidth: 8,
  },
  {
    name: "chandelierWindy",
    animationWidth: 11,
  },
].map(({ name, animationWidth }) => ({
  url: `props/${name}.bmp`,
  id: `props.${name}`,
  container: window.props,
  key: name,
  animationWidth,
}))

export default [...actorsAssets, ...propsAssets]
