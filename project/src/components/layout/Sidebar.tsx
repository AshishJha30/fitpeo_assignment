import React from 'react';
import { generalLinks, moreLinks } from '../../data/navigationLinks';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-semibold">
            <span className="text-teal-400">Health</span>
            <span className="text-gray-800">care.</span>
          </h2>
        </div>
        
        <nav className="flex-1 px-4 pb-4">
          <div className="mb-8">
            <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              General
            </h3>
            <ul className="space-y-1">
              {generalLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href="#"
                    className={`sidebar-link ${link.isActive ? 'active' : ''}`}
                  >
                    <link.icon size={20} />
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              More
            </h3>
            <ul className="space-y-1">
              {moreLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href="#"
                    className={`sidebar-link ${link.isActive ? 'active' : ''}`}
                  >
                    <link.icon size={20} />
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;