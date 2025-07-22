// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirm from './pages/OrderConfirm';
import OrderTracking from './pages/OrderTracking';
import TableBooking from './pages/TableBooking';
import BookingConfirmation from './pages/BookingConfirmation';
import Login from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirm />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/order-details/:orderId" element={<OrderDetails />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/table-booking" element={<TableBooking />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
export default App;
