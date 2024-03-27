import React, { useState } from "react";

export default function BountyList({ bounty, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: bounty.firstName,
    lastName: bounty.lastName,
    living: bounty.living,
    amount: bounty.amount,
    type: bounty.type,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveClick = () => {
    onEdit(bounty._id, formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 text-gray-400 shadow-md rounded p-4 mb-2 ">
      <div className="flex items-center mb-2">
        <span className="text-4xl mr-4">{bounty.living ? "🖤" : "💀"}</span>
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="mb-2 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="mb-2 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <label className="block text-gray-700 mb-2">Living</label>
              <input
                type="checkbox"
                name="living"
                checked={formData.living}
                onChange={handleInputChange}
                className="mb-2"
              />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Bounty Amount"
                className="mb-2 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mb-4 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="Sith">Sith</option>
                <option value="Jedi">Jedi</option>
              </select>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-2">
                {bounty.firstName} {bounty.lastName}
              </h2>
              <p className="text-gray-500">Type: {bounty.type}</p>
              <p className="text-gray-500">Amount: ${bounty.amount}</p>
            </>
          )}
        </div>
      </div>
      <div className="flex">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(bounty._id)}
          className="bg-red-500 hover.bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
