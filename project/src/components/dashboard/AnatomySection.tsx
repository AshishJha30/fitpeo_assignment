import React from "react";
import { anatomyIndicators } from "../../data/healthData";

const AnatomySection: React.FC = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <div className="relative w-64 h-full flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?uid=R107712592&ga=GA1.1.184619940.1748376696&w=740"
          alt="Human anatomy"
          className="max-h-full object-contain"
        />

        {/* Health indicators */}
        <div
          className="health-indicator absolute bg-primary-600 text-white px-3 py-1 rounded-md text-sm"
          style={{ top: "32%", left: "50%" }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-red-300">❤️</span>
            <span>Healthy Heart</span>
          </div>
        </div>

        <div
          className="health-indicator absolute bg-teal-400 text-white px-3 py-1 rounded-md text-sm"
          style={{ top: "70%", left: "40%" }}
        >
          <div className="flex items-center space-x-2">
            <span>🦵</span>
            <span>Healthy Leg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
