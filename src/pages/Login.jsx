import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cfpassword: "",
    termsAndConditions: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const update = (e) => {
    const target = e.target;
    setForm({
      ...form,
      [target.name]:
        target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    if (form.name.trim() === "") formErrors.name = "Name is required";
    if (!isValidEmail(form.email)) formErrors.email = "Invalid email format";
    if (form.password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.cfpassword)
      formErrors.cfpassword = "Passwords do not match";
    if (!form.termsAndConditions)
      formErrors.termsAndConditions = "Please accept the terms";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccess("🎉 Form submitted successfully!");

      setForm({
        name: "",
        email: "",
        password: "",
        cfpassword: "",
        termsAndConditions: false,
      });
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Account
        </h2>

        {success && (
          <p className="text-green-600 text-center mb-4 font-medium">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={update}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={update}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
            <label className="text-gray-700">I accept the Terms</label>
          </div>
          {errors.termsAndConditions && (
            <p className="text-red-500 text-sm">{errors.termsAndConditions}</p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold transition"
          >
            Submit
          </button>

          <button
            type="reset"
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg transition"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
