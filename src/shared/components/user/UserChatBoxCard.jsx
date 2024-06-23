import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../services/user/UserSlice";
import zLocalStorage from "../../../services/custom_hooks/useLocalStorage";

const UserChatBoxCard = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lsEmail, setLsEmail, removeLsEmail] = zLocalStorage("user_email", "");
  const [lsPassword, setLsPassword, removeLsPassword] = zLocalStorage(
    "user_password",
    ""
  );
  const handleLogout = (e) => {
    dispatch(logoutUser({}));

    // clean LS
    removeLsEmail();
    removeLsPassword();

    navigate("/login", { replace: true });
  };
  return (
    <div className="flex border-b-2 border-b-white pb-3">
      <div className="w-1/5 flex">
        <img
          src="/chat_user_icon.png"
          className="w-full rounded-full align-middle m-auto"
          alt=""
        />
      </div>
      <div className="w-4/5 pl-3 pr-2">
        <div className="text-xl font-bold uppercase">{user.name}</div>
        <div className="text-xs italic">{user.email}</div>
        <div>
          <button
            type="button"
            className="bg-black text-white text-xs rounded px-2 py-1"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserChatBoxCard;
