import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';

const AccountListPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/user/', {
          headers: {
            'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a'
          }
        });
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);




  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Account No
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Account Name
              </th>
              <th scope="col" className="px-6 py-3">
                Account Type
              </th>
              <th scope="col" className="px-6 py-3">
                Account Description
              </th>
              <th scope="col" className="px-6 py-3">
                OEM No
              </th>
              <th scope="col" className="px-6 py-3">
                Dealer No
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user: any) => (
              <tr key={user.AccountNo} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.AccountNo}
                </td>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {user.UserId}
                </td>
                <td className="px-6 py-4">
                  {user.AccountName}
                </td>
                <td className="px-6 py-4">
                  {user.AccountType}
                </td>
                <td className="px-6 py-4">
                  {user.AccountDesc}
                </td>
                <td className="px-6 py-4">
                  {user.OemNo}
                </td>
                <td className="px-6 py-4">
                  {user.DealerNo}
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

export default AccountListPage;
