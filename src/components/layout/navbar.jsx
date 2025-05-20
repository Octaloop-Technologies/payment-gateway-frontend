
import React, { useState, useEffect, useRef } from "react";
import Search from "../shared/search";
import { Icon } from "@iconify/react/dist/iconify.js";
import userIcon from "../../assets/icons/userPic.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();


  const [showPopup, setShowPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Refs to dropdown containers to detect outside clicks
  const popupRef = useRef(null);
  const notificationRef = useRef(null);
  const searchRef = useRef(null);

  const handleShowPopup = () => setShowPopup((prev) => !prev);
  const handleShowNotification = () => setShowNotification((prev) => !prev);
  const handleShowSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close notification dropdown if click outside
      if (
        showNotification &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
      if (
        showPopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        event.target !== userIcon
      ) {
        setShowPopup(false);
      }

     
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup, showNotification, showSearch]);

  return (
    <nav>
      <div className="w-full flex justify-end gap-3 p-5 bg-white border-b-solid border-b-[gainsboro] border-b-[1px]">
        {/* Search */}
        <div
          onClick={handleShowSearch}
          ref={searchRef}
          className="relative w-[300px] flex items-center cursor-pointer"
        >
          <Search
            type="search"
            placeholder="Search..."
            maxWidth={300}
            wrapperClass="w-full"
            className="cursor-pointer"
          />
          {showSearch && (
            <div className="absolute top-12 right-0 w-[300px] rounded-xl bg-white py-5 px-3 z-30 flex flex-col gap-[20px] shadow-primary">
              <div className="w-full flex flex-col gap-2">
                <p className="small font-normal text-[#5e5e5e]">Recent Searches</p>
                <div className="w-full flex flex-col gap-2">
                  <p className="extra-small font-semibold">TXN-12345 (Transaction ID)</p>
                  <p className="extra-small font-semibold">Frozen Funds - $5,000 (Fraud Alert)</p>
                  <p className="extra-small font-semibold">ETH Exchange Rate (Crypto Listings)</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="small font-normal text-[#5e5e5e]">Suggested Searches</p>
                <div className="w-full flex flex-col gap-2">
                  <p className="extra-small font-semibold">View All Transactions</p>
                  <p className="extra-small font-semibold">High-Risk Fraud Alerts</p>
                  <p className="extra-small font-semibold">Latest Crypto Exchange Rates</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div
          onClick={handleShowNotification}
          ref={notificationRef}
          className="size-[50px] relative cursor-pointer rounded-full border-[1px] bg-white border-[#D1D5DB] border-solid flex items-center justify-center"
        >
          <Icon
            icon="solar:bell-linear"
            width="20"
            height="20"
            style={{ color: "#247BA0" }}
          />
          {showNotification && (
            <div className="absolute top-13 right-0 w-[250px] sm:w-[330px] rounded-xl bg-white z-30 flex flex-col gap-[26px] shadow-primary">
              <div className="p-5 flex justify-between w-full border-b-[1px] border-solid border-b-[gainsboro]">
                <p className="medium font-bold">Notifications</p>
                <p className="small font-semibold cursor-pointer">Mark all as read</p>
              </div>

              <div className="flex justify-between items-center w-full pb-[21px] px-[20px] border-b-[1px] border-solid border-b-[gainsboro]">
                <div className="flex flex-col gap-[8px]">
                  <p className="small font-semibold">Transaction</p>
                  <p className="small font-normal">Payment of $500 failed for Order #1234</p>
                </div>
                <div className="size-[12px] bg-primary rounded-full"></div>
              </div>

              <div className="flex justify-between items-center w-full pb-[21px] px-[20px] border-b-[1px] border-solid border-b-[gainsboro]">
                <div className="flex flex-col gap-[8px]">
                  <p className="small font-semibold">Fraud Alert</p>
                  <p className="small font-normal">Unusual login attempt from Russia</p>
                </div>
                <div className="size-[12px] bg-primary rounded-full"></div>
              </div>

              <div className="flex justify-between items-center w-full pb-[21px] px-[20px] border-b-[1px] border-solid border-b-[gainsboro]">
                <div className="flex flex-col gap-[8px]">
                  <p className="small font-semibold">System Update</p>
                  <p className="small font-normal">New tax reporting feature added</p>
                </div>
                <div className="size-[12px] bg-primary rounded-full"></div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Popup */}
        <div className="size-[50px] rounded-full bg-white flex items-center justify-center relative">
          <img
            onClick={handleShowPopup}
            className="rounded-full cursor-pointer"
            src={userIcon}
            alt="User Profile"
          />
          {showPopup && (
            <div
              ref={popupRef}
              className="absolute bottom-[-160px] right-0 rounded-xl bg-white w-fit z-30 p-[10px] shadow-primary"
            >
              <div
                onClick={() => navigate("/profile-setting")}
                className="flex cursor-pointer justify-start gap-2 items-center p-[10px] border-solid border-b-[gainsboro] border-b-[1px]"
              >
                <Icon icon="bx:user" width="24" height="24" style={{ color: "#000" }} />
                <p className="medium font-semibold">Profile</p>
              </div>

              <div
                onClick={() => navigate("/settings")}
                className="flex cursor-pointer justify-start gap-2 items-center p-[10px] border-solid border-b-[gainsboro] border-b-[1px]"
              >
                <Icon icon="mdi:settings-outline" width="24" height="24" style={{ color: "#000" }} />
                <p className="medium font-semibold">Settings</p>
              </div>

              <div
                onClick={() => navigate("/login")}
                className="flex cursor-pointer justify-start gap-2 items-center p-[10px]"
              >
                <img src={logoutIcon} alt="Logout Icon" />
                <p className="medium font-semibold text-crimson">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
