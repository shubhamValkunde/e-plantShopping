import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If the item already exists, just increase the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Remove the item by filtering out the item with the matching name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // Find the item in the cart and update its quantity
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

// Export the action creators to be used in your components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in your store.js
export default CartSlice.reducer;
