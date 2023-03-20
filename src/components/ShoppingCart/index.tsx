import { View, Text, useWindowDimensions, TouchableHighlight } from "react-native";
import React from "react";
import ShoppingCardItem from "../ShoppingCartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { stylesDesktop } from "./stylesDesktop";
import { stylesMobile } from "./stylesMobile";

interface ShoppingCartProps {
  onClose?: () => void;
}

export default function ShoppingCart({ onClose }: ShoppingCartProps) {

  const { width } = useWindowDimensions();
  const styles = width < 768 ? stylesMobile : stylesDesktop;
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {width < 768 && 
        <TouchableHighlight onPress={onClose}>
          <View style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </View>
        </TouchableHighlight>
      }
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
