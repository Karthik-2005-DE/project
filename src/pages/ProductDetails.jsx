import { useParams } from "react-router-dom";
import ProductData from "../data/ProductData";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toast, setToast] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1500);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    dispatch(addItem(product));
    showToast("Product Added!");
  };

  const { id } = useParams();
  const product = ProductData.find((p) => p.id === Number(id));

  if (!product) return <h1 className="p-10">Product Not Found</h1>;

  return (
    <div className="px-4 sm:px-6 pt-24 pb-10 flex flex-col items-center text-center">

      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-xl shadow-lg z-50">
          {toast}
        </div>
      )}

      {/* Responsive Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-xl shadow-md"
      />

      {/* Name */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-4">{product.name}</h1>

      {/* Description */}
      <p className="mt-2 text-gray-700 max-w-sm sm:max-w-lg text-center text-sm sm:text-base">
        {product.description}
      </p>

      {/* Price */}
      <h2 className="text-xl sm:text-2xl mt-3 font-semibold text-amber-700">
        ₹{product.price}
      </h2>

      {/* Add to Cart Button */}
      <button
        onClick={(e) => handleAddToCart(e, product)}
        className="mt-5 px-6 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition font-semibold w-44 sm:w-auto"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
