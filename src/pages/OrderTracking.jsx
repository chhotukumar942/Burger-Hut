import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Truck, MapPin, Phone } from 'lucide-react';
import { updateOrderStatus } from '../store/orderSlice';

const OrderTracking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentOrder } = useSelector(state => state.order);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, description: 'Your order has been received' },
    { id: 'preparing', label: 'Preparing', icon: Clock, description: 'Our chefs are preparing your meal' },
    { id: 'ready', label: 'Ready', icon: CheckCircle, description: 'Your order is ready for pickup/delivery' },
    { id: 'out-for-delivery', label: 'Out for Delivery', icon: Truck, description: 'Your order is on the way' },
    { id: 'delivered', label: 'Delivered', icon: CheckCircle, description: 'Enjoy your meal!' }
  ];

  const pickupSteps = [
    { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, description: 'Your order has been received' },
    { id: 'preparing', label: 'Preparing', icon: Clock, description: 'Our chefs are preparing your meal' },
    { id: 'ready', label: 'Ready for Pickup', icon: CheckCircle, description: 'Your order is ready for pickup' }
  ];

  const currentSteps = currentOrder?.orderType === 'pickup' ? pickupSteps : steps;

  useEffect(() => {
    if (!currentOrder) {
      navigate('/');
      return;
    }

    // Simulate order progress
    const statusMap = {
      'confirmed': 0,
      'preparing': 1,
      'ready': 2,
      'out-for-delivery': 3,
      'delivered': 4
    };

    setCurrentStep(statusMap[currentOrder.status] || 0);

    // Auto-update order status simulation
    const timer = setInterval(() => {
      if (currentOrder.status === 'confirmed') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'preparing' }));
      } else if (currentOrder.status === 'preparing') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'ready' }));
      } else if (currentOrder.status === 'ready' && currentOrder.orderType === 'delivery') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'out-for-delivery' }));
      } else if (currentOrder.status === 'out-for-delivery') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'delivered' }));
      }
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(timer);
  }, [currentOrder, dispatch, navigate]);

  if (!currentOrder) {
    return null;
  }

  const isStepCompleted = (stepIndex) => stepIndex <= currentStep;
  const isStepActive = (stepIndex) => stepIndex === currentStep;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Track Your Order</h1>
              <p className="text-gray-600">Order ID: {currentOrder.id.slice(0, 8)}</p>
            </div>

            {/* Order Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-8">
                {currentSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="flex flex-col items-center relative">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                          isStepCompleted(index)
                            ? 'bg-green-500 text-white'
                            : isStepActive(index)
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-sm font-medium text-center ${
                          isStepCompleted(index) || isStepActive(index)
                            ? 'text-gray-900'
                            : 'text-gray-400'
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-xs text-gray-500 text-center mt-1">
                        {step.description}
                      </span>
                      
                      {index < currentSteps.length - 1 && (
                        <div
                          className={`absolute top-6 left-full w-full h-0.5 ${
                            isStepCompleted(index) ? 'bg-green-500' : 'bg-gray-200'
                          }`}
                          style={{ width: 'calc(100% - 24px)', marginLeft: '12px' }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                <div className="space-y-3">
                  {currentOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${currentOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">
                        {currentOrder.orderType === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
                      </p>
                      <p className="text-gray-600">{currentOrder.customerInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-gray-600">{currentOrder.customerInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Estimated {currentOrder.orderType === 'delivery' ? 'Delivery' : 'Pickup'}</p>
                      <p className="text-gray-600">
                        {new Date(currentOrder.estimatedDeliveryTime).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
              >
                Back to Home
              </button>
              <button
                onClick={() => window.open('tel:555-123-BURGER')}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Call Restaurant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
