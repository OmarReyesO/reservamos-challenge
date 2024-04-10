import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../../constants"

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
    height: 110,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.small,
    width: 55
  },
  itemText: {
    color: COLORS.white,
    fontFamily: FONT.bold
  },
  itemImg: {
    width: 50,
    height: 50
  }
})

export default styles
