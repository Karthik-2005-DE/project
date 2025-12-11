

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
const handlePurchase = () => {
  if (!isLoggedIn) {
    navigate("/login");
    return;
  }

  // Create new order
  const newOrder = {
    id: Date.now(),
    items: cartItems,
    total: totalAmount,
    date: new Date().toLocaleString(),
  };

  // Get all orders from localStorage
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // Add new order to array
  existingOrders.push(newOrder);

  // Save back to localStorage
  localStorage.setItem("orders", JSON.stringify(existingOrders));

  dispatch(clearCart());

  // Redirect to order history page
  navigate("/orders");
};


  return (
    <div className="p-6 sm:p-12">
      <h1 className="text-3xl font-display font-bold mb-8 text-center p-10">
        Your Cart
      </h1>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <h2 className="text-xl text-center text-gray-600">
          Your cart is empty 🛒
        </h2>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>

                  {/* Quantity Buttons */}
                  <div className="flex items-center mt-2 gap-3">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-3 py-1 bg-gray-200 text-lg rounded-lg"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-3 py-1 bg-gray-200 text-lg rounded-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="mt-3 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Purchase */}
          <div className="text-center mt-10">
            <h2 className="text-2xl font-bold">Total: ₹{totalAmount}</h2>

            <button
              onClick={handlePurchase}
              className="mt-4 px-8 py-3 bg-amber-500 text-white rounded-2xl text-lg hover:bg-amber-600 shadow-lg"
            >
              Purchase
            </button>
          </div>
        </>
      )}
    </div>
  );
}
