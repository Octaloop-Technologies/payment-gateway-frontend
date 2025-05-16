
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/homeWhite.svg";
import transectionIcon from "../../assets/icons/transections.svg";
import fraudIcon from "../../assets/icons/fraud.svg";
import cryptoIcon from "../../assets/icons/crypto.svg";
import complianceIcon from "../../assets/icons/tax.svg";
import revenueIcon from "../../assets/icons/revenue.svg";
import logo from "../../assets/icons/logo.svg";
import userIcon from "../../assets/icons/usersIcon.svg";
import payouts from "../../assets/icons/payouts.svg";

const SideBar = ({ isOpen, setIsSidebarOpen }) => {
  const { pathname } = useLocation();

  const tablist = [
   {
      id: 1,
      title: "Home",
      link: "/admin-home",
      icon: homeIcon,
    },
    {
      id: 2,
      title: "Transactions",
      link: "/admin-transactions",
      icon: transectionIcon,
    },
    {
      id: 3,
      title: "Users",
      link: "/active-users",
      icon: userIcon,
    },
    {
      id: 4,
      title: "Payouts",
      link: "/total-payouts",
      icon: payouts,
    },
    {
      id: 5,
      title: "Fraud Alerts",
      link: "/fraud-alerts",
      icon: fraudIcon,
    },
    {
      id: 6,
      title: "Crypto & Listings",
      link: "/crypto",
      icon: cryptoIcon,
    },
    {
      id: 7,
      title: "Compliance & Tax",
      link: "/compliance",
      icon: complianceIcon,
    },

    {
      id: 8,
      title: "Revenue Stream",
      link: "/revenue-stream",
      icon: revenueIcon,
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-full border-r  border-[#D1D5DB]   transition-all duration-300 
        ${isOpen ? "w-[229px] " : "w-0 px-0 overflow-hidden "} 
        md:w-[229px] md:`}
    >
      <div
        className={`flex flex-col h-full ${isOpen ? "visible" : "invisible"} md:visible`}
      >
        <div className="bg-white shadow-primary h-full flex flex-col gap-4  " >
          {/* logo */}
          <div className="flex p-[18.5px]">
            <img className="w-24 object-cover" src={logo} alt="logo" />
          </div>

          {/* tabs */}
          <div className="flex flex-col gap-2   border-t-[1px] border-[#D1D5DB]">
            {tablist.map((tab) => (
              <NavLink
                to={tab.link}
                key={tab.id}
                className={({ isActive }) =>
                  `flex items-center gap-4 font-semibold text-base py-3 px-5 relative ${
                    isActive ? "bg-red text-white" : "text-black"
                  }`
                }
              >
                <img
                  src={tab.icon}
                  alt=""
                  style={{
                    filter:
                      pathname === tab.link
                        ? "none"
                        : "grayscale(100%) brightness(0)",
                  }}
                />
                {tab.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
