import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className={`flex flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[267px]' : 'ml-0'}`}>
       
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
          <h1 className="text-2xl font-bold">Bienvenido a MiApp</h1>
          <p>Este es el contenido principal de tu aplicación.</p>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;