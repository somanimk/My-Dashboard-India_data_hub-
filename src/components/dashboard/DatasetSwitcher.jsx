import React from 'react';

const DatasetSwitcher = ({ onSwitch }) => {
  return (
    <div className="flex items-center mb-4">
      <label className="mr-2 text-gray-700">Select Dataset:</label>
      <select
        onChange={(e) => onSwitch(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="Default">Default Dataset</option>
        <option value="IMF">IMF Dataset</option>
      </select>
    </div>
  );
};

export default DatasetSwitcher;
