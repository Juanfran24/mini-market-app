import { View, Text, Image, Button, TouchableHighlight } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { styles } from './styles'
import { Product } from '../../models/product';
import { useDispatch } from 'react-redux';
import { addToCart, diffToCart } from '../../features/cart/cartSlice';
import { useSelector } from "react-redux";
import { RootState } from '../../app/store';

interface ProductSelectProps {
  product: Product;
}

export default function ProductSelect({ product }: ProductSelectProps) {

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);
 
  const handleAddToCart = () => {
    dispatch(addToCart({ product }))
  }

  const handleDiffFromCart = () => {
    dispatch(diffToCart({ product }))
  }

  const quantity = cart.items.find(item => item.product.id === product.id)?.quantity || 0;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product</Text>
      <View style={styles.imageAndQuantityContainer}>
        <Image source={{ uri: product?.image.url }} style={styles.image}/>
        {cart.items.find(item => item.product.id === product.id) && 
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>{cart.items.find(item => item.product.id === product.id)?.quantity}</Text>
          </View>
        }
      </View>
      <View style={styles.nameAndPriceSection}>
        <View style={styles.nameAndPriceContainer}>
          <Text style={styles.nameProduct}>{product?.name}</Text>
          <View style={styles.point}/>
          <Text style={styles.priceProduct}>${product?.price}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight style={styles.buttonSubtract} onPress={handleDiffFromCart} disabled={cart.items.find(item => item.product.id === product.id)?.quantity < 1}>
            <Text style={styles.buttonSubtractText}>-</Text>
          </TouchableHighlight>
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