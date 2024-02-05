// pages/oem/list.tsx
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';

const ListPage: React.FC = () => {
  const [oemList, setOEMList] = useState([]);

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

  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">OEM List</h1>
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
              {/* <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {oemList.map((oem: any) => (
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
                {/* <td className="px-6 py-4">
                  {new Date(oem.updated_at).toLocaleString()}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPage;
