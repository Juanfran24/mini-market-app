import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import React from 'react'
import { Product } from '../../models/product'
import { styles } from './styles'
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

interface ProductItemProps {
  product: Product;
  isPressed?: boolean;
  onPress?: () => void;
}

export default function ProductItem({ product, isPressed, onPress }: ProductItemProps) {

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={!isPressed ? styles.container : styles.pressed}>
        <Image source={{ uri: product.image.url }} style={{...styles.image, height: product.image.height}}/>
        {cart.items.find(item => item.product.id === product.id) &&
          <View style={styles.circleQuantity}>
            <Text style={styles.quantity}>{cart.items.find(item => item.product.id === product.id)?.quantity}</Text>
          </View>
        }
      </View>
    </TouchableWithoutFeedback>
  )
}