import { useState } from "react";
import { login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    cfpassword: "",
    termsAndConditions: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (!isValidEmail(form.email)) formErrors.email = "Invalid email format";
    if (form.password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.cfpassword)
      formErrors.cfpassword = "Passwords do not match";
    if (!form.termsAndConditions)
      formErrors.termsAndConditions = "Please accept the terms";

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setSuccess("");
      return;
    }

    setSuccess("🎉 Account created successfully!");

    dispatch(login());

    setTimeout(() => {
      navigate("/product");
    }, 150);

    setForm({
      email: "",
      password: "",
      cfpassword: "",
      termsAndConditions: false,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-3">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm">

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-500 mb-4">
          Sign Up
        </h2>

        {success && (
          <p className="text-green-600 text-center mb-3 font-medium">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={update}
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={update}
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="cfpassword"
              placeholder="Confirm Password"
              value={form.cfpassword}
              onChange={update}
              className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400"
            />
            {errors.cfpassword && (
              <p className="text-red-500 text-sm">{errors.cfpassword}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="termsAndConditions"
              checked={form.termsAndConditions}
              onChange={update}
              className="h-4 w-4"
            />
            <label className="text-gray-700 text-sm">I accept the Terms</label>
          </div>

          {errors.termsAndConditions && (
            <p className="text-red-500 text-sm">{errors.termsAndConditions}</p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-lg font-semibold transition"
          >
            Submit
          </button>

          <button
            type="reset"
            className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2.5 rounded-lg transition"
          >
            Reset
          </button>

          <p className="mt-3 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-500 underline hover:text-blue-600"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
