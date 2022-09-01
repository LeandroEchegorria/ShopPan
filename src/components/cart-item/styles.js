import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    marginBottom: 5,
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  detailQty: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
    marginBottom: 5,
  },
  detailPrice: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
});
