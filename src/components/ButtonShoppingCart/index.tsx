import { View, Text, TouchableWithoutFeedback, useWindowDimensions } from 'react-native'
import React from 'react'
import IconShoppingCart from '../../icons/shoppingCartIcon'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { stylesMobile } from './stylesMobile'
import { stylesDesktop } from './stylesDesktop'

interface ButtonShoppingCardProps {
  isOpen: boolean;
  onPress?: () => void;
}

export default function ButtonShoppingCart({ isOpen, onPress }: ButtonShoppingCardProps) {

  const { width } = useWindowDimensions();
  const styles = width < 768 ? stylesMobile : stylesDesktop;
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={isOpen ? styles.isPressed : styles.content}>
          <IconShoppingCart styles={isOpen ? styles.cartIconPressed : styles.cartIcon}/>
          <Text style={isOpen ? styles.priceCartPressed : styles.priceCart}>${cart.totalCost}</Text>
        </View>
        <View style={isOpen ? styles.closeContainer : styles.notPressed}>
          <Text style={styles.closeText}>x</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}