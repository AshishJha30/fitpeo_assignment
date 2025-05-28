import React from 'react';
import { upcomingAppointments } from '../../data/appointmentData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule: React.FC = () => {
  // Group appointments by day
  const appointmentsByDay: Record<string, typeof upcomingAppointments> = {};
  
  upcomingAppointments.forEach(appointment => {
    if (!appointmentsByDay[appointment.day!]) {
      appointmentsByDay[appointment.day!] = [];
    }
    appointmentsByDay[appointment.day!].push(appointment);
  });

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-6">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        {Object.entries(appointmentsByDay).map(([day, appointments]) => (
          <div key={day}>
            <h3 className="text-sm font-medium text-gray-500 mb-3">On {day}</h3>
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <SimpleAppointmentCard 
                  key={appointment.id} 
                  appointment={appointment} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;