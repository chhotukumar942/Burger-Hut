import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Star, Utensils, User, Printer, Download, Share2, AlertCircle, ArrowLeft, Phone, Calendar } from 'lucide-react';
import { setCurrentOrder } from '../store/orderSlice';

const OrderDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { orders, currentOrder } = useSelector(state => state.order);
  const [order, setOrder] = useState(null);
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    // If no orderId provided, use currentOrder or redirect
    if (!orderId && currentOrder) {
      setOrder(currentOrder);
    } else if (orderId) {
      const foundOrder = orders.find(o => o.id === orderId);
      if (foundOrder) {
        setOrder(foundOrder);
        dispatch(setCurrentOrder(foundOrder));
      } else {
        // Create a mock order for demonstration
        const mockOrder = {
          id: orderId || `ORD-${Date.now()}`,
          items: [
            { id: 1, name: "Classic Burger", price: "$8.99", quantity: 2, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
            { id: 2, name: "Cheese Burger", price: "$9.99", quantity: 1, imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" }
          ],
          total: 27.97,
          status: 'delivered',
          createdAt: new Date().toISOString(),
          estimatedDelivery: new Date(Date.now() + 30 * 60000).toISOString(),
          deliveryAddress: "123 Main Street, City, State 12345",
          customerInfo: {
            name: "John Doe",
            phone: "+1 (555) 123-4567",
            email: "john.doe@email.com"
          },
          restaurant: {
            name: "Burger Hut Downtown",
            address: "456 Downtown Ave",
            phone: "+1 (555) 987-6543"
          },
          paymentMethod: "Credit Card ending in 4567",
          deliveryFee: 2.99,
          tax: 2.80,
          subtotal: 22.18
        };
        setOrder(mockOrder);
        dispatch(setCurrentOrder(mockOrder));
      }
    } else {
      navigate('/');
    }
  }, [orderId, orders, currentOrder, dispatch, navigate]);

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleDownloadReceipt = () => {
    // Create receipt data
    const receiptData = {
      orderId: order.id,
      items: order.items,
      total: order.total,
      customerInfo: order.customerInfo,
      timestamp: order.createdAt
    };
    
    const blob = new Blob([JSON.stringify(receiptData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${order.id.slice(0, 8)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShareOrder = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Burger Hut Order',
          text: `Check out my order from Burger Hut! Order ID: ${order.id.slice(0, 8)}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Order link copied to clipboard!');
    }
  };

  const submitRating = () => {
    // In a real app, this would send rating to backend
    console.log('Rating submitted:', { rating, review, orderId: order.id });
    setShowRating(false);
    alert('Thank you for your feedback!');
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-400" />
          <h1 className="text-2xl font-bold mb-2">Order Not Found</h1>
          <p className="mb-4">The order you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              Order Details
            </h1>
            <p className="text-white/70">Complete information about your order</p>
          </div>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8">
            {/* Order Header */}
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/20">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Order #{order.id.slice(0, 8)}</h2>
                <p className="text-white/70">
                  Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrintReceipt}
                  className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-400/30 text-blue-400 transition-colors"
                  title="Print Receipt"
                >
                  <Printer className="w-5 h-5" />
                </button>
                <button
                  onClick={handleDownloadReceipt}
                  className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-400/30 text-green-400 transition-colors"
                  title="Download Receipt"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={handleShareOrder}
                  className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg border border-purple-400/30 text-purple-400 transition-colors"
                  title="Share Order"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Order Status */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-xl font-semibold text-white">Status: </span>
                <span className="text-green-400 capitalize font-semibold">{order.status}</span>
              </div>
              
              {order.estimatedDeliveryTime && (
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <span className="text-white">Estimated {order.orderType}: </span>
                  <span className="text-blue-400 font-semibold">
                    {new Date(order.estimatedDeliveryTime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              )}
            </div>

            {/* Customer Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Customer Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/70">Name: </span>
                    <span className="text-white font-medium">{order.customerInfo.name}</span>
                  </div>
                  <div>
                    <span className="text-white/70">Email: </span>
                    <span className="text-white font-medium">{order.customerInfo.email}</span>
                  </div>
                  <div>
                    <span className="text-white/70">Phone: </span>
                    <span className="text-white font-medium">{order.customerInfo.phone}</span>
                  </div>
                  <div>
                    <span className="text-white/70">Address: </span>
                    <span className="text-white font-medium">{order.customerInfo.address}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/70">Type: </span>
                    <span className="text-white font-medium capitalize">{order.orderType}</span>
                  </div>
                  <div>
                    <span className="text-white/70">Payment: </span>
                    <span className="text-white font-medium">{order.paymentInfo.method}</span>
                  </div>
                  {order.paymentInfo.cardNumber && (
                    <div>
                      <span className="text-white/70">Card: </span>
                      <span className="text-white font-medium">{order.paymentInfo.cardNumber}</span>
                    </div>
                  )}
                  {order.instructions && (
                    <div>
                      <span className="text-white/70">Instructions: </span>
                      <span className="text-white font-medium">{order.instructions}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5" />
                Order Items
              </h3>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-yellow-400">x{item.quantity}</span>
                    </div>
                    <span className="text-green-400 font-bold">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-white text-2xl font-bold">Total Amount:</span>
                <span className="text-green-400 text-3xl font-bold">${order.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/order-tracking')}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Track Order
              </button>
              
              <button
                onClick={() => setShowRating(true)}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Rate Order
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                Order Again
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Modal */}
      {showRating && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-md w-full border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Rate Your Experience</h3>
            
            <div className="mb-4">
              <p className="text-white/70 mb-2">How would you rate your order?</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl transition-colors ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  >
                    <Star className="w-8 h-8" fill={star <= rating ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white/70 mb-2">Write a review (optional)</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Tell us about your experience..."
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 resize-none"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowRating(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitRating}
                disabled={rating === 0}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                Submit Rating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
