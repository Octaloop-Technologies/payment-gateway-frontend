import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./navbar";
import { Icon } from "@iconify/react";
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <section className="bg-[#F0F2F4]  w-full flex justify-between min-h-screen  ">
      <div className="   h-[calc(100vh-2px)] ">
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden"
          } lg:block`}
        >
          <SideBar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />{" "}
        </div>
      </div>
      {/* <div className="w-full max-w-[calc(100vw-px)]  lg:max-w-[calc(100vw-230px)]   flex flex-col gap-2 xl:gap-0"> */}
      <div className=" flex flex-col w-full overflow-y-auto overflow-x-hidden h-full max-h-screen   ml-auto lg:w-[calc(100vw-225px)]">

  
      
         <Navbar className="" />
        <button
          onClick={toggleSidebar}
          className="fixed top-1 left-2 z-50 lg:hidden"
        >
          <Icon
            icon={isSidebarOpen ? "mdi:close" : "mdi:menu"}
            className="w-5 h-5 text-gray-800"
          />
        </button>
    
     
        <div className="page-dom w-full py-5 px-5 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;

