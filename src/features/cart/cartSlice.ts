import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, ItemProduct } from '../../models/cart';
import { Product } from '../../models/product';

const initialState : Cart = {
  items: [],
  totalCost: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product }>) => {
      const { product } = action.payload;
      const item = state.items.find((item: ItemProduct) => item.product.id === product.id);
      if (item) {
        item.quantity++;
        state.totalCost += product.price;
        return;
      }
      state.items.push({ product, quantity: 0 });
      
    },
    diffToCart: (state, action: PayloadAction<{ product: Product }>) => {
      const { product } = action.payload;
      const item = state.items.find((item: ItemProduct) => item.product.id === product.id);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((item: ItemProduct) => item.product.id !== product.id);
          state.totalCost -= product.price;
          return;
        }
        item.quantity--;
        state.totalCost -= product.price;
      }
    }
  }
});

export const { addToCart, diffToCart } = cartSlice.actions;
export default cartSlice.reducer;