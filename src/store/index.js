import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import orderReducer from './orderSlice';
import bookingReducer from './bookingSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
    booking: bookingReducer,
  },
});

export default store;
