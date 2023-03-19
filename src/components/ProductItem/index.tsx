import { View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Product } from '../../models/product'
import { styles } from './styles'

interface ProductItemProps {
  product: Product;
  isPressed?: boolean;
  onPress?: () => void;
}

export default function ProductItem({ product, isPressed, onPress }: ProductItemProps) {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={!isPressed ? styles.container : styles.pressed}>
        <Image source={{ uri: product.image.url }} style={{...styles.image, height: product.image.height}}/>
      </View>
    </TouchableWithoutFeedback>
  )
}