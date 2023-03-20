import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const stylesMobile = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#fff",
    paddingBottom: "1rem",
    marginTop: "30%",
    alignSelf: "center",
    borderRadius: normalize(4),
    paddingHorizontal: normalize(10),
    paddingTop: normalize(30),
  },
  title: {
    color: "#7e199c",
    fontSize: 18,
    fontWeight: "500",
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
    flexDirection: "column",
  },
  nameAndPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    alignSelf: "center",
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
    alignSelf: "center",
    paddingVertical: "1rem",
  },
  buttonSubtract: {
    width: normalize(60),
    height: normalize(40),
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
    width: normalize(60),
    height: normalize(40),
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
  },
  closeButton: {
    position: "absolute",
    width: normalize(30),
    height: normalize(30),
    top: -80,
    right:  0,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: "#7e199c",
    fontSize: 22,
    fontWeight: "700",
  }
});