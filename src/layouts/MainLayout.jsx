// components/Layout.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <Header />

      <main className="flex-grow">
        {children} 
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;