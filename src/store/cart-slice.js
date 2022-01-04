import { createSlice, createStore } from "@reduxjs/toolkit";
import { enableES5 } from "immer";

const inicialCartStore = {
  items: {},
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  store: inicialCartStore,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price; 
      }
    },
    removeItem(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item === id);
        if(existingItem.quantity === 1) {
            state.items = state.item.filter(item => item.id !== id);
        }else{
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.price * existingItem.quantity;
        }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
