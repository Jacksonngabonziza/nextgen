import React, { useState } from "react";

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // State to track submission success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmissionSuccess(true); // Set submission success state to true
    setTimeout(() => {
      onClose();
    }, 2000); // Close modal after 2 seconds
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.82)" }}>
      <div className="bg-white p-6 rounded-lg shadow-lg ml-80">
        <h2 className="text-2xl mb-4 font-semibold text-white-500">Book a Demo</h2>
        {!submissionSuccess ? ( // Show form if submission success is false
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-white-500">
              <label className="block text-sm font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white-500">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white-500">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Submit
              </button>
            </div>
          </form>
        ) : ( 
        <div className="text-center text-gray-800">
<p className="text-green-500 text-lg font-bold mb-2">Thank you! 😊 Our team will get back to you soon 👋</p>
{/* <p className="text-green-500 text-lg font-bold mb-2 flex items-center">
  <span>Thank you for reaching out!</span>
  <span className="ml-2" role="img" aria-label="Smile and wave">👋😊</span>
  <span className="ml-2">Our team will get back to you soon.</span>
</p> */}
      </div>
      
        )}
      </div>
    </div>
  );
};

export default Modal;
