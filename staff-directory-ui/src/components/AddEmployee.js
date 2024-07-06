import React, { useState } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useState();
  return (
    <div className="flex max-w-2xl mx-auto shadow-md border-b mt-10 bg-gray-100 rounded-lg">
      <div className="px-8 py-8 w-full">
        <div className="font-thin text-2xl tracking-wider mb-6 text-center">
          <h1 className="text-gray-800">Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName} //first name input field
            onChange={(e) => handleChange(e)}
            className="h-10 w-full border mt-2 px-2 py-2 rounded"
            placeholder="Enter employee's first name"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-full border mt-2 px-2 py-2 rounded"
            placeholder="Enter employee's last name"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-full border mt-2 px-2 py-2 rounded"
            placeholder="Enter employee's email"
          />
        </div>
        <div className="flex items-center justify-between h-14 w-full my-4 space-x-4 pt-4">
          <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-4">
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-4">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
