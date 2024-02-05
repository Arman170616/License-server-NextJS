// import React, { useEffect, useState } from 'react';
// import NavBar from '../../components/NavBar';

// const ListPage: React.FC = () => {
//   const [oemInfos, setOemInfos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/oem-infos/', {
//           headers: {
//             'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a'
//           }
//         });
//         const data = await response.json();
//         setOemInfos(data);
//         console.log(data);
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <NavBar />
//       <h1 className="text-2xl font-bold mb-4">OEM Infos List</h1>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 OEM Info No
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 OEM Info Name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 OEM Info Description
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {oemInfos.map((oemInfo: any) => (
//               <tr key={oemInfo.OemInfoNo} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   {oemInfo.OemInfoNo}
//                 </td>
//                 <td className="px-6 py-4">
//                   {oemInfo.OemInfoName}
//                 </td>
//                 <td className="px-6 py-4">
//                   {oemInfo.OemInfoDesc}
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // export default ListPage;


import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';

const ListPage: React.FC = () => {
  const [oemInfos, setOemInfos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/oem-infos/', {
          headers: {
            'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a'
          }
        });
        const data = await response.json();
        setOemInfos(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(oemInfos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = oemInfos.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">OEM Infos List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                OEM Info No
              </th>
              <th scope="col" className="px-6 py-3">
                OEM Info Name
              </th>
              <th scope="col" className="px-6 py-3">
                OEM Info Description
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((oemInfo: any) => (
              <tr key={oemInfo.OemInfoNo} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {oemInfo.OemInfoNo}
                </td>
                <td className="px-6 py-4">
                  {oemInfo.OemInfoName}
                </td>
                <td className="px-6 py-4">
                  {oemInfo.OemInfoDesc}
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
