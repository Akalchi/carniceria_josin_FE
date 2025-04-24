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

  <div className="w-full text-center text-[#4a6032] text-3xl leading-[30px] mb-8">
    Bienvenido, elija una opción
  </div>

  <div className="flex justify-center space-x-6">

    <button className="w-56 h-48 bg-[#eaa838] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg flex flex-col items-center justify-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
      <span className="text-white font-semibold text-lg">Ver inventario</span>
    </button>

    <button className="w-56 h-48 bg-[#eaa838] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg flex flex-col items-center justify-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
      <span className="text-white font-semibold text-lg">Usuarios</span>
    </button>

    <button className="w-56 h-48 bg-[#eaa838] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-lg flex flex-col items-center justify-center space-y-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
      <span className="text-white font-semibold text-lg">Gráficas</span>
    </button>
  </div>
</main>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;