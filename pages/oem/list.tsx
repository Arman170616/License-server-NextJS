// pages/oem/list.tsx
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';

const ListPage: React.FC = () => {
  const [oemList, setOEMList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch('http://127.0.0.1:8000/oems/', {
        headers: {
          'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a'
        }
      });
        const data = await response.json();
        setOEMList(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(oemList.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(page);
    
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = oemList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <NavBar />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">OEM List</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/oem/add">Add OEM</a>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                OEM No.
              </th>
              <th scope="col" className="px-6 py-3">
                OEm Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Domain
              </th>
              <th scope="col" className="px-6 py-3">
                Licence
              </th>
              <th scope="col" className="px-6 py-3">
                OEM Info
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((oem: any) => (
              <tr key={oem.oem_no} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {oem.oem_no}
                </th>
                <td className="px-6 py-4">
                  {oem.oem_name}
                </td>
                <td className="px-6 py-4">
                  {oem.description}
                </td>
                <td className="px-6 py-4">
                  {oem.domain}
                </td>
                <td className="px-6 py-4">
                  {oem.licence}
                </td>
                <td className="px-6 py-4">
                  {oem.oem_info}
                </td>
                <td className="px-6 py-4">
                  {new Date(oem.created_at).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <a href={`/oem/${oem.oem_no}`} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {/* Pagination */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 border border-gray-300 rounded-md ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default ListPage;
