import React from "react";
import { useParams, Link } from "react-router-dom";

function OrderDetail() {
  const { id } = useParams();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Find order by ID
  const order = orders.find((o) => o.id === Number(id));

  if (!order) {
    return (
      <div className="p-10 text-center text-xl">
        Order not found ❌  
        <br />
        <Link to="/orders" className="text-blue-600 underline">
          Go Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center mb-6 p-7">
        Order Details
      </h1>

      {/* Order Info Box */}
      <div className="bg-white shadow-md p-6 rounded-xl">
        <p><b>Order ID:</b> {order.id}</p>
        <p><b>Date:</b> {order.date}</p>
        <p><b>Status:</b> {order.status || "Pending"}</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">Items</h2>

        {/* Items List */}
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b pb-4 mb-4 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}

        {/* Total */}
        <h2 className="text-2xl font-bold text-right mt-6">
          Total: ₹{order.total}
        </h2>

        <div className="mt-5 text-center">
          <Link
            to="/orders"
            className="text-blue-600 underline text-lg"
          >
            ← Back to Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
