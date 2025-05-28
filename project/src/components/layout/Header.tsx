import React from "react";
import { Search, Bell, Plus } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">
            <span className="text-teal-400">Health</span>
            <span className="text-gray-800">care.</span>
          </h1>
          <div className="hidden md:flex items-center relative ml-8">
            <Search className="absolute left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-50 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Bell className="text-gray-600" size={20} />
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center">
              <img
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="User profile"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>

          <button className="p-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
