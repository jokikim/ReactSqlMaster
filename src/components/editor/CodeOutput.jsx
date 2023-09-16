import React, { useEffect, useState } from 'react'
import OutputSummary from './OutputSummary';
import Table from '../table/Table';

const CodeOutput = ({ isLoading, setSplitSize, data, runtime }) => {

  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableHeader, setTableHeader] = useState(null);
  const totalPages = data ? Math.ceil(data.length / resultsPerPage) : 0;
  
  useEffect(() => {
    if (data && data.length > 0) {
      setTableHeader(Object.values(data[0]));
    } else {
      // If data is null or empty, you can set an empty array or handle it accordingly
      setTableHeader([]);
    }
  }, [data]);
  
  
  
  const currentResults = data ? data.slice(1).slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage) : null;

  useEffect(() => {
    setCurrentPage(1);
  } ,[data])

  const handlePrevPage = () => {
    if(currentPage > 1) setCurrentPage(prev => prev - 1);
  }

  const handleNextPage = () => {
    if(currentPage < totalPages) setCurrentPage(prev => prev + 1);;
  }

  const handlePageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    // Ensure the entered page number is within the valid range
    if (value >= 1 && value <= totalPages) {
      setCurrentPage(value);
    }
  }; 

  const handleResultsPerPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setResultsPerPage(value);
    setCurrentPage(1); // Reset the current page when results per page changes
  };

  

  console.log({data})
  return (
    <>
      {
        data && !isLoading && (
          <OutputSummary 
          rowCount={data.length}
          runtime={runtime}
          handleResultsPerPageChange={handleResultsPerPageChange}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          data={data}
          setSplitSize={setSplitSize}
          resultsPerPage={currentResults.length}
          />
        )}

        <div className='h-full'>
          <Table 
          tableHeader={tableHeader}
          isLoading={isLoading}
          data={currentResults}
          currentPage={currentPage}
          resultsPerPage={resultsPerPage}
          />
        </div>
    </>
  )
}

export default CodeOutput
