import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import ProductData from "../data/ProductData";

export default function AdminPanel() {
  const { isAdminLogged, currentAdmin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [products, setProducts] = useState(ProductData);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (!isAdminLogged) navigate("/admin-login");
  }, [isAdminLogged, navigate]);

  const stats = useMemo(() => {
    const totalProducts = products.length;
    const avgPrice =
      products.reduce((acc, p) => acc + Number(p.price || 0), 0) /
      (totalProducts || 1);
    const categories = new Set(products.map((p) => p.category));
    return {
      totalProducts,
      avgPrice: avgPrice.toFixed(2),
      totalCategories: categories.size,
    };
  }, [products]);

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
    });
    setEditingId(null);
  };

  const handleSaveProduct = () => {
    if (!form.name || !form.price || !form.category) {
      alert("Name, price, and category are required");
      return;
    }

    if (editingId) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...p, ...form, price: Number(form.price) } : p
        )
      );
    } else {
      const newId =
        products.length > 0
          ? Math.max(...products.map((p) => p.id)) + 1
          : 1;
      setProducts((prev) => [
        ...prev,
        { ...form, id: newId, price: Number(form.price) },
      ]);
    }

    resetForm();
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
    });
    setActiveTab("products");
    setSidebarOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const logoutNow = () => {
    dispatch(adminLogout());
    navigate("/admin-login");
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-slate-300 z-[9999]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Hamburger Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-orange-400 z-[10000]"
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <h1 className="text-lg font-semibold text-slate-800">Admin Panel</h1>

          <button
            onClick={logoutNow}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="pt-16 max-w-5xl mx-auto px-3 sm:px-6 flex">

        {/* MAIN CONTENT */}
        <main className="flex-1 pb-8">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <section className="mt-6">
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                Dashboard
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-xs text-slate-500">Total Products</p>
                  <p className="text-2xl font-semibold text-slate-800">
                    {stats.totalProducts}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-xs text-slate-500">Average Price</p>
                  <p className="text-2xl font-semibold text-slate-800">
                    ₹{stats.avgPrice}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-3">
                  <p className="text-xs text-slate-500">Categories</p>
                  <p className="text-2xl font-semibold text-slate-800">
                    {stats.totalCategories}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* PRODUCTS PAGE */}
          {activeTab === "products" && (
            <section className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingId ? "Edit Product" : "Add Product"}
                </h2>

                {editingId && (
                  <button
                    onClick={resetForm}
                    className="text-sm text-slate-600 hover:underline"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              {/* FORM */}
              <div className="bg-white rounded-lg shadow-sm p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-slate-200 rounded-md px-3 py-2 text-sm"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    className="border border-slate-200 rounded-md px-3 py-2 text-sm"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="border border-slate-200 rounded-md px-3 py-2 text-sm"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="border border-slate-200 rounded-md px-3 py-2 text-sm"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  />

                  <textarea
                    placeholder="Description"
                    className="border border-slate-200 rounded-md px-3 py-2 text-sm md:col-span-2 resize-none min-h-[80px]"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleSaveProduct}
                    className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md"
                  >
                    {editingId ? "Update Product" : "Add Product"}
                  </button>

                  {editingId && (
                    <button
                      onClick={resetForm}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* PRODUCT LIST TABLE */}
              <div className="bg-white rounded-lg shadow-sm p-3 overflow-x-auto">
                <h3 className="text-lg font-semibold mb-2">Product List</h3>

                <table className="min-w-[600px] w-full text-sm">
                  <thead>
                    <tr className="text-slate-600 text-left">
                      <th className="px-3 py-2">ID</th>
                      <th className="px-3 py-2">Name</th>
                      <th className="px-3 py-2">Price</th>
                      <th className="px-3 py-2">Category</th>
                      <th className="px-3 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id} className="border-t">
                        <td className="px-3 py-2">{p.id}</td>
                        <td className="px-3 py-2">{p.name}</td>
                        <td className="px-3 py-2">₹{p.price}</td>
                        <td className="px-3 py-2">{p.category}</td>

                        <td className="px-3 py-2 flex gap-2">
                          <button
                            onClick={() => handleEdit(p)}
                            className="text-blue-600 hover:underline"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(p.id)}
                            className="text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}

                    {products.length === 0 && (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center py-4 text-slate-500"
                        >
                          No products available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ORDERS PAGE */}
          {activeTab === "orders" && (
            <section className="mt-6">
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                Orders
              </h2>

              {orders.length === 0 ? (
                <p className="text-slate-600">No orders found ❌</p>
              ) : (
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-white rounded-lg shadow-sm p-3"
                    >
                      <div className="flex justify-between gap-2">
                        <div className="text-sm">
                          <p><b>ID:</b> {order.id}</p>
                          <p><b>Date:</b> {order.date}</p>
                          <p><b>Total:</b> ₹{order.total}</p>
                        </div>

                        <select
                          className="border rounded-md px-2 py-1 text-sm"
                          value={order.status || "Pending"}
                          onChange={(e) => {
                            const updated = orders.map((o) =>
                              o.id === order.id
                                ? { ...o, status: e.target.value }
                                : o
                            );
                            localStorage.setItem(
                              "orders",
                              JSON.stringify(updated)
                            );
                            window.location.reload();
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>

                      <hr className="my-2" />

                      <h3 className="font-semibold mb-2">Items</h3>

                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3"
                        >
                          <img
                            src={item.image}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div className="text-sm">
                            <p className="font-medium">{item.name}</p>
                            <p>
                              Price: ₹{item.price} • Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </main>

        {/* DESKTOP FIXED SIDEBAR (Right Side) */}
        <aside className="hidden md:block md:w-64 md:ml-6">
          <div className="sticky top-20 bg-white border rounded-lg shadow-sm p-3">
            <h3 className="font-semibold mb-3">Menu</h3>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`text-left px-3 py-2 rounded-md text-sm ${
                  activeTab === "dashboard"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                Dashboard
              </button>

              <button
                onClick={() => setActiveTab("products")}
                className={`text-left px-3 py-2 rounded-md text-sm ${
                  activeTab === "products"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                Products
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`text-left px-3 py-2 rounded-md text-sm ${
                  activeTab === "orders"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                Orders
              </button>

              <button
                onClick={logoutNow}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-md mt-2"
              >
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* MOBILE RIGHT-SIDE DRAWER */}
        <div
          className={`fixed inset-0 z-[9998] md:hidden ${
            sidebarOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setSidebarOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-[78%] max-w-xs bg-white shadow-xl transform transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Menu</h3>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <svg
                    className="w-6 h-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setActiveTab("dashboard");
                    setSidebarOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md text-sm ${
                    activeTab === "dashboard"
                      ? "bg-orange-500 text-white"
                      : "hover:bg-slate-100"
                  }`}
                >
                  Dashboard
                </button>

                <button
                  onClick={() => {
                    setActiveTab("products");
                    setSidebarOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md text-sm ${
                    activeTab === "products"
                      ? "bg-orange-500 text-white"
                      : "hover:bg-slate-100"
                  }`}
                >
                  Products
                </button>

                <button
                  onClick={() => {
                    setActiveTab("orders");
                    setSidebarOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md text-sm ${
                    activeTab === "orders"
                      ? "bg-orange-500 text-white"
                      : "hover:bg-slate-100"
                  }`}
                >
                  Orders
                </button>

                <button
                  onClick={logoutNow}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-md mt-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
