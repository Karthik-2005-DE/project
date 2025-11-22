import React, { useState } from "react";
import ProductData from "../data/ProductData";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    

    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       <h1 className='font-display p-11 text-2xl flex justify-center  '>Your Favorite Food, Just a Tap Away</h1>

   
    {ProductData.map((item) => (   
        <div
          key={item.id}
          onClick={() => setSelectedProduct(item)}
          className="cursor-pointer bg-white p-4 shadow-lg rounded-2xl hover:scale-105 duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded-xl"
          />
          <h2 className="mt-3 font-semibold text-lg">{item.name}</h2>
          <p className="text-gray-600">${item.price}</p>
        </div>
      ))}

     
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-2xl p-5 relative animate-scaleIn">
  
         
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-2xl"
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-xl"
            />

            <h2 className="text-xl font-bold mt-4">{selectedProduct.name}</h2>

            <p className="text-gray-600 mt-2">
              {selectedProduct.description}
            </p>

            <p className="mt-3 font-semibold text-lg">
              Price: ${selectedProduct.price}
            </p>

            <button
           
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl"
            >
              Add to Cart
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductPage;   // Correct export
