import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookings: [],
  currentBooking: null,
  availableTables: [
    { id: 1, seats: 2, available: true },
    { id: 2, seats: 4, available: true },
    { id: 3, seats: 6, available: true },
    { id: 4, seats: 2, available: true },
    { id: 5, seats: 4, available: true },
    { id: 6, seats: 8, available: true },
  ],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookTable: (state, action) => {
      const newBooking = {
        id: uuidv4(),
        ...action.payload,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      };
      state.bookings.push(newBooking);
      state.currentBooking = newBooking;
      
      // Mark table as unavailable
      const table = state.availableTables.find(t => t.id === action.payload.tableId);
      if (table) {
        table.available = false;
      }
    },
    cancelBooking: (state, action) => {
      const bookingIndex = state.bookings.findIndex(booking => booking.id === action.payload);
      if (bookingIndex !== -1) {
        const booking = state.bookings[bookingIndex];
        // Make table available again
        const table = state.availableTables.find(t => t.id === booking.tableId);
        if (table) {
          table.available = true;
        }
        state.bookings.splice(bookingIndex, 1);
      }
    },
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    clearCurrentBooking: (state) => {
      state.currentBooking = null;
    },
  },
});

export const { bookTable, cancelBooking, setCurrentBooking, clearCurrentBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
