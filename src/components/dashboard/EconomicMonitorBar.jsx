import React from 'react';
import { FaSave, FaFilter, FaShoppingCart, FaChartLine } from 'react-icons/fa';

const EconomicMonitorBar = ({ selectedCount, onFilterClick, onSaveClick }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <h2 className="text-lg font-semibold">Economic Monitor</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={onSaveClick}
          className="flex items-center px-3 py-2 rounded text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-800 transition"
        >
          <FaSave className="mr-2" /> Save
        </button>
        <button
          onClick={onFilterClick}
          className="flex items-center px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          <FaFilter className="mr-2" /> Filter
        </button>
        <div className="flex items-center text-gray-600">
          <FaShoppingCart className="mr-2" />
          <span>Selected ({selectedCount})</span>
        </div>
        <button className="flex items-center px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
          <FaChartLine className="mr-2" /> View Graph
        </button>
      </div>
    </div>
  );
};

export default EconomicMonitorBar;
