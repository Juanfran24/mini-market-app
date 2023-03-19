import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addToCart, diffToCart } from "../features/cart/cartSlice";
import type { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addToCart, diffToCart),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "cart",
      JSON.stringify((listenerApi.getState() as RootState).cart)
    )
});