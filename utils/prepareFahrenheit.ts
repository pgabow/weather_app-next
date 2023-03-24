const prepareFahrenheit = (value: number | undefined) => {
  return value ? (((value - 32) / 1.8) - 133).toFixed(2)  : 0
	// return value
}
export default prepareFahrenheit
