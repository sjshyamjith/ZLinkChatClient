import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from "../../services/user/UserService";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/user/UserSlice";
import zLocalStorage from "../../services/custom_hooks/useLocalStorage";

function LoginPage() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lsEmail, setLsEmail, removeLsEmail] = zLocalStorage("user_email", "");
  const [lsPassword, setLsPassword, removeLsPassword] = zLocalStorage(
    "user_password",
    ""
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Loging in...");
    const result = await UserServices.login(email, password);
    console.log(result);
    if (result) {
      console.log("Login success");
      // local storage
      setLsEmail(email);
      setLsPassword(password);

      // redux store
      dispatch(
        loginUser({
          id: result.id,
          name: result.name,
          email: result.email,
          token: result.token,
        })
      );
      navigate("/chat", { replace: true });
    }
    setError("User login failed.");
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
              Login
            </div>
            <form
              action="#"
              method="POST"
              autoComplete="off"
              onSubmit={onSubmit}
            >
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
              />
              {error.length > 0 && (
                <div className="text-red-500 mb-2 text-center">
                  User login failed!
                </div>
              )}
              <button
                type="submit"
                id="submit"
                className="w-full bg-black text-white rounded-lg p-3 "
              >
                LOGIN
              </button>
            </form>
            <div className="text-center italic font-title text-slate-500 my-8">
              Just For Fun
            </div>
            <div>
              <Link to="/register">
                <button
                  type="button"
                  id="submit"
                  className="w-full bg-sky-500 text-white rounded-lg p-3 "
                >
                  JOIN WITH US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
