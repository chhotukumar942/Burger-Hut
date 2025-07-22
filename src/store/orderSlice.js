import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  orders: [],
  currentOrder: null,
  orderStatus: 'idle', // idle, preparing, out-for-delivery, delivered
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: uuidv4(),
        ...action.payload,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
        estimatedDeliveryTime: new Date(Date.now() + 30 * 60000).toISOString(), // 30 minutes from now
      };
      state.orders.push(newOrder);
      state.currentOrder = newOrder;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find(order => order.id === orderId);
      if (order) {
        order.status = status;
        if (state.currentOrder && state.currentOrder.id === orderId) {
          state.currentOrder.status = status;
        }
      }
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
});

export const { placeOrder, updateOrderStatus, setCurrentOrder, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
