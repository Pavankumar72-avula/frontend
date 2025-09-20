import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"; // Ensure file exists
import { Eye, EyeOff, Mail } from "lucide-react";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.terms)
      newErrors.terms = "You must agree to the Terms of Service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Reset form on successful submission
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    });
    setErrors({});
    setSuccess("Account created successfully!");
    setError("");
  };

  return (
    <div className="bg-gray-100 min-h-screen gap-5 flex flex-col">
      <NavBar />
      <div className="flex justify-center pt-5">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
          Join BlogVerse
        </p>
      </div>
      <div className="flex justify-center">
        <p className="sm:md md:text-xl text-center text-gray-600">
          Create your account and <br />
          start your blogging journey today
        </p>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="shadow-2xl gap-5 pt-7 pb-5 px-4 mb-5 bg-white md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center md:rounded-3xl"
        >
          {/* Full Name */}
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Full Name</p>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 ${
                errors.fullName ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Email Address</p>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="w-[90%] flex flex-col gap-2">
            <p className="text-md text-gray-700 font-semibold">Password</p>
            <div className="relative">
              <input
                name="password"
                value={formData.password}
                autoComplete="new-password"
                onChange={handleChange}
                className={`rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12 ${
                  errors.password ? "border-red-500" : ""
                }`}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className="absolute right-4 bottom-4 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="w-[90%] flex flex-col gap-2 relative">
            <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
            <div className="relative">
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
              />
              <span
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms */}
          <div className="rounded-lg pl-5 items-center border-gray-300 flex border w-[90%] py-3 px-2 bg-gray-100">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <p className="pl-3 text-gray-700">
              I agree to the Terms of Service and Privacy Policy
            </p>
          </div>
          {errors.terms && <p className="text-red-500">{errors.terms}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-[90%] flex justify-center py-4 text-white bg-purple-600 rounded-xl"
          >
            Create Account
          </button>

          {/* Bottom Links */}
          <div className="border-[0.5px] my-5 w-[90%] text-gray-200"></div>
          <div className="flex flex-col items-center gap-3 w-[90%]">
            <div>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 font-semibold">
                  Sign In Here
                </Link>{" "}
              </p>
            </div>
            <div>
              <button className="text-gray-600 p-4 hover:bg-gray-200 rounded-lg">
                Back to Home
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
