import { useParams } from "react-router-dom";
import ProductData from "../data/ProductData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tost, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 1500);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addItem(product));
    showToast("Product Added!");
  };

  const { id } = useParams();
  const product = ProductData.find((p) => p.id === Number(id));

  if (!product) return <h1 className="p-10">Product Not Found</h1>;

  return (
    <div className="p-10 pt-20 flex flex-col items-center">

      {/* Toast */}
      {tost && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-xl shadow-lg z-50">
          {tost}
        </div>
      )}

      <img
        src={product.image}
        className="w-80 h-80 object-cover rounded-xl shadow-md"
        alt={product.name}
      />

      <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
      <p className="mt-2 text-gray-700 max-w-lg text-center">
        {product.description}
      </p>

      <h2 className="text-2xl mt-3 font-semibold">₹{product.price}</h2>

      <button
        onClick={(e) => handleAddToCart(e, product)}
        className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 font-display"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
