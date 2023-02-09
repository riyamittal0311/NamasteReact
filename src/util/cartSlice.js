import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const addItemIdx = state.cartItems.findIndex(
        (item) => +item.id === +action.payload.id
      );
      if (addItemIdx > -1) {
        let updateItem = state.cartItems[addItemIdx];
        updateItem.qty = +updateItem.qty + 1;
        state.cartItems.splice(addItemIdx, 1, updateItem);
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      state.totalPrice =
        state.totalPrice + parseInt(+action.payload?.price / 100);
    },
    clearCart: () => {
      state.cartItems = [];
    },
    removeItems: (state, action) => {
      const removeItemIdx = state.cartItems.findIndex(
        (item) => +item.id === +action.payload.id
      );
      let removedItem = state.cartItems[removeItemIdx];
      if (removedItem.qty > 1) {
        removedItem.qty = +removedItem.qty - 1;
        state.cartItems.splice(removeItemIdx, 1, removedItem);
      } else {
        state.cartItems.splice(removeItemIdx, 1);
      }
      state.totalPrice =
      state.totalPrice - parseInt(+action.payload?.price / 100);
    },
  },
});

export const { addToCart, clearCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
