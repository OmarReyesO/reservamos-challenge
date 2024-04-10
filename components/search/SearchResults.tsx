import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native"
import React, { useContext } from "react"
import { COLORS, SIZES } from "../../constants"
import styles from "./searchresult.style"
import { icons } from "../../constants"
import { useRouter } from "expo-router"
import { SearchContext } from "context/SearchContext"

const ResultCard = ({ data }) => {
  const router = useRouter()
  const { selectResult } = useContext(SearchContext)

  const selectLocation = (data) => {
    selectResult(data)
    router.back()
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => selectLocation(data)}
    >
      <View style={styles.imgContainer}>
        <Image
          source={icons.location}
          resizeMode="contain"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.cardTxt}>
          {data.city_name}, {data.state} -{" "}
          {data.display === data.city_name ? "All stations" : data.display}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const SearchResults = ({ data, loading }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={styles.loader}
        />
      ) : (
        <View style={styles.dataContainer}>
          {data && (
            <FlatList
              data={data}
              renderItem={({ item }) => <ResultCard data={item} />}
              contentContainerStyle={{
                rowGap: SIZES.large
              }}
            />
          )}
        </View>
      )}
    </View>
  )
}

export default SearchResults
