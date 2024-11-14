import React from 'react';

const Sidebar = ({ categories }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 border-r h-full">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {Object.keys(categories).map((category, idx) => (
          <li key={idx} className="py-2 px-3 mb-1 text-gray-700 hover:bg-gray-200 rounded cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
