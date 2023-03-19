import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import IconShoppingCart from '../../icons/shoppingCartIcon'
import { styles } from './styles'

interface ButtonShoppingCardProps {
  isOpen: boolean;
  onPress?: () => void;
}

export default function ButtonShoppingCart({ isOpen, onPress }: ButtonShoppingCardProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={isOpen ? styles.isPressed : styles.content}>
          <IconShoppingCart styles={isOpen ? styles.cartIconPressed : styles.cartIcon}/>
          <Text style={isOpen ? styles.priceCartPressed : styles.priceCart}>$0</Text>
        </View>
        <View style={isOpen ? styles.closeContainer : styles.notPressed}>
          <Text style={styles.closeText}>x</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}