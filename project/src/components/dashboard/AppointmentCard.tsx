import React from "react";
import { Appointment } from "../../data/appointmentData";
import { FaTeeth as Tooth } from "react-icons/fa";
import { PiBoneDuotone as Activity } from "react-icons/pi";

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.type) {
      case "dentist":
        return <Tooth className="text-white" size={20} />;
      case "physiotherapy":
        return <Activity className=" text-gray-800" size={20} />;
      default:
        return null;
    }
  };

  const getCardClass = () => {
    switch (appointment.type) {
      case "dentist":
        return "bg-primary-600";
      case "physiotherapy":
        return "bg-primary-200";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`p-4 rounded-lg ${getCardClass()}`}>
      <div className="flex items-start">
        <div className="mr-3">
          <div className="p-2 bg-white/20 rounded-md">{getIcon()}</div>
        </div>
        <div className="flex-1 text-white">
          <h3 className="font-medium">{appointment.title}</h3>
          <div className="mt-1 text-sm text-white/80">{appointment.time}</div>
          <div className="mt-2 text-sm font-medium">{appointment.doctor}</div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
