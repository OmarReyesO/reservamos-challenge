import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../../constants"

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50
  },
  searchBox: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium
  },
  searchInputFake: {
    justifyContent: "center",
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium
  },
  searchInputText: {
    color: COLORS.gray
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center"
  },
  backBtn: {
    width: 30,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white
  },
  searchBackImage: {
    width: "100%",
    height: "100%",
    tintColor: COLORS.primary
  }
})

export default styles
