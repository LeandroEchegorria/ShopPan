import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { isAndroid } from "../../utils/functions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: isAndroid ? colors.secondary : colors.primary,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
  },
  price: {
    fontSize: 15,
    fontFamily: "Lato-Regular",
  },
  weight: {
    fontSize: 12,
    fontFamily: "Lato-Regular",
  },
});
