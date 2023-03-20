import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const stylesMobile = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: normalize(150),
    height: "max-content",
    borderColor: "#c1c1c1",
    padding: normalize(10),
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    borderRadius: normalize(4),
  },
  image: {
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
    // cover
  },
  pressed: {
    cursor: "pointer",
    width: normalize(150),
    height: "max-content",
    padding: normalize(10),
    borderWidth: 1,
    borderColor: "#7e199c",
    //shadow
    shadowColor: "#7e199c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transition: "all 0.2s ease-in-out",
    borderRadius: normalize(4),
  },
  circleQuantity: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: '#911cb4',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  quantity: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    borderTopColor: "#911cb44d",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: normalize(10),
  },
  priceText: {
    color: "#7e199c",
    fontSize: normalize(16),
    fontWeight: "bold",
  }
});