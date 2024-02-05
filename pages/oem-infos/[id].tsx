// // pages/oem-infos/[id].tsx
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';


// const DetailPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [oemInfo, setOemInfo] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/oem-infos/${id}/`);
//         const data = await response.json();
//         setOemInfo(data);
//         console.log(data);
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     if (id) {
//       fetchData();
//     }
//   }, [id]);

//   if (!oemInfo) {
//     return <div>Loading...</div>;
//   }

//   return (


//   );
// };

// export default DetailPage;
