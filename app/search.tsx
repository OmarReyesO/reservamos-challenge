import React, { useEffect, useState } from "react"
import { View, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"
import { COLORS, SIZES } from "../constants"
import SearchBar from "components/common/searchbar/SearchBar"
import useFetch from "hook/useFetch"
import { GetPlaces } from "../api/Endpoints"
import SearchResults from "components/search/SearchResults"

const Home = () => {
  const router = useRouter()
  const { fetchData, data, isLoading } = useFetch()

  const [searchValue, setSearchValue] = useState("")

  const goBack = () => {
    router.back()
  }

  useEffect(() => {
    if (searchValue) {
      fetchData(GetPlaces, searchValue)
    }
  }, [searchValue])

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
        <SearchBar
          input={true}
          onPressSearchBar={() => {}}
          onPressBtn={() => {}}
          onPressBack={goBack}
          value={searchValue}
          changeValue={(e) => setSearchValue(e)}
        />
      </View>

      <SearchResults data={data} loading={isLoading} />
    </SafeAreaView>
  )
}

export default Home
