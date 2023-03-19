import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import ShoppingCardItem from "../ShoppingCartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

export default function ShoppingCart() {

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <View style={styles.productsContainer}>
        {cart.items.length === 0 ? (
          <Text style={{ color: "#818181" }}>Your shopping cart is empty</Text>
        ) : (
          cart.items.map((item) => (
            <ShoppingCardItem key={item.product.id} product={item.product}/>
          ))
        )}
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.titlePrice}>Total:</Text>
        <Text style={styles.price}> ${cart.totalCost}</Text>
      </View>
      {/* <ButtonWm/> */}
    </View>
  );
}
