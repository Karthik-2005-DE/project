import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductData from "../data/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(ProductData.map((p) => p.category))];

  // 🔥 Corrected addToCart with working stopPropagation + redirect
  const addToCart = (e, product) => {
    e.stopPropagation(); // prevents clicking card navigation
   

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    dispatch(addItem(product));
    alert("Item added to cart!");
  };

  const filteredProducts = ProductData.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="p-26">
      <h1 className="font-display text-2xl text-center mb-8">
        Your Favorite Food, Just a Tap Away
      </h1>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border shadow-sm transition
              ${
                selectedCategory === cat
                  ? "bg-amber-500 text-white border-amber-600"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="cursor-pointer bg-white p-4 shadow-lg rounded-2xl hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl"
            />

            <h2 className="mt-3 font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={(e) => addToCart(e, item)} // 👈 corrected order
              className="font-display mt-3 border p-1 bg-amber-500 text-white rounded-xl hover:bg-amber-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
