const prepareMph = (value: number | undefined) => {
  return value ? (value * 0.44704).toFixed(1) : 0
}
export default prepareMph
