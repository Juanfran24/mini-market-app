import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { stylesMobile } from './stylesMobile'
import { stylesDesktop } from './stylesDesktop'
import IconBxsShoppingBags from '../../icons/bagsIcon';
import products from '../../mocks/products';
import ProductItem from '../../components/ProductItem';
import ProductSelect from '../../components/ProductSelected';
import ButtonShoppingCart from '../../components/ButtonShoppingCart';
import ShoppingCart from '../../components/ShoppingCart';
import type { Product } from '../../models/product';

export default function Home() {

  const { width } = useWindowDimensions();
  const styles = width < 768 ? stylesMobile : stylesDesktop;
  const newProduct : Product = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    image: {
      url: "",
      alt: "",
      height: 0,
    }
  };
  const [product, setProduct] = useState<Product>(newProduct);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [isOpenShoppingCard, setIsOpenShoppingCard] = useState(false);

  const handleItemClick = (product: Product) => {
    if(selectedItemId === product.id) {
      setSelectedItemId(0);
      setProduct(newProduct);
      return;
    }
    setSelectedItemId(product.id);
    setProduct(product);
  }

  useEffect(() => {
    if(isOpenShoppingCard) {
      if(selectedItemId !== 0) {
        setIsOpenShoppingCard(false);
      }
      setSelectedItemId(0);
      setProduct(newProduct);
    }
  
  }, [selectedItemId])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.squareLogo}>
            <IconBxsShoppingBags {...styles.logo}/>
          </View>
          <Text style={styles.title}>Store</Text>
        </View>
        <ButtonShoppingCart isOpen={isOpenShoppingCard} onPress={() => {setIsOpenShoppingCard(prevState => prevState = !prevState)}}/>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyLeft}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} isPressed={selectedItemId === product.id} onPress={() => handleItemClick(product)} />
          ))}
        </View>
        <View style={styles.bodyRight}>
          {!isOpenShoppingCard ?
            (selectedItemId === 0 ? 
              <Text style={{ color: "inherit" }}>Please choose a product on the left.</Text>
              :
              <ProductSelect product={product}/>)
            :
            <ShoppingCart/>
          }
        </View>
      </View>
    </View>
  )
}