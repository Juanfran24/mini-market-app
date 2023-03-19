import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "max-content",
    height: "max-content",
    borderColor: "#c1c1c1",
    padding: "1rem",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  image: {
    width: 150,
    resizeMode: "contain",
    // cover
  },
  pressed: {
    cursor: "pointer",
    width: "max-content",
    height: "max-content",
    padding: "1rem",	
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
  }
});