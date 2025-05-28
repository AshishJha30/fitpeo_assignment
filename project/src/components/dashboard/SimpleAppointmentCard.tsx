import React from 'react';
import { Heart, Eye, Edit, Brain } from 'lucide-react';
import { Appointment } from '../../data/appointmentData';

interface SimpleAppointmentCardProps {
  appointment: Appointment;
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.type) {
      case 'checkup':
        return <Edit size={18} className="text-red-500" />;
      case 'ophthalmologist':
        return <Eye size={18} className="text-blue-500" />;
      case 'cardiologist':
        return <Heart size={18} className="text-red-500" />;
      case 'neurologist':
        return <Brain size={18} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-purple-50 rounded-lg">
      <div className="flex justify-between">
        <div>
          <h4 className="font-medium text-gray-800">{appointment.title}</h4>
          <p className="text-sm text-gray-500 mt-1">{appointment.time}</p>
        </div>
        <div>
          {getIcon()}
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;