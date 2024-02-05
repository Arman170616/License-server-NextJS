// // components/NavBar.tsx
// import React, { useState } from 'react';
// import Link from 'next/link';

// const NavBar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">
//           <Link href="/">Home</Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           {/* Search Bar */}
//           <div className="relative hidden md:block">
//             <input type="text" placeholder="Search..." className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-blue-400" />
//             <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M15.293 13.293a1 1 0 1 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 1 1 1.414 1.414L12.414 10l2.879 2.879z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
//           {/* Profile/Login Option */}
//           <div className="text-white">
//             <a href="#" className="text-white">Login</a>
//           </div>
//         </div>
//         {/* Hamburger Menu for mobile */}
//         <div className="md:hidden">
//           <button className="text-white" onClick={toggleMenu}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M12 8a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1zm0 4a1 1 0 1 0 0-2H4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm3-7a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h10zM5 17a1 1 0 1 0 0-2h10a1 1 0 1 0 0 2H5z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <ul className="text-white">
//             <li>
//               <Link href="/oem/list">OEM List</Link>
//             </li>
//             <li>
//               <Link href="/oem-infos/list">OEM Infos List</Link>
//             </li>
//           </ul>
//         </div>
//       )}
//       {/* Desktop Menu */}
//       <div className="hidden md:flex space-x-4 text-white">
//         <Link href="/oem/list">OEM List</Link>
//         <Link href="/oem-infos/list">OEM Infos List</Link>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// components/NavBar.tsx
// import React from 'react';
// import Link from 'next/link';

// const NavBar: React.FC = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">
//           <Link href="/">Home</Link>
//         </div>
//         <ul className="flex space-x-4">
//           <li>
//             <Link href="/oem/list" className="text-white">OEM List</Link> 
            
//             <Link href="/oem-infos/list" className="text-white">OEM Infos List</Link>
//           </li>
          
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-green-500 text-lg">Sicunet</span>

              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {/* <a href="" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Home</a> */}
              <a href="/oem/list" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">OEM List</a>
              <a href="/accounts/list" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Account List</a>
              <a href="/oem-infos/list" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">OEM Infos List</a>
              <a href="/device/list" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Device List</a>
            </div>
          </div>
          {/* <div className="hidden md:flex items-center space-x-3">
            <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
            <a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
          </div> */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={isMobileMenuOpen ? "" : "hidden mobile-menu"}>
        <ul>
          <li className="active"><a href="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="/oem/list" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">OEM List</a></li>
          <li><a href="/accounts/list" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Account List</a></li>
          <li><a href="/oem-infos/list" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">OEM Infos List</a></li>
          <li><a href="/device/list" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Device List</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

