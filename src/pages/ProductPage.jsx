import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // <-- ADD THIS
import ProductData from "../data/ProductData";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";


const ProductPage = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const [tost, setToast] = useState("");
  const showToast = (msg) => {
    setToast (msg);
    setTimeout(() => setToast(""),1500 );
  };
  const handleAddToCart =(e, product) => {
    e.stopPropagation();
    dispatch(addItem(product));
    showToast("Product Added");
  };
   

  return (
   
    <div className="p-6">
      {tost && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-xl shadow-lg z-50" >
          {tost}
          </div>
      )
      }
     


      <h1 className="font-display text-2xl text-center mb-8">
        Your Favorite Food, Just a Tap Away
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProductData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}  // <-- FIXED
            className="cursor-pointer bg-white p-4 shadow-lg rounded-2xl hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h2 className="mt-3 font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
            <button onClick={(e) => handleAddToCart(e,item)} className="font-display border p-1 bg-amber-500 text-white rounded-xl hover:bg-amber-700" >add to cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage;
