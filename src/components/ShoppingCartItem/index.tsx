import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Product } from '../../models/product';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

interface ShoppingCardItemProps {
  product: Product;
}

export default function ShoppingCardItem({ product }: ShoppingCardItemProps) {

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      <View style={styles.circleQuantity}>
        <Text style={styles.quantity}>{cart.items.find(item => item.product.id === product.id)?.quantity}</Text>
      </View>
      <Image style={styles.image} source={{uri: product.image.url}}/>
    </View>
  )
}