import React, { useState, useEffect } from 'react';

interface Device {
    DeviceNo: number;
    Mac: string;
    Product: number;
    Model: number;
    Type: number;
    Options: string;
    Camera: number;
    Channel: number;
    Lockset: number;
    Facegate: number;
    Subnode: number;
    ContLock: number;
    Intercom: number;
    LicenseKey: string;
    Expired: number;
    FirstName: string;
    LastName: string;
    Company: string;
    Email: string;
    Phone: string;
    Address: string;
    InstallType: string;
    Suggestion: string;
    created_at: string;
    updated_at: string;
    OemNo: number;
  }


  const DeviceForm: React.FC = () => {
    const initialFormData: Device = {
      DeviceNo: 0,
      Mac: '',
      Product: 0,
      Model: 0,
      Type: 0,
      Options: '',
      Camera: 0,
      Channel: 0,
      Lockset: 0,
      Facegate: 0,
      Subnode: 0,
      ContLock: 0,
      Intercom: 0,
      LicenseKey: '',
      Expired: 0,
      FirstName: '',
      LastName: '',
      Company: '',
      Email: '',
      Phone: '',
      Address: '',
      InstallType: '',
      Suggestion: '',
      created_at: '',
      updated_at: '',
      OemNo: 0,
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch('http://127.0.0.1:8000/devices/create/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a', 
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            console.log('Device added successfully');
            setFormData(initialFormData);
          } else {
            console.error('Failed to add device');
          }
        } catch (error) {
          console.error('Error adding device:', error);
        }
      };

      return (
        <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-500 dark:text-white">Add a new Device</h2>
          <div className="max-w-md mx-auto mt-5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="Mac" className="block text-sm font-medium text-gray-700">
                    Mac
                    </label>
                    <input
                    id="Mac"
                    name="Mac"
                    type="text"
                    autoComplete="off"
                    value={formData.Mac}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                    placeholder="Enter Mac Address"
                    />
                </div>

                <div>
                    <label htmlFor="Model" className="block text-sm font-medium text-gray-700">
                    Model
                    </label>
                    <input
                    id="Model"
                    name="Model"
                    type="number"
                    autoComplete="off"
                    value={formData.Model}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                    placeholder="Enter Model"
                    />
                </div>
                <div>
                    <label htmlFor="OemNo" className="block text-sm font-medium text-gray-700">
                    OemNo
                    </label>
                    <input
                    id="OemNo"
                    name="OemNo"
                    type="number"
                    autoComplete="off"
                    value={formData.OemNo}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                    placeholder="Enter OemNo"
                    />
                </div>
                <div>
                    <label htmlFor="LicenseKey" className="block text-sm font-medium text-gray-700">
                    License Key
                    </label>
                    <input
                    id="LicenseKey"
                    name="LicenseKey"
                    type="text"
                    autoComplete="off"
                    value={formData.LicenseKey}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                    placeholder="Enter License Key"
                    />
                </div>
            </div>
              {/* Add more input fields for other device properties */}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
                >
                  Add Device
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(initialFormData)}
                  className="w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      );
    };
    
    export default DeviceForm;