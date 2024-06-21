import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from "../../services/UserService";

function RegisterPage() {
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Passwords are not matching!");
      return;
    }
    const result = UserServices.register(fullName, email, password);
    if (result) {
      console.log("Registered");
      console.log(result);
      navigate("/chat", { replace: true });
    }
    setError("User registration failed!");
  };
  return (
    <div className="bg-slate-100 rounded-xl p-5 w-full lg:w-3/4 m-auto">
      <div className="py-1">
        <div className="py-5 flex px-5">
          <div className="w-3/5">
            <img src="/public_side_bg.png" alt="" className="w-full" />
          </div>
          <div className="w-full lg:w-2/5 m-auto">
            <div className="font-title font-bold text-center text-3xl mb-5">
              Join Now
            </div>
            <form
              action="#"
              method="POST"
              autoComplete="off"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-lg w-full p-3 italic mb-5"
                autoComplete="off"
                required
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                onKeyUp={(e) => {
                  setError("");
                }}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-lg w-full p-3 italic mb-5"
                autoComplete="off"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyUp={(e) => {
                  setError("");
                }}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="rounded-lg w-full p-3 italic mb-5"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyUp={(e) => {
                  setError("");
                }}
              />
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="rounded-lg w-full p-3 italic mb-5"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                onKeyUp={(e) => {
                  setError("");
                }}
              />
              {error.length > 0 && (
                <div className="text-red-500 mb-2 text-center">{error}</div>
              )}
              <button
                type="submit"
                id="submit"
                className="w-full bg-sky-500 text-white rounded-lg p-3 "
              >
                JOIN NOW
              </button>
            </form>
            <div className="text-center italic font-title text-slate-500 my-8">
              Just For Fun
            </div>
            <div>
              <Link to="/login">
                <button
                  type="button"
                  id="submit"
                  className="w-full bg-black text-white rounded-lg p-3 "
                >
                  BACK TO LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
