import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminSignup } from "../features/admin/adminSlice"; 
import { useNavigate, Link } from "react-router-dom";

function AdminSignup() {
  const [from, setFrom] = useState({ email: "", password: "" });
  const admins = useSelector((state) => state.admin.admins);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!from.email || !from.password) {
      alert("Please fill all fields");
      return;
    }

    const exists = admins.find((a) => a.email === from.email);
    if (exists) {
      alert("Admin with this email already exists");
      return;
    }

    dispatch(adminSignup(from));
    alert("Admin registered successfully!");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-2">
          Admin Sign Up
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 text-center mb-6">
          Create an admin account to access the dashboard.
        </p>

        {/* Form */}
        <div className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full border border-slate-400 rounded-xl px-3 py-2 text-sm sm:py-2.5 
                       outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            value={from.email}
            onChange={(e) => setFrom({ ...from, email: e.target.value })}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Admin Password"
            className="w-full border border-slate-400 rounded-xl px-3 py-2 text-sm sm:py-2.5
                       outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            value={from.password}
            onChange={(e) => setFrom({ ...from, password: e.target.value })}
          />

          {/* Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white 
                       font-semibold py-2.5 rounded-xl text-sm sm:text-base"
          >
            Sign Up
          </button>
        </div>

        <p className="text-xs sm:text-sm text-center text-slate-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/admin-login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default AdminSignup;
