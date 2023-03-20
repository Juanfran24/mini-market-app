import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const stylesDesktop = StyleSheet.create({
  container: {
    borderBottomColor: "#911cb44d",
    borderBottomWidth: 1,
    paddingBottom: "1rem",
  },
  title: {
    color: "#7e199c",
    fontSize: 18,
    fontWeight: "500",
    position: "absolute",
    top: "-3.6rem",
  },
  quantity: {
    width: 30,
    height: 30,
    backgroundColor: "#7e199c",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    left: 10,
    padding: "1.2rem"
  },
  quantityText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  imageAndQuantityContainer: {
    height: normalize(65),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "50%",
    height: "100%",
    resizeMode: "contain",
  },
  nameAndPriceSection: {
    marginTop: "1rem",
    paddingBottom: "1rem",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
  },
  nameProduct: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
  },
  priceProduct: {
    fontSize: 22,
    fontWeight: "500",
    color: "#7e199c",
  },
  point: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: "#911cb44d",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginRight: "1rem",
  },
  buttonSubtract: {
    width: 40,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSubtractText: {
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAdd: {
    width: 40,
    backgroundColor: "#7e199c",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAddText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  descriptionSection: {
    borderTopWidth: 1,
    borderTopColor: "#911cb44d",
    paddingTop: "0.5rem",
  },
  descriptionProduct : {
    fontSize: 16,
    fontWeight: "400",
    color: "#909090",
  }
});