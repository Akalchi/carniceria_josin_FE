import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar({ isSidebarOpen }) {
  return (
    <div
      className={`w-[267px] bg-white h-screen p-4 flex flex-col space-y-4 fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="text-[#4A6032] text-lg font-bold mb-4 text-center">
        Carnicería Josin
      </div>

      <button className="w-full h-9 flex items-center justify-center space-x-2 bg-[#4A6032] rounded-[5px] hover:bg-[#3a4d2f] transition-colors">
        <span className="text-white text-xs font-bold">Inicio</span>
      </button>

      <button className="w-full h-9 flex items-center justify-center space-x-2 bg-[#4A6032] rounded-[5px] hover:bg-[#3a4d2f] transition-colors">
        <span className="text-white text-xs font-bold">Escritorio</span>
      </button>

      <button className="w-full h-9 flex items-center justify-center space-x-2 bg-[#4A6032] rounded-[5px] hover:bg-[#3a4d2f] transition-colors">
        <span className="text-white text-xs font-bold">Gráficas y estadísticas</span>
      </button>

      <button className="w-full h-9 flex items-center justify-center space-x-2 bg-[#4A6032] rounded-[5px] hover:bg-[#3a4d2f] transition-colors">
        <span className="text-white text-xs font-bold">Usuarios</span>
      </button>


      <button className="w-full h-9 flex items-center justify-end space-x-2 bg-[#4A6032] rounded-[5px] hover:bg-[#3a4d2f] transition-colors">
        <span className="text-white text-xs font-bold">Salir</span>
      </button>
    </div>
  );
}

export default Sidebar;