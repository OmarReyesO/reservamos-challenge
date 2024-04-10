import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container: {
    flex: 9,
    paddingHorizontal: 15
  },
  loader: {
    marginTop: 30
  },
  dataContainer: {
    flex: 1
  },
  cardContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txtContainer: {
    flex: 6
  },
  cardImg: {
    height: "100%",
    tintColor: COLORS.secondary
  },
  cardTxt: {
    fontSize: SIZES.medium
  }
})

export default styles
