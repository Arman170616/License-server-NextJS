import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';

const ListPage: React.FC = () => {
  const [devices, setDevices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/devices/', {
            headers: {
                'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a'
            }
        });
        const data = await response.json();
        setDevices(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const itemsPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(devices.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = devices.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">Device List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Device No
              </th>
              <th scope="col" className="px-6 py-3">
                Mac
              </th>
                <th scope="col" className="px-6 py-3">
                Ip Address
                </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Option
              </th>
              <th scope="col" className="px-6 py-3">
                OEM
              </th>
              <th scope="col" className="px-6 py-3">
                Camera
              </th>
              <th scope="col" className="px-6 py-3">
                Channel
              </th>
              <th scope="col" className="px-6 py-3">
                Lockset
              </th>
              <th scope="col" className="px-6 py-3">
                Intercom
              </th>
              <th scope="col" className="px-6 py-3">
                Subnode
              </th>
              <th scope="col" className="px-6 py-3">
                ContLock
              </th>
              <th scope="col" className="px-6 py-3">
                Expired
              </th>

              
            </tr>
          </thead>
          <tbody>
            {currentItems.map((device: any) => (
              <tr key={device.DeviceNo} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {device.DeviceNo}
                </td>
                <td className="px-6 py-4">
                  {device.Mac}
                </td>
                <td className="px-6 py-4">
                  {device.Address}
                </td>
                <td className="px-6 py-4">
                  {device.Product}
                </td>
                <td className="px-6 py-4">
                  {device.Model}
                </td>

                {/* <td className="px-6 py-4">
                  {device.Option}
                </td> */}
                <td className="px-6 py-4">
                  {device.Type}
                </td>
                <td className="px-6 py-4">
                  {device.Camera}
                </td>
                <td className="px-6 py-4">
                  {device.Channel}
                </td>
                <td className="px-6 py-4">
                  {device.Lockset}
                </td>
                <td className="px-6 py-4">
                  {device.Intercom}
                </td>
                <td className="px-6 py-4">
                  {device.Subnode}
                </td>
                <td className="px-6 py-4">
                  {device.ContLock}
                </td>
                <td className="px-6 py-4">
                  {device.Expired}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
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
