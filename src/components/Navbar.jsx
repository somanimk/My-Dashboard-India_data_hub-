import React, { useState } from 'react';
import { FaSearch, FaDatabase, FaCalendarAlt, FaQuestionCircle, FaUserCircle, FaCaretDown } from 'react-icons/fa';

const Navbar = ({ onLogout, onDatasetSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDatasetSelect = (dataset) => {
    onDatasetSelect(dataset);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full bg-indigo-900 text-white flex items-center justify-between p-4 relative">
      {/* Logo and Search Bar */}
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold">India Data Hub</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for data and analytics"
            className="px-4 py-2 rounded bg-white text-black w-96"
          />
          <button className="absolute top-0 right-0 p-2">
            <FaSearch className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Options and User Profile */}
      <div className="flex items-center space-x-4">
        {/* Database Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-1">
            <FaDatabase className="mr-1" /> 
            <span>Database</span>
            <FaCaretDown /> {/* Down arrow icon */}
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48">
              <button
                onClick={() => handleDatasetSelect('DEFAULT')}
                className="block px-4 py-2 text-left w-full hover:bg-gray-200"
              >
                Default Dataset
              </button>
              <button
                onClick={() => handleDatasetSelect('IMF')}
                className="block px-4 py-2 text-left w-full hover:bg-gray-200"
              >
                IMF Dataset
              </button>
            </div>
          )}
        </div>
        <button className="flex items-center">
          <FaCalendarAlt className="mr-2" /> Calendar
        </button>
        <button className="flex items-center">
          <FaQuestionCircle className="mr-2" /> Help
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button onClick={onLogout} className="flex items-center">
            <FaUserCircle size={24} className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

