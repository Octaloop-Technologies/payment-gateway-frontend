import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/homeWhite.svg";
import transectionIcon from "../../assets/icons/transections.svg";
import fraudIcon from "../../assets/icons/fraud.svg";
import cryptoIcon from "../../assets/icons/crypto.svg";
import complianceIcon from "../../assets/icons/tax.svg";
import revenueIcon from "../../assets/icons/revenue.svg";
import settingIcon from "../../assets/icons/setting.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import logo from "../../assets/icons/logo.svg";
import userIcon from "../../assets/icons/usersIcon.svg";
import payouts from "../../assets/icons/payouts.svg";

const SideBar = () => {
  const { pathname } = useLocation();
  // tabs
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
    // {
    //   id: 6,
    //   title: "Settings",
    //   link: "/settings",
    //   icon: settingIcon,
    // },

    // {
    //   id: 7,
    //   title: "Logout",
    //   link: "/logout",
    //   icon: logoutIcon,
    // },
  ];
  return (
    <div className="bg-white shadow-primary  h-full flex flex-col gap-4">
      {/* logo  */}
      <div className="flex p-[18.5px] ">
        <img className="w-24 object-cover" src={logo} alt="logo" />
      </div>

      {/* tabs  */}
      <div className="flex flex-col gap-2 border-t-solid border-t-[gainsboro]    border-t-[1px]">
        {tablist.map((tab) => (
          <>
            <NavLink
              to={tab.link}
              key={tab.id}
              className={({ isActive }) =>
                `flex items-center gap-4 font-semibold text-base py-3 px-5   relative ${
                  isActive ? "bg-red text-white" : "text-black"
                }`
              }
            >
              {/* Show the div only when active */}
              {/* {pathname === tab.link && (
                <div className="w-[4px] h-[40px] bg-primary rounded-lg absolute top-[-5px] left-[-32px]"></div>
              )} */}
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
          </>
        ))}
        {/* <NavLink
          to="logout"
          className="flex items-center gap-4  font-semibold text-base text-crimson  rounded-primary"
        >
          <img src={logoutIcon} alt="" />

          <span>Logout</span>
        </NavLink> */}
      </div>
    </div>
  );
};

export default SideBar;
