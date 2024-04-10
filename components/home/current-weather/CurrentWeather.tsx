import React from "react"
import moment from "moment"
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image
} from "react-native"
import styles from "./currentweather.style"
import { unixToHour } from "../../../utils/functions"

interface WeatherData {
  id: number
  main: string
  description: string
  icon: string
}

interface WeatherItemProps {
  dt: number
  temp: number
  weather: WeatherData[]
}

const WeatherItem = ({ dt, temp, weather }: WeatherItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{unixToHour(dt)}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        }}
        style={styles.itemImg}
      />
      <Text style={styles.itemText}>{temp.toFixed(0) + "\u00B0"} </Text>
    </View>
  )
}

const CurrentWeather = ({ data }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today</Text>
        <Text style={styles.headerText}>{moment().format("MMMM Do YYYY")}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <WeatherItem dt={item.dt} temp={item.temp} weather={item.weather} />
          )}
          contentContainerStyle={{ columnGap: 20, marginHorizontal: 20 }}
          horizontal
        />
      </View>
    </View>
  )
}

export default CurrentWeather
