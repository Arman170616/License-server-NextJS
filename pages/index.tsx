import React from 'react';
import NavBar from '../components/NavBar';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <NavBar />

      {/* <h1>Welcome to License Server</h1> */}
      {/* <div className="container mx-auto"> */}
        <h1 className="text-2xl font-bold mb-4">Welcome to License Server</h1>
        <p>
          This is a simple license server application built with Django and
          Next.js. It is designed to demonstrate how to build a simple license
          server to manage OEMs and their licenses.
        </p>

    </div>
  );
};

export default HomePage;
