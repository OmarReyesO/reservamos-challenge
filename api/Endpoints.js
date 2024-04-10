import ConstructorAPIAsync from "./AxiosConstructor"

async function GetPlaces(query) {
  const API = await ConstructorAPIAsync()
  try {
    const { data } = await API.get(
      `https://search.reservamos.mx/api/v2/places?q=${query}`
    )

    return data
  } catch (err) {
    return err
  }
}

async function GetWeather(query) {
  console.log("GetWeather")

  const API = await ConstructorAPIAsync()
  try {
    const { data } = await API.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${query.lat}&lon=${query.lon}&appid=a5a47c18197737e8eeca634cd6acb581&units=metric`
    )
    return data
  } catch (err) {
    return err
  }
}

export { GetPlaces, GetWeather }
