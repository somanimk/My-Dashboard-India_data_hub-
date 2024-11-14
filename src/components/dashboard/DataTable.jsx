import React, { useState } from 'react';
import { FaSave, FaThumbtack, FaEllipsisH } from 'react-icons/fa';

const DataTable = ({ items, onSave }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSave = (item) => {
    const isSelected = selectedItems.includes(item);
    const updatedSelection = isSelected
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedSelection);
    onSave(updatedSelection.length); // Update selected count in the Economic Monitor bar
  };

  return (
    <table className="w-full bg-white shadow-md rounded">
      <thead>
        <tr>
          <th className="p-2 border-b text-left">Title</th>
          <th className="p-2 border-b text-left">Range</th>
          <th className="p-2 border-b text-left">Unit</th>
          <th className="p-2 border-b text-left">Coverage</th>
          <th className="p-2 border-b text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx} className="hover:bg-gray-100">
            <td className="p-2 border-b">{item.title}</td>
            <td className="p-2 border-b">{item.range || 'N/A'}</td>
            <td className="p-2 border-b">{item.unit || 'N/A'}</td>
            <td className="p-2 border-b">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">S</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">R</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">N</span>
            </td>
            <td className="p-2 border-b">
              <div className="inline-flex space-x-2">
                <button
                  onClick={() => handleSave(item)}
                  className={`text-gray-500 hover:text-blue-600 ${selectedItems.includes(item) ? 'text-blue-600' : ''}`}
                >
                  <FaSave />
                </button>
                <button className="text-gray-500 hover:text-yellow-500">
                  <FaThumbtack />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEllipsisH />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
