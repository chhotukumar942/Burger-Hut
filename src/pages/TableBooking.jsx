import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { bookTable } from '../store/bookingSlice';

const TableBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { availableTables } = useSelector(state => state.booking);
  const { user, isAuthenticated } = useSelector(state => state.auth);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    tableId: null,
    specialRequests: ''
  });

  const [selectedTable, setSelectedTable] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTableSelect = (table) => {
    setSelectedTable(table);
    setFormData({
      ...formData,
      tableId: table.id
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedTable) {
      alert('Please select a table');
      return;
    }

    const bookingData = {
      ...formData,
      tableId: selectedTable.id,
      tableSeats: selectedTable.seats,
    };

    dispatch(bookTable(bookingData));
    navigate('/booking-confirmation');
  };

  const filteredTables = availableTables.filter(table => 
    table.available && table.seats >= parseInt(formData.guests)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Reserve a Table</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Booking Details</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5 Guests</option>
                      <option value={6}>6 Guests</option>
                      <option value={7}>7 Guests</option>
                      <option value={8}>8 Guests</option>
                    </select>
                  </div>
                </div>
                
                <textarea
                  name="specialRequests"
                  placeholder="Special requests or dietary requirements..."
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                
                <button
                  type="submit"
                  disabled={!selectedTable}
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {selectedTable ? 'Book Table' : 'Select a Table First'}
                </button>
              </form>
            </div>
            
            {/* Table Selection */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">Select a Table</h3>
              
              {filteredTables.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>No tables available for {formData.guests} guests.</p>
                  <p>Please try a different number of guests.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {filteredTables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() => handleTableSelect(table)}
                      className={`p-4 border-2 rounded-lg transition duration-300 ${
                        selectedTable?.id === table.id
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-yellow-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-gray-600" />
                        </div>
                        <h4 className="font-semibold">Table {table.id}</h4>
                        <p className="text-sm text-gray-600">{table.seats} seats</p>
                        <p className="text-xs text-green-600 mt-1">Available</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              {selectedTable && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Selected Table</h4>
                  <p className="text-yellow-700">
                    Table {selectedTable.id} - {selectedTable.seats} seats
                  </p>
                  <p className="text-sm text-yellow-600 mt-1">
                    Perfect for your party of {formData.guests}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Restaurant Info */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Restaurant Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">123 Burger Street, Food City, FC 12345</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <h4 className="font-semibold">Hours</h4>
                <p className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <h4 className="font-semibold">Capacity</h4>
                <p className="text-gray-600">Groups up to 8 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
