import { View, Text, TextInput, TouchableOpacity, Image } from "react-native"
import styles from "./searchbar.style"
import { icons } from "../../../constants"

interface SearchBarProps {
  input?: boolean
  value?: string
  changeValue?: (e: string) => void
  onPressSearchBar?: () => void
  onPressBtn?: () => void
  onPressBack?: () => void
}

const SearchBar = ({
  onPressBtn,
  onPressSearchBar,
  onPressBack,
  changeValue,
  input,
  value
}: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      {input && (
        <TouchableOpacity style={styles.backBtn} onPress={onPressBack}>
          <Image
            source={icons.chevronLeft}
            resizeMode="contain"
            style={styles.searchBackImage}
          />
        </TouchableOpacity>
      )}

      <View style={styles.searchBox}>
        {input ? (
          <TextInput
            style={styles.searchInput}
            value={value}
            onChangeText={(e) => changeValue(e)}
            placeholder="Choose location for weather"
            autoFocus
          />
        ) : (
          <TouchableOpacity
            style={styles.searchInputFake}
            onPress={onPressSearchBar}
          >
            <Text style={styles.searchInputText}>{value}</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={onPressBtn}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar
