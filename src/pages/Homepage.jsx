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
        <div className="w-[569px] h-12 text-center justify-center text-[#4a6032] text-3xl font-semibold font-['Inter'] leading-[30px]">Bienvenido, elija una opción</div>
        <button className="w-60 h-[252px] bg-[#eaa838] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" 
        
        />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;