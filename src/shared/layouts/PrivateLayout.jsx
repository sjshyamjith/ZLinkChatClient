import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
  // const loggedUser = getUserInfoFromLocalStorage();
  // // console.log(loggedUser);
  // if (!loggedUser) {
  //   return <Navigate to={"/forbidden"} />;
  // }
  return (
    <div>
      <div className="min-h-full">
        <div className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
