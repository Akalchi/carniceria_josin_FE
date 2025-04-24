import React from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaUserCircle } from "react-icons/fa"; 
import logo from '../assets/logo/logo.jpeg'; 

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header 
      className={`bg-[#4A6032] shadow-sm p-2 flex items-center transition-all duration-300 ${
        isSidebarOpen ? 'ml-[267px]' : 'ml-0'
      }`}
    >

      <button 
        onClick={toggleSidebar}
        className="mr-4 text-white focus:outline-none"
        aria-label={isSidebarOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isSidebarOpen ? (
          <IoClose className="w-8 h-8" /> 
        ) : (
          <IoMenu className="w-8 h-8" /> 
        )}
      </button>
      
      <div className="flex-grow flex">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-10 w-10 rounded-2xl"
        />
      </div>
      <div className="flex items-center justify-end">
        <FaUserCircle className="w-8 h-8 text-white" /> 
      </div>
    </header>
  );
}

export default Header;