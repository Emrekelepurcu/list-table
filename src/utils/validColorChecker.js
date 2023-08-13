const validColorChecker = ({ color }) => {
  if (!color) return false
  const c = new Option().style
  c.color = color
  return c.color === color
}

export { validColorChecker }
