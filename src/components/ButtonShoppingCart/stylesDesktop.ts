import { StyleSheet } from "react-native";

export const stylesDesktop = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
  content: {
    backgroundColor: "#911cb4",
    flexDirection: "row",
    padding: "0.4rem",
    alignItems: "center",
    gap: "0.3rem",
    transition: "all 0.2s ease-in-out",
  },
  isPressed: {
    backgroundColor: "#f9e4fd",
    borderWidth: 1,
    borderColor: "#911cb4",
    cursor: "pointer",
    flexDirection: "row",
    padding: "0.4rem",
    alignItems: "center",
    gap: "0.3rem",
    transition: "all 0.2s ease-in-out",
  },
  cartIcon: {
    color: "#fff",
    width: 25,
    height: 25,
  },
  cartIconPressed: {
    color: "#911cb4",
    width: 25,
    height: 25,
  },
  priceCart: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  priceCartPressed: {
    color: "#911cb4",
    fontSize: 18,
    fontWeight: "500",
  },
  closeContainer: {
    backgroundColor: "#911cb4",
    width: 30,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.4rem",
  },
  closeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 2,
  },
  notPressed: {
    backfaceVisibility: "hidden",
  }
});