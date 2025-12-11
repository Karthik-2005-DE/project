import React from "react";
import { Link } from "react-router-dom";

function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div className="p-18 text-center text-xl">
        You have no orders yet ❌
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-10">
      <h1 className="text-3xl font-bold text-center mb-6 p-5 ">Your Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border shadow-md p-5 rounded-xl"
          >
            <p><b>Order ID:</b> {order.id}</p>
            <p><b>Date:</b> {order.date}</p>
            <p><b>Total:</b> ₹{order.total}</p>

            {/* View Details Button */}
            <Link
              to={`/orders/${order.id}`}
              className="text-blue-600 underline font-semibold mt-3 inline-block"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
