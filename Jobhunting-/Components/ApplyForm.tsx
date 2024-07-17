import React from 'react'
import { useState } from 'react';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    resume: null,
  });

  const handleChange = (e: {
      target: { name: any; value: any; files: any; }; preventDefault: () => void; 
}) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Apply For Job</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-2 border shadow-md border-gray-300 rounded-md"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-2 border shadow-md border-gray-300 rounded-md"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2 w-full p-2 border shadow-md border-gray-300 rounded-md"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="flex items-start justify-between text-xl font-semibold w-full p-3 border-[3px]  border-dotted  
    border-gray-300 rounded-[50px] text-gray-700 bg-white shadow-sm 
    hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3
    focus:border-blue-500 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Apply Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
