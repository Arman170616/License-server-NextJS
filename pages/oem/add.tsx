import React from 'react';
import NavBar from '../../components/NavBar';
import OEMForm from '../../components/OEMForm';

const AddOEMPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      {/* <h1 className="text-2xl font-bold mb-4">Add OEM</h1> */}
      <OEMForm />
    </div>
  );
};

export default AddOEMPage;
