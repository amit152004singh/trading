import React from "react";
import PortfolioMetrics from "../components/PortfolioMetrics";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Portfolio Dashboard</h1>
      </header>
      <main className="p-6">
        <PortfolioMetrics />
      </main>
    </div>
  );
};

export default Dashboard;
