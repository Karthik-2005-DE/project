import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../features/admin/adminSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const admins = useSelector((state) => state.admin.admins);
  const isAdminLogged = useSelector((state) => state.admin.isAdminLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdminLogged) navigate("/admin-panel");
  }, [isAdminLogged, navigate]);

  const handleLogin = () => {
    const found = admins.find(
      (a) => a.email === form.email && a.password === form.password
    );

    if (found) {
      dispatch(adminLogin(found));
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-24 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-2">
          Admin Login
        </h2>
        <p className="text-sm text-slate-500 text-center mb-6">
          Use your admin credentials to access the dashboard.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@gmail.com"
              className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full mt-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-2.5 rounded-xl text-sm"
          >
            Login
          </button>
        </div>

        <p className="text-xs sm:text-sm text-center text-slate-500 mt-4">
          New admin?{" "}
          <Link
            to="/admin-signup"
            className="text-orange-500 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
