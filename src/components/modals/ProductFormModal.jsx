import React, { useState } from 'react';

function ProductFormModal({ isOpen, onClose, onAddProduct }) {
  const [product, setProduct] = useState({
    name: '', 
    category: '', 
    priceKg: 0, 
    stockKg: 0, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product); 
    setProduct({ name: '', category: '', priceKg: 0, stockKg: 0 }); 
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Añadir Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
          
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre del producto"
                value={product.name}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Categoría</label>
              <select
                name="category"
                value={product.category}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              >
                <option value="" disabled>Selecciona una categoría</option>
                <option value="CARNE">Carne</option>
                <option value="EMBUTIDO">Embutido</option>
                <option value="AVES">Aves</option>
                <option value="OTROS">Otros</option>
              </select>
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700">Precio por Kg</label>
              <input
                type="number"
                name="priceKg"
                placeholder="Precio por Kg"
                value={product.priceKg}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                step="0.01" 
                required
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700">Stock en Kg</label>
              <input
                type="number"
                name="stockKg"
                placeholder="Stock en Kg"
                value={product.stockKg}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#eaa838] text-white rounded"
            >
              Añadir Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductFormModal;