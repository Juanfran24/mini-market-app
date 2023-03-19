import { StyleSheet } from "react-native";

export const stylesDesktop = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    padding: "1rem",
    maxWidth: 1440,
    marginHorizontal: "auto",
  },
  header: {
    width: "100%",
    paddingBottom: "0.5rem",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    width: "100%",
    flexDirection: "row",
    gap: "3%",
  },
  title: {
    color: "#7e199c",
    fontSize: 18,
    fontWeight: "500",
  },
  squareLogo: {
    borderRadius: 4,
    backgroundColor: "#7e199c",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.6rem",
  },
  headerLeft: {
    gap: "1rem",
  },
  logo: {
    width: 50,
    height: 50,
    color: "#fff",
  },
  bodyLeft: {
    flex: 1.5,
    borderTopWidth: 1,
    borderTopColor: "#911cb44d",
    paddingTop: "1.5rem",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
  },
  bodyRight: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#911cb44d",
    paddingTop: "1.5rem",
    color: "#818181",
  },

});