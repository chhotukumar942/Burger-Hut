import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, Users, MapPin } from 'lucide-react';

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const { currentBooking } = useSelector(state => state.booking);

  useEffect(() => {
    if (!currentBooking) {
      navigate('/table-booking');
    }
  }, [currentBooking, navigate]);

  if (!currentBooking) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-6">Your table has been reserved successfully!</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">{new Date(currentBooking.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-gray-600">{currentBooking.time}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Guests</p>
                      <p className="text-gray-600">{currentBooking.guests} people</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">Table</p>
                      <p className="text-gray-600">Table {currentBooking.tableId} ({currentBooking.tableSeats} seats)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="font-medium">Booking ID:</span>
                  <span className="text-gray-600">{currentBooking.id.slice(0, 8)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-medium">Status:</span>
                  <span className="text-green-600 capitalize">{currentBooking.status}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Important Information</h4>
              <ul className="text-blue-600 text-sm space-y-1 text-left">
                <li>• Please arrive 10 minutes before your reservation time</li>
                <li>• Your table will be held for 15 minutes past reservation time</li>
                <li>• For groups of 6 or more, a 18% gratuity will be added</li>
                <li>• Cancellations must be made at least 2 hours in advance</li>
              </ul>
            </div>

            <div className="space-y-3 mb-8">
              <button
                onClick={() => navigate('/')}
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Back to Home
              </button>
              <button
                onClick={() => navigate('/menu')}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
              >
                Browse Menu
              </button>
            </div>

            <div className="text-sm text-gray-500">
              <p>A confirmation email has been sent to {currentBooking.email}</p>
              <p className="mt-2">Questions? Call us at (555) 123-BURGER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
