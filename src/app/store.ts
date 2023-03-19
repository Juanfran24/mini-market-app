import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { initialState } from "../features/cart/cartSlice";
import { listenerMiddleware } from "./middleware";

export interface RootState {
  cart: ReturnType<typeof cartReducer>;
}

const cartState = JSON.parse(localStorage.getItem("cart") || "null");

const store = configureStore({
  preloadedState: {
    cart: cartState === null ? initialState : cartState,
  },
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ]
});

export default store;