import React from 'react'
import  { useState } from "react";

const Client = () =>{

    const [cartItems, setCartItems] = useState([]);
  
  const handleAddProduct = () => {
    setCartItems([
      ...cartItems,
      { id: cartItems.length + 1, product: "", quantity: 1 },
    ]);
  };

  const handleProductChange = (index, event) => {
    const newCartItems = [...cartItems];
    newCartItems[index].product = event.target.value;
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (index, event) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = event.target.value;
    setCartItems(newCartItems);
  };

  const handleRemoveProduct = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

    return(


        <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Requirements Submission
          </h2>
          <form className="space-y-6">
            {/* Name and Email (Disabled Fields) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value="Roopa" // Example pre-filled data
                  disabled
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 text-gray-600 shadow-sm focus:ring-0 focus:border-gray-300 cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value="roo@example.com" // Example pre-filled data
                  disabled
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 text-gray-600 shadow-sm focus:ring-0 focus:border-gray-300 cursor-not-allowed"
                />
              </div>
            </div>
  
            {/* Contact and Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Enter contact name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
  
            {/* Add Products Section */}
            <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Product Category
            </label>
            
          </div>

          {/* Dynamic Cart Items */}
          <div className="space-y-4 mt-6">
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="w-3/4">
                  <select
                    value={item.product}
                    onChange={(event) => handleProductChange(index, event)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 mr-3"
                  >
                    <option value="">Select a product</option>
                    <option value="cement">Cement</option>
                    <option value="gravel">Gravel</option>
                    <option value="water">Water</option>
                    <option value="sandstones">Sandstones</option>
                    <option value="asphalt">Asphalt</option>
                    <option value="pop">Plaster of Paris</option>
                    <option value="clay">Clay</option>
                    <option value="slate">Slate</option>
                  </select>
                </div>
                <div className="flex items-center w-1/4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(event) => handleQuantityChange(index, event)}
                    placeholder="Qty"
                    className="mt-1 ml-4 block w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Add More Products Button */}
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleAddProduct}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add More Products
              </button>
            </div>
          </div>

  
            {/* Budget Field */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Maximum Budget
              </label>
              <input
                type="number"
                id="budget"
                placeholder="Enter your budget"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
  
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}
export default Client