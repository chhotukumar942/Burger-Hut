import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Truck, MapPin, CreditCard, Sparkles, Star, Receipt } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12 lg:py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-12 text-center transform transition-all duration-1000 hover:scale-[1.02]">
            {/* Success Animation */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-400 mx-auto relative animate-bounce" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-spin" />
              <Star className="w-4 h-4 text-yellow-300 absolute -bottom-1 -left-1 animate-pulse" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent mb-4 animate-fade-in">
              Order Confirmed!
            </h1>
            <p className="text-white/80 text-lg sm:text-xl mb-2 animate-fade-in-delay-1">Thank you for choosing Burger Hut!</p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/30 mb-8">
              <span className="text-white font-medium">Order ID:</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">{currentOrder.id.slice(0, 8)}</span>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 text-left border border-white/10 transform transition-all duration-500 hover:bg-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {currentOrder.items.map((item, index) => (
                  <div key={item.id} className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                      <span className="text-white font-medium">{item.name} <span className="text-yellow-400">x{item.quantity}</span></span>
                    </div>
                    <span className="text-green-400 font-bold">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-4 mt-6">
                  <div className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30">
                    <span className="text-white text-xl font-bold">Total:</span>
                    <span className="text-green-400 text-2xl font-bold">${currentOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 border border-white/10 transform transition-all duration-500 hover:bg-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {currentOrder.orderType === 'delivery' ? 'Delivery' : 'Pickup'} Information
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white mb-1">
                        {currentOrder.orderType === 'delivery' ? 'Delivery Address' : 'Pickup Location'}
                      </p>
                      <p className="text-gray-300 leading-relaxed">{currentOrder.customerInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white mb-1">Estimated Time</p>
                      <p className="text-gray-300 text-lg font-semibold">
                        {new Date(currentOrder.estimatedDeliveryTime).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10">
                    <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                      <CreditCard className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white mb-1">Payment Method</p>
                      <p className="text-gray-300">{currentOrder.paymentInfo.cardNumber}</p>
                    </div>
                  </div>
                  {currentOrder.orderType === 'delivery' && (
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10">
                      <div className="p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl">
                        <Truck className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-white mb-1">Delivery Status</p>
                        <p className="text-green-400 capitalize font-semibold">{currentOrder.status}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Information Cards */}
            {currentOrder.orderType === 'delivery' && (
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-blue-400/20 transform transition-all duration-500 hover:from-blue-500/20 hover:to-cyan-500/20 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl">
                    <Truck className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-xl text-blue-400">Delivery Information</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Our delivery partner will contact you before arrival",
                    "Please have your order ID ready",
                    "Contact-free delivery available upon request",
                    "Delivery tracking is available in real-time"
                  ].map((info, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentOrder.orderType === 'pickup' && (
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-orange-400/20 transform transition-all duration-500 hover:from-orange-500/20 hover:to-red-500/20 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="font-bold text-xl text-orange-400">Pickup Information</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Please arrive at the estimated pickup time",
                    "Show your order ID at the counter",
                    "Parking is available in front of the restaurant",
                    "We'll send you a notification when your order is ready"
                  ].map((info, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 transform transition-all duration-300 hover:bg-white/10" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() => navigate('/order-details')}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white py-4 px-8 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95"
              >
                <div className="flex items-center justify-center gap-3">
                  <Receipt className="w-6 h-6" />
                  <span>View Order Details</span>
                </div>
              </button>
              <button
                onClick={() => navigate('/order-tracking')}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white py-4 px-8 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 active:scale-95"
              >
                <div className="flex items-center justify-center gap-3">
                  <Truck className="w-6 h-6" />
                  <span>Track Your Order</span>
                </div>
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-4 px-8 rounded-2xl font-semibold text-lg border border-white/20 hover:border-white/40 transform transition-all duration-300 hover:scale-105 backdrop-blur-md active:scale-95"
              >
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Back to Home</span>
                </div>
              </button>
            </div>

            {/* Footer Information */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 transform transition-all duration-500 hover:bg-white/10">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p>A confirmation email has been sent to <span className="text-yellow-400 font-semibold">{currentOrder.customerInfo.email}</span></p>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <p>Questions? Call us at <span className="text-yellow-400 font-semibold hover:text-yellow-300 cursor-pointer transition-colors">(555) 123-BURGER</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
