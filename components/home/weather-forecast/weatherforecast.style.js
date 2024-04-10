import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../../constants"
import { Dimensions } from "react-native"

const { height: deviceHeight } = Dimensions.get("window")

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 20
  },
  headerText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium
  },
  listContainer: {
    marginTop: 20,
    height: deviceHeight * 0.5,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  itemContainer: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: SIZES.small
  },
  itemText: {
    flex: 1,
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    textAlign: "center"
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemImg: {
    width: 50,
    height: 50
  }
})

export default styles
