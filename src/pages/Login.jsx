import React from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { error, handleLogin } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login de Administrador</h2>
     
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Usuario</label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
   
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;