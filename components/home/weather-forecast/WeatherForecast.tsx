import React from "react"
import { View, Text, FlatList, Image } from "react-native"
import styles from "./weatherforecast.style"
import { unixToDate } from "../../../utils/functions"

interface WeatherData {
  id: number
  main: string
  description: string
  icon: string
}

interface TemperatureData {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

interface WeatherItemProps {
  dt: number
  weather: WeatherData[]
  temp: TemperatureData
}

const WeatherItem = ({ dt, temp, weather }: WeatherItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{unixToDate(dt)}</Text>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
          }}
          style={styles.itemImg}
        />
      </View>
      <Text style={styles.itemText}>
        {temp.max.toFixed(0) + "\u00B0"} / {temp.min.toFixed(0) + "\u00B0"}
      </Text>
    </View>
  )
}

const WeatherForecast = ({ data }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>7-Day Forecast</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <WeatherItem dt={item.dt} temp={item.temp} weather={item.weather} />
          )}
          contentContainerStyle={{
            marginHorizontal: 5
          }}
        />
      </View>
    </View>
  )
}

export default WeatherForecast
