import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Clock, User } from 'lucide-react';
import { placeOrder } from '../store/orderSlice';
import { clearCart } from '../store/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector(state => state.cart);
  const { user, isAuthenticated } = useSelector(state => state.auth);
  
  const [orderType, setOrderType] = useState('delivery');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    instructions: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      items,
      total: total + 2.99 + total * 0.1,
      orderType,
      customerInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: orderType === 'delivery' ? formData.address : 'Pickup'
      },
      paymentInfo: {
        cardNumber: `****-****-****-${formData.cardNumber.slice(-4)}`,
        method: 'Credit Card'
      },
      instructions: formData.instructions
    };

    dispatch(placeOrder(orderData));
    dispatch(clearCart());
    navigate('/order-confirmation');
  };

  const finalTotal = (total + 2.99 + total * 0.1).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Order Type */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Order Type
                </h3>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="delivery"
                      checked={orderType === 'delivery'}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="mr-2"
                    />
                    Delivery
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="pickup"
                      checked={orderType === 'pickup'}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="mr-2"
                    />
                    Pickup
                  </label>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      name="address"
                      placeholder="Delivery Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 md:col-span-2"
                      required
                    />
                  )}
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    maxLength={16}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      maxLength={5}
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Special Instructions</h3>
                <textarea
                  name="instructions"
                  placeholder="Any special requests or instructions..."
                  value={formData.instructions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span>$2.99</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-xl font-semibold">
                    <span>Total:</span>
                    <span>${finalTotal}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Estimated {orderType === 'delivery' ? 'delivery' : 'pickup'}: 25-35 minutes
                </div>

                <form onSubmit={handleSubmit} className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Place Order - ${finalTotal}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
