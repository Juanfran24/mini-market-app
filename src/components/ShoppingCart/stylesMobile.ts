import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const stylesMobile = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "80%",
    alignSelf: "center",
    marginTop: "20%",
    padding: normalize(20),
  },
  title: {
    color: "#7e199c",
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: normalize(15),
  },
  productsContainer: {
    marginBottom: "1rem",
  },
  priceContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  titlePrice: {
    color: "#bebebe",
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    color: "#7e199c",
    fontSize: 24,
    fontWeight: "600",
  },
  closeButton: {
    position: "absolute",
    width: normalize(30),
    height: normalize(30),
    top: -40,
    right:  -10,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: "#7e199c",
    fontSize: 22,
    fontWeight: "700",
  }
});