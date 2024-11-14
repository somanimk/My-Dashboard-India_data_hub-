import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import DataTable from '../components/dashboard/DataTable';
import EconomicMonitorBar from '../components/dashboard/EconomicMonitorBar';
import ReactPaginate from 'react-paginate';
import response1 from '../data/response1.json';
import response2 from '../data/response2.json';

const DashboardPage = () => {
  const [data, setData] = useState(response1);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [selectedCount, setSelectedCount] = useState(0);
  const navigate = useNavigate();

  // Handle dataset switching
  const handleDatasetSelect = (dataset) => {
    setData(dataset === 'IMF' ? response2 : response1);
    setCurrentPage(0); // Reset to the first page on dataset switch
    setSelectedCount(0); // Reset selected count when switching datasets
  };

  // Handle page click for pagination
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the records to display based on pagination
  const paginatedData = data.frequent.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Handle logout
  const handleLogout = () => {
    navigate('/'); // Redirect to login page
  };

  // Update selected count when an item is saved
  const handleSaveClick = () => {
    setSelectedCount(selectedCount + 1); // Increment count on save
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar onLogout={handleLogout} onDatasetSelect={handleDatasetSelect} />
      <EconomicMonitorBar
        selectedCount={selectedCount}
        onFilterClick={() => console.log('Filter clicked')}
        onSaveClick={handleSaveClick}
      />
      <div className="flex">
        <Sidebar categories={data.categories} />
        <div className="flex-1 p-4">
          <DataTable items={paginatedData} onSave={handleSaveClick} /> {/* Pass onSave as prop */}
          
          {/* Pagination Component */}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(data.frequent.length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex justify-center mt-4"}
            activeClassName={"active text-blue-500 font-bold"}
            pageClassName={"px-2 py-1 rounded border border-gray-300 mx-1 hover:bg-gray-200"}
            previousClassName={"px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"}
            nextClassName={"px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"}
            disabledClassName={"opacity-50 cursor-not-allowed"}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
