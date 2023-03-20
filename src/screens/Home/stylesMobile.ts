import { StyleSheet } from "react-native";
import normalize from "react-native-normalize"; 

export const stylesMobile = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: normalize(60),
    paddingHorizontal: normalize(20),
  },
  headerLeft: {
    flexDirection: "row",
    gap: normalize(10),
  },
  squareLogo: {
    borderColor: "#7e199c",
    borderWidth: 1,
    borderRadius: normalize(4),
    padding: normalize(5),
  },
  logo: {
    color: "#7e199c",
    fontSize: normalize(20),
  },
  title: {
    color: "#7e199c",
    fontSize: normalize(20),
    fontWeight: "500",
  },
  body: {
    width: "100%",
    paddingHorizontal: normalize(20),
    paddingTop: normalize(20),
  },
  bodyLeft: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: normalize(20),
    paddingBottom: normalize(20),
  },
  bodyRight: {
    display: "none",
  },
  productSelectedSection: {
    position: "absolute",
    width: "100%",
    height: "110%",
    top: -normalize(60),
    left: 0,
    backgroundColor: "#413f4180",
  },
  shopCartSection: {
    width: "100%",
    height: "110%",
    position: "absolute",
    top: -normalize(60),
    left: 0,
    backgroundColor: "#413f4180",
  }
});