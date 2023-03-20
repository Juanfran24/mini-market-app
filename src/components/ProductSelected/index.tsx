import { View, Text, Image, TouchableHighlight, useWindowDimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, diffToCart } from '../../features/cart/cartSlice';
import type { Product } from '../../models/product';
import type { RootState } from '../../app/store';
import { stylesDesktop } from './stylesDesktop';
import { stylesMobile } from './stylesMobiles';

interface ProductSelectProps {
  product: Product;
  onClose?: () => void;
}

export default function ProductSelect({ product, onClose }: ProductSelectProps) {

  const { width } = useWindowDimensions();
  const styles = width < 768 ? stylesMobile : stylesDesktop;
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
 
  const handleAddToCart = () => {
    dispatch(addToCart({ product }))
  }

  const handleDiffFromCart = () => {
    dispatch(diffToCart({ product }))
  }

  return (
    <View style={styles.container}>
      {width > 768 && <Text style={styles.title}>Product</Text>}
      <View style={styles.imageAndQuantityContainer}>
        <Image source={{ uri: product?.image.url }} style={styles.image}/>
        {cart.items.find(item => item.product.id === product.id) && 
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>{cart.items.find(item => item.product.id === product.id)?.quantity}</Text>
          </View>
        }
      </View>
      {width < 768 && 
        <TouchableHighlight onPress={onClose}>
          <View style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </View>
        </TouchableHighlight>
      }
      <View style={styles.nameAndPriceSection}>
        <View style={styles.nameAndPriceContainer}>
          <Text style={styles.nameProduct}>{product?.name}</Text>
          <View style={styles.point}/>
          <Text style={styles.priceProduct}>${product?.price}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {!(cart.items.find(item => item.product.id === product.id)) ? 
            <TouchableHighlight style={styles.buttonSubtract} onPress={handleDiffFromCart} disabled>
              <Text style={styles.buttonSubtractText}>-</Text>
            </TouchableHighlight>
            :
            <TouchableHighlight style={styles.buttonSubtract} onPress={handleDiffFromCart}>
              <Text style={styles.buttonSubtractText}>-</Text>
            </TouchableHighlight>
            
          }
          <TouchableHighlight style={styles.buttonAdd} onPress={handleAddToCart}>
            <Text style={styles.buttonAddText}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.descriptionSection}>
        <Text style={styles.descriptionProduct}>{product?.description}</Text>
      </View>
      
    </View>
  )
}