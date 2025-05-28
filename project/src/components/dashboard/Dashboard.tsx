import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">This Week</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1">
                <AnatomySection />
              </div>
              <div className="mt-6 md:mt-0 md:w-64">
                <HealthStatusCards />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6">
            <ActivityFeed />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            <CalendarView />
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-6">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;