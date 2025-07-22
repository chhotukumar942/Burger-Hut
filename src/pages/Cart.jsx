import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { updateQuantity, removeFromCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total, itemCount } = useSelector(state => state.cart);

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleCheckout = () => {
    if (items.length > 0) {
      navigate('/checkout');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12">
              <ShoppingCart className="w-24 h-24 mx-auto text-white/50 mb-6 animate-bounce" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your Cart is Empty</h2>
              <p className="text-white/70 mb-8 text-lg">Add some delicious burgers to get started!</p>
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 active:scale-95"
                >
                  <div className="flex items-center justify-center gap-3">
                    <ArrowLeft className="w-6 h-6" />
                    <span>Browse Menu</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              Shopping Cart
            </h1>
            <p className="text-white/70 text-lg">({itemCount} {itemCount === 1 ? 'item' : 'items'})</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 transform transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]" style={{animationDelay: `${index * 0.1}s`}}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl shadow-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
                        <p className="text-yellow-400 font-semibold text-lg">{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="w-12 text-center font-bold text-white text-lg bg-white/10 py-2 rounded-lg border border-white/20">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 transition-all duration-300 hover:scale-110"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                      <div className="hidden sm:block">
                        <span className="text-lg font-bold text-green-400">
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Delivery Fee</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Tax</span>
                    <span>${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span className="text-green-400">${(total + 2.99 + (total * 0.1)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white py-4 px-8 rounded-2xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 active:scale-95"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-2xl font-semibold border border-white/20 hover:border-white/40 transform transition-all duration-300 hover:scale-105 backdrop-blur-md active:scale-95"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
