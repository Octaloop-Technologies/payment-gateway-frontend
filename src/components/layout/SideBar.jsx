import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import transectionIcon from "../../assets/icons/transections.svg";
import fraudIcon from "../../assets/icons/fraud.svg";
import cryptoIcon from "../../assets/icons/crypto.svg";
import complianceIcon from "../../assets/icons/tax.svg";
import settingIcon from "../../assets/icons/setting.svg";
import logoutIcon from "../../assets/icons/logout.svg";

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
      title: "Fraud Alerts",
      link: "/fraud-alerts",
      icon: fraudIcon,
    },
    {
      id: 4,
      title: "Crypto & Listings",
      link: "/crypto",
      icon: cryptoIcon,
    },
    {
      id: 5,
      title: "Compliance & Tax",
      link: "/compliance",
      icon: complianceIcon,
    },
    {
      id: 6,
      title: "Settings",
      link: "/setting",
      icon: settingIcon,
    },

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
        <img className="w-24" src="/leggoLogo.svg" alt="logo" />
      </div>

      {/* tabs  */}
      <div className="flex flex-col gap-8 border-t-solid border-t-[gainsboro]  py-7 px-8 pt-2 border-t-[1px] pt-3">
        {tablist.map((tab) => (
          <>
            <NavLink
              to={tab.link}
              key={tab.id}
              className={({ isActive }) =>
                `flex items-center gap-4  font-semibold text-base  rounded-primary  ${
                  isActive
                    ? " text-primary"
                    : "text-gray"
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
                      : "grayscale(100%) brightness(100%)",
                }}
              />
              {tab.title}
            </NavLink>
          </>
        ))}
        <NavLink
          to="logout"
          className="flex items-center gap-4  font-semibold text-base text-crimson  rounded-primary"
        >
          <img src={logoutIcon} alt="" />

          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
