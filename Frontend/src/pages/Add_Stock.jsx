import React, { useState } from "react";

const Add_Stock = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    stockName: initialData.stockName || "",
    ticker: initialData.ticker || "",
    quantity: initialData.quantity || "",
    buyPrice: initialData.buyPrice || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {initialData.stockName ? "Edit Stock" : "Add Stock"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="stockName"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Stock Name
          </label>
          <input
            type="text"
            id="stockName"
            name="stockName"
            value={formData.stockName}
            onChange={handleChange}
            placeholder="Enter stock name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ticker"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Ticker
          </label>
          <input
            type="text"
            id="ticker"
            name="ticker"
            value={formData.ticker}
            onChange={handleChange}
            placeholder="Enter ticker symbol"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="buyPrice"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Buy Price
          </label>
          <input
            type="number"
            id="buyPrice"
            name="buyPrice"
            value={formData.buyPrice}
            onChange={handleChange}
            placeholder="Enter buy price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {initialData.stockName ? "Update Stock" : "Add Stock"}
        </button>
      </form>
    </div>
  );
};

export default Add_Stock;
