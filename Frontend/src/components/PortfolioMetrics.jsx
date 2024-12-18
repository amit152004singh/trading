import React, { useState } from "react";

const PortfolioMetrics = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: "AAPL", quantity: 10, value: 1500 },
    { id: 2, name: "GOOGL", quantity: 5, value: 2500 },
    { id: 3, name: "TSLA", quantity: 8, value: 3200 },
  ]);

  const handleEdit = (id) => {
    const stock = stocks.find((stock) => stock.id === id);
    const newQuantity = prompt(`Edit quantity for ${stock.name}:`, stock.quantity);
    if (newQuantity !== null) {
      setStocks((prevStocks) =>
        prevStocks.map((s) => (s.id === id ? { ...s, quantity: Number(newQuantity) } : s))
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      setStocks((prevStocks) => prevStocks.filter((stock) => stock.id !== id));
    }
  };

  const topPerformingStock = stocks.reduce((max, stock) => {
    const stockValue = stock.value * stock.quantity;
    return stockValue > (max.value * max.quantity) ? stock : max;
  }, stocks[0]);

  return (
    <div>
      {/* Total Portfolio Value */}
      <div className="bg-white p-6 shadow rounded-lg mb-4">
        <h2 className="text-sm font-medium text-gray-500">Total Portfolio Value</h2>
        <p className="text-3xl font-bold text-gray-800">
          ₹{stocks.reduce((acc, stock) => acc + stock.value * stock.quantity, 0).toLocaleString()}
        </p>
      </div>

      {/* Top-Performing Stock */}
      <div className="bg-white p-6 shadow rounded-lg mb-4">
        <h2 className="text-sm font-medium text-gray-500">Top-Performing Stock</h2>
        <p className="text-xl font-bold text-gray-800">
          {topPerformingStock.name} - ₹{(topPerformingStock.value * topPerformingStock.quantity).toLocaleString()}
        </p>
      </div>

      {/* Current Stock Holdings */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-sm font-medium text-gray-500 mb-4">Current Stock Holdings</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Value (₹)</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.id} className="border-b">
                <td className="px-6 py-4 text-sm text-gray-800">{stock.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{stock.quantity}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  ₹{(stock.value * stock.quantity).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <button
                    className="text-blue-500 hover:underline mr-4"
                    onClick={() => handleEdit(stock.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(stock.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioMetrics;
