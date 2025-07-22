import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, CreditCard } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { currentOrder } = useSelector(state => state.order);

  useEffect(() => {
    if (!currentOrder) {
      navigate('/');
    }
  }, [currentOrder, navigate]);

  if (!currentOrder) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">Thank you for your order. We're preparing your delicious meal!</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Order Details</h3>
              <div className="text-left space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Order ID:</span>
                  <span className="text-gray-600">{currentOrder.id.slice(0, 8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Amount:</span>
                  <span className="text-gray-600">${currentOrder.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Order Type:</span>
                  <span className="text-gray-600 capitalize">{currentOrder.orderType}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium">
                    {currentOrder.orderType === 'delivery' ? 'Delivery Address:' : 'Pickup Location:'}
                  </span>
                  <span className="text-gray-600 text-right">
                    {currentOrder.customerInfo.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-700">Estimated Time</h4>
                <p className="text-blue-600">25-35 minutes</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-green-700">Status</h4>
                <p className="text-green-600 capitalize">{currentOrder.status}</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <button
                onClick={() => navigate('/order-tracking')}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Track Your Order
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
              >
                Back to Home
              </button>
            </div>

            <div className="text-sm text-gray-500">
              <p>A confirmation email has been sent to {currentOrder.customerInfo.email}</p>
              <p className="mt-2">Questions? Call us at (555) 123-BURGER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
