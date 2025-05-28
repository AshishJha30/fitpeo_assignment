import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { weekDays, octCalendar } from '../../data/calendarData';
import AppointmentCard from './AppointmentCard';
import { calendarAppointments } from '../../data/appointmentData';

const CalendarView: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">October 2021</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronLeft size={18} className="text-primary-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <ChevronRight size={18} className="text-primary-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        
        {octCalendar.map((day) => (
          <div 
            key={day.date}
            className={`calendar-cell ${day.isToday ? 'today' : ''} ${
              day.appointments.length > 0 ? 'has-appointments' : ''
            }`}
          >
            <div className={`text-lg mb-2 ${day.isToday ? 'font-bold text-primary-600' : ''}`}>
              {day.date}
            </div>
            
            {day.appointments.slice(0, 2).map((apt, index) => (
              <div 
                key={`${day.date}-${apt.time}`}
                className={`calendar-appointment ${apt.type}`}
              >
                {apt.time}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-8 space-y-4">
        {calendarAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;