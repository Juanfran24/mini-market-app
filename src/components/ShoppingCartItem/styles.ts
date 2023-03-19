import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#911cb44d',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: "0.5rem",
    paddingLeft: "0.5rem",
    gap: "1rem",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  quantity: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circleQuantity: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: '#911cb4',
    alignItems: 'center',
    justifyContent: 'center',
  }
});