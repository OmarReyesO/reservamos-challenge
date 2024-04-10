import React, { useContext, useEffect } from "react"
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native"
import { Stack, useRouter } from "expo-router"
import { COLORS, SIZES } from "../constants"
import SearchBar from "components/common/searchbar/SearchBar"
import CurrentWeather from "components/home/current-weather/CurrentWeather"
import WeatherForecast from "components/home/weather-forecast/WeatherForecast"
import { SearchContext } from "../context/SearchContext"
import useFetch from "hook/useFetch"
import { GetWeather } from "api/Endpoints"

const Home = () => {
  const { fetchData, data, isLoading } = useFetch()
  const router = useRouter()
  const { selectedResult } = useContext(SearchContext)

  const onPressSearchBar = () => {
    router.push("/search")
  }

  const searchBarValue = selectedResult
    ? `${selectedResult.city_name}, ${selectedResult.state} - ${
        selectedResult.display === selectedResult.city_name
          ? "All stations"
          : selectedResult.display
      }`
    : "Choose location for weather"

  useEffect(() => {
    if (selectedResult) {
      fetchData(GetWeather, {
        lat: selectedResult.lat,
        lon: selectedResult.long
      })
    }
  }, [selectedResult])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
      <View
        style={{
          flex: 1,
          padding: SIZES.medium
        }}
      >
        <Stack.Screen options={{ headerShown: false }} />
        <SearchBar onPressSearchBar={onPressSearchBar} value={searchBarValue} />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={{ marginTop: 30 }}
          />
        ) : (
          <>
            {data ? (
              <>
                <CurrentWeather data={data.hourly} />
                <WeatherForecast data={data.daily} />
              </>
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: SIZES.medium,
                  marginTop: SIZES.xLarge
                }}
              >
                Please select a location.
              </Text>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Home
