const unixToDate = (dt: number) => {
  const date = new Date(dt * 1000)
  return date.toLocaleDateString("en-US", { weekday: "long" })
}

const unixToHour = (dt: number) => {
  const date = new Date(dt * 1000)
  let hour = date.getHours()
  const period = hour >= 12 ? "PM" : "AM"
  hour = hour % 12 || 12 // Convert hour to 12-hour format
  return hour + period
}

export { unixToDate, unixToHour }
