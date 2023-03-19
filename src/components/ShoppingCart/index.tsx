import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import products from "../../mocks/products";
import ShoppingCardItem from "../ShoppingCartItem";
import { useSelector } from "react-redux";

export default function ShoppingCart() {

  let arrayProducts = [products[0], products[1]];
  
  // const arrayProducts = useSelector((state : ) => state.cart);

  let isEmpty = arrayProducts.length === 0;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <View style={styles.productsContainer}>
        {isEmpty ? (
          <Text style={{ color: "#818181" }}>Your shopping cart is empty</Text>
        ) : (
          arrayProducts.map((product) => (
            <ShoppingCardItem product={product}/>
          ))
        )}
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.titlePrice}>Total:</Text>
        <Text style={styles.price}> $0</Text>
      </View>
      {/* <ButtonWm/> */}
    </View>
  );
}
