import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Calendar, DollarSign, Package, Star, Eye, Repeat2, Download, ArrowLeft, Clock, MapPin } from 'lucide-react';
import { addToCart } from '../store/cartSlice';

const OrderHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.order);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock orders for demonstration
  const mockOrders = orders.length === 0 ? [
    {
      id: `ORD-${Date.now() - 86400000}`,
      items: [
        { id: 1, name: "Classic Burger", price: "$8.99", quantity: 2, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
        { id: 2, name: "Cheese Burger", price: "$9.99", quantity: 1, imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" }
      ],
      total: 27.97,
      status: 'delivered',
      orderType: 'delivery',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      customerInfo: {
        name: "John Doe",
        address: "123 Main Street, City, State 12345"
      },
      rating: 5
    },
    {
      id: `ORD-${Date.now() - 172800000}`,
      items: [
        { id: 3, name: "Bacon Burger", price: "$10.99", quantity: 1, imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop" },
        { id: 5, name: "Veggie Burger", price: "$7.99", quantity: 1, imageUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop" }
      ],
      total: 21.97,
      status: 'delivered',
      orderType: 'pickup',
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      customerInfo: {
        name: "John Doe",
        address: "456 Oak Avenue, City, State 12345"
      },
      rating: 4
    },
    {
      id: `ORD-${Date.now() - 259200000}`,
      items: [
        { id: 4, name: "Double Burger", price: "$12.99", quantity: 1, imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" }
      ],
      total: 15.98,
      status: 'cancelled',
      orderType: 'delivery',
      createdAt: new Date(Date.now() - 259200000).toISOString(),
      customerInfo: {
        name: "John Doe",
        address: "789 Pine Street, City, State 12345"
      }
    }
  ] : orders;

  useEffect(() => {
    let filtered = [...mockOrders];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    // Date filter
    if (dateFilter !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateFilter) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          filtered = filtered.filter(order => 
            new Date(order.createdAt) >= filterDate
          );
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          filtered = filtered.filter(order => 
            new Date(order.createdAt) >= filterDate
          );
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          filtered = filtered.filter(order => 
            new Date(order.createdAt) >= filterDate
          );
          break;
      }
    }

    // Sort orders
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'highest':
          return b.total - a.total;
        case 'lowest':
          return a.total - b.total;
        default:
          return 0;
      }
    });

    setFilteredOrders(filtered);
  }, [mockOrders, searchTerm, statusFilter, dateFilter, sortBy]);

  const handleViewOrder = (orderId) => {
    navigate(`/order-details/${orderId}`);
  };

  const handleReorder = (order) => {
    // Add items to cart and navigate to cart
    order.items.forEach(item => {
      dispatch(addToCart(item));
    });
    navigate('/cart');
  };

  const exportOrderHistory = () => {
    const exportData = filteredOrders.map(order => ({
      orderId: order.id.slice(0, 8),
      date: new Date(order.createdAt).toLocaleDateString(),
      items: order.items.map(item => `${item.name} x${item.quantity}`).join(', '),
      total: order.total,
      status: order.status,
      type: order.orderType
    }));

    const csv = [
      ['Order ID', 'Date', 'Items', 'Total', 'Status', 'Type'],
      ...exportData.map(order => [
        order.orderId,
        order.date,
        order.items,
        `$${order.total.toFixed(2)}`,
        order.status,
        order.type
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'order-history.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'text-blue-400 bg-blue-500/20 border-blue-400/30';
      case 'preparing':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30';
      case 'ready':
      case 'out-for-delivery':
        return 'text-orange-400 bg-orange-500/20 border-orange-400/30';
      case 'delivered':
        return 'text-green-400 bg-green-500/20 border-green-400/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-400/30';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <Package className="w-16 h-16 mx-auto mb-4 text-white/50" />
            <h2 className="text-2xl font-bold text-white mb-2">No Order History</h2>
            <p className="text-white/70 mb-6">You haven't placed any orders yet.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Ordering
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              Order History
            </h1>
            <p className="text-white/70">Track and manage all your past orders</p>
          </div>

          {/* Filters */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all" className="bg-slate-800">All Status</option>
                <option value="confirmed" className="bg-slate-800">Confirmed</option>
                <option value="preparing" className="bg-slate-800">Preparing</option>
                <option value="ready" className="bg-slate-800">Ready</option>
                <option value="delivered" className="bg-slate-800">Delivered</option>
              </select>

              {/* Date Filter */}
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all" className="bg-slate-800">All Time</option>
                <option value="today" className="bg-slate-800">Today</option>
                <option value="week" className="bg-slate-800">This Week</option>
                <option value="month" className="bg-slate-800">This Month</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="newest" className="bg-slate-800">Newest First</option>
                <option value="oldest" className="bg-slate-800">Oldest First</option>
                <option value="highest" className="bg-slate-800">Highest Amount</option>
                <option value="lowest" className="bg-slate-800">Lowest Amount</option>
              </select>
            </div>

            {/* Export Button */}
            <div className="flex justify-between items-center">
              <p className="text-white/70">
                Showing {filteredOrders.length} of {orders.length} orders
              </p>
              <button
                onClick={exportOrderHistory}
                className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg border border-blue-400/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Order Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        Order #{order.id.slice(0, 8)}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        ${order.total.toFixed(2)}
                      </span>
                    </div>

                    {/* Order Items Preview */}
                    <div className="flex flex-wrap gap-2">
                      {order.items.slice(0, 3).map((item, index) => (
                        <span
                          key={index}
                          className="bg-white/5 px-2 py-1 rounded-lg text-sm text-white/80"
                        >
                          {item.name} x{item.quantity}
                        </span>
                      ))}
                      {order.items.length > 3 && (
                        <span className="bg-white/5 px-2 py-1 rounded-lg text-sm text-white/80">
                          +{order.items.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleViewOrder(order.id)}
                      className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg border border-blue-400/30 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    
                    <button
                      onClick={() => handleReorder(order)}
                      className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg border border-green-400/30 transition-colors"
                    >
                      <Repeat2 className="w-4 h-4" />
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOrders.length === 0 && orders.length > 0 && (
            <div className="text-center py-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
                <Filter className="w-16 h-16 mx-auto mb-4 text-white/50" />
                <h3 className="text-xl font-semibold text-white mb-2">No Orders Found</h3>
                <p className="text-white/70">Try adjusting your filters to see more orders.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
