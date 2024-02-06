import React, { useState, useEffect } from 'react';


interface License {
    license_no: number;
    license_name: string;

  }

  interface OEMInfo {
    OemInfoNo: number;
    OemInfoName: string;

  }

const OEMForm: React.FC = () => {
  
  const initialFormData  = {
    oem_no: '',
    oem_name: '',
    description: '',
    domain: '',
    licence: '',
    oem_info: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [licenses, setLicenses] = useState<License[]>([]);
  const [oemInfo, setOemInfo] = useState<OEMInfo[]>([]);
  

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/licenses/create_and_list/', {
          headers: {
            'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setLicenses(data);
        } else {
          console.error('Failed to fetch licenses');
        }
      } catch (error) {
        console.error('Error fetching licenses:', error);
      }
    };

    const fetchOemInfo = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/oem-infos/', {
          headers: {
            'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setOemInfo(data);
        } else {
          console.error('Failed to fetch oem info');
        }
      } catch (error) {
        console.error('Error fetching oem info:', error);
      }
    };

    fetchLicenses();
    fetchOemInfo();

  }, []);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/oems/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token a1a88d8b5a8cbf119eefdb7a3040d28f7aa5d78a', // if authentication is required
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success, maybe show a success message or redirect the user
        console.log('OEM added successfully');
        // Clear form data after successful submission
        setFormData({
            oem_no: '',
            oem_name: '',
            description: '',
            domain: '',
            licence: '',
            oem_info: '',
        });
      } else {
        // Handle error, maybe show an error message
        console.error('Failed to add OEM');
      }
    } catch (error) {
      console.error('Error adding OEM:', error);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData); // Reset form data
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="oem_no" className="block text-sm font-medium text-gray-700">
            OEM No.
          </label>
          <input
            id="oem_no"
            name="oem_no"
            type="text"
            autoComplete="off"
            value={formData.oem_no}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter OEM No."
          />
        </div>
        <div>
          <label htmlFor="oem_name" className="block text-sm font-medium text-gray-700">
            OEM Name
          </label>
          <input
            id="oem_name"
            name="oem_name"
            type="text"
            autoComplete="off"
            value={formData.oem_name}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter OEM Name"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            autoComplete="off"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter Description"
          />
        </div>
        <div>
          <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
            Domain
          </label>
          <input
            id="domain"
            name="domain"
            type="text"
            autoComplete="off"
            value={formData.domain}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter Domain"
          />
        </div>
        {/* <div>
          <label htmlFor="licence" className="block text-sm font-medium text-gray-700">
            Licence
          </label>
          <input
            id="licence"
            name="licence"
            type="text"
            autoComplete="off"
            value={formData.licence}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter Licence"
          />
        </div> */}

        <div>
          <label htmlFor="licence" className="block text-sm font-medium text-gray-700">
            Licence
          </label>
          <select
            id="licence"
            name="licence"
            value={formData.licence}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          >
            <option value="">Select Licence</option>
            {licenses.map((license) => (
              <option key={license.license_no} value={license.license_no}>
                {license.license_name}
              </option>
            ))}
          </select>
        </div>
        {/* <div>
          <label htmlFor="oem_info" className="block text-sm font-medium text-gray-700">
            OEM-INFO
          </label>
          <input
            id="oem_info"
            name="oem_info"
            type="text"
            autoComplete="off"
            value={formData.oem_info}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter oem_info"
          />
        </div> */}

        <div>
          <label htmlFor="oem_info" className="block text-sm font-medium text-gray-700">
            OEM Info
          </label>
          <select
            id="oem_info"
            name="oem_info"
            value={formData.oem_info}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          >
            <option value="">Select OEM Info</option>
            {oemInfo.map((info) => (
              <option key={info.OemInfoNo} value={info.OemInfoNo}>
                {info.OemInfoName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
          >
            Add OEM
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default OEMForm;
