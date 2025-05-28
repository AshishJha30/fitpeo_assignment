import React from 'react';
import { activityData } from '../../data/calendarData';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityFeed: React.FC = () => {
  const { weekData, totalAppointments } = activityData;

  // Custom bar chart instead of using Chart.js for visual fidelity
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <div className="text-sm text-gray-500">
          {totalAppointments} appointment on this week
        </div>
      </div>
      
      <div className="h-64 flex items-end justify-between">
        {weekData.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-48 flex items-end space-x-1">
              {Array.from({ length: day.primary }).map((_, i) => (
                <div 
                  key={`p-${i}`} 
                  className="activity-bar primary" 
                  style={{ height: `${Math.random() * 40 + 40}px` }}
                ></div>
              ))}
              
              {Array.from({ length: day.secondary }).map((_, i) => (
                <div 
                  key={`s-${i}`} 
                  className="activity-bar secondary" 
                  style={{ height: `${Math.random() * 30 + 20}px` }}
                ></div>
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-500">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;