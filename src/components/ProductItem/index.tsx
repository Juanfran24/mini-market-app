import { View, Image, TouchableWithoutFeedback, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { Product } from '../../models/product'
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { stylesDesktop } from './stylesDesktop';
import { stylesMobile } from './stylesMobile';

interface ProductItemProps {
  product: Product;
  isPressed?: boolean;
  onPress?: () => void;
}

export default function ProductItem({ product, isPressed, onPress }: ProductItemProps) {

  const { width } = useWindowDimensions();
  const styles = width < 768 ? stylesMobile : stylesDesktop;
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={!isPressed ? styles.container : styles.pressed}>
        <Image source={{ uri: product.image.url }} style={{...styles.image, height: product.image.height}}/>
        {width < 768 &&
          <View style={styles.descriptionContainer}>
            <Text>{product.name}</Text>
            <Text style={styles.priceText}>${product.price}</Text>
          </View>
        }
        {cart.items.find(item => item.product.id === product.id) &&
          <View style={styles.circleQuantity}>
            <Text style={styles.quantity}>{cart.items.find(item => item.product.id === product.id)?.quantity}</Text>
          </View>
        }
      </View>
      
    </TouchableWithoutFeedback>
  )
}