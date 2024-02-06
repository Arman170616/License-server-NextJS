import React from 'react';
import NavBar from '../../components/NavBar';
import DeviceForm from '@/components/DeviceForm';

const AddDevicePage: React.FC = () => {
  return (
    <div>
        <NavBar />
        {/* <h1 className="text-2xl font-bold mb-4">Add Device</h1> */}
        <DeviceForm />
    </div>
  );
};

export default AddDevicePage;