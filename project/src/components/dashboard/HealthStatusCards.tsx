import React from 'react';
import { healthStatus } from '../../data/healthData';
import { FaTeeth as Tooth, FaLungs as Lungs} from 'react-icons/fa';
import {PiBoneDuotone as Bone} from 'react-icons/pi';

const HealthStatusCards: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'lungs':
        return <Lungs className="text-red-500" size={24} />;
      case 'teeth':
        return <Tooth className="text-teal-400" size={24} />;
      case 'bone':
        return <Bone className="text-orange-400" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {healthStatus.slice(1).map((item) => (
        <div key={item.id} className="p-4 bg-white rounded-lg border border-gray-100">
          <div className="flex items-center mb-2">
            {getIcon(item.id)}
            <h3 className="ml-2 text-lg font-medium">{item.name}</h3>
          </div>
          <div className="text-sm text-gray-500 mb-3">Date: {item.date}</div>
          <div className={`health-status-bar ${item.id}`}>
            <div className="progress" style={{ width: `${item.progress}%` }}></div>
          </div>
        </div>
      ))}
      
      <button className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium">
        <span>Details</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HealthStatusCards;