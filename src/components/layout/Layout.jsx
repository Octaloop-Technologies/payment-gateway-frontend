import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <section className="bg-[#F0F2F4]  w-full flex justify-between  ">
      <div className=" max-w-0 lg:max-w-[280px] w-full bg-white  h-[calc(100vh-2px)] shadow-[0px_4px_24.2px_0px_rgba(0,60,82,0.10)] sticky top-0 overflow-auto">
        <SideBar />
      </div>
      {/* <aside className="w-[250px] shrink-0">
        <SideBar />
      </aside> */}
      <div className="w-full max-w-[calc(100vw-20px)]  lg:max-w-[calc(100vw-250px)] flex flex-col gap-2 xl:gap-0">
        <Navbar />
        <div className="page-dom w-full py-5 px-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
