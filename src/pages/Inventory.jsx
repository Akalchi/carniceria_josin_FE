import React, { useState, useEffect } from 'react';
import { fetchProducts, createProduct, deleteProduct } from '../services/ProductService';
import ProductFormModal from '../components/modals/ProductFormModal.jsx'; 
import MainLayout from '../layouts/MainLayout'; 

function InventoryPage() {
  const [products, setProducts] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

 
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  
  const handleAddProduct = async (productData) => {
    try {
      await createProduct(productData); 
      const updatedProducts = await fetchProducts(); 
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  
  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id); 
      const updatedProducts = await fetchProducts(); 
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-3xl text-center text-[#4a6032] mb-8">Inventario</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-8 px-4 py-2 bg-[#eaa838] text-white rounded"
        >
          Añadir Producto
        </button>

        <div>
          <h2 className="text-xl font-semibold mb-4">Lista de Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Categoría: {product.category}</p>
                <p>Precio/Kg: {product.priceKg}€</p>
                <p>Cantidad: {product.stockKg} Kg</p>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>

        <ProductFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      </div>
    </MainLayout>
  );
}

export default InventoryPage;