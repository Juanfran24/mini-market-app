import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Product } from '../../models/product';

interface ShoppingCardItemProps {
  product: Product;
}

export default function ShoppingCardItem({ product }: ShoppingCardItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circleQuantity}>
        <Text style={styles.quantity}>1</Text>
      </View>
      <Image style={styles.image} source={{uri: product.image.url}}/>
    </View>
  )
}