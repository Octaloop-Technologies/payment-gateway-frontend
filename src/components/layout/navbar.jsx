import React, { useState } from "react";
import Search from "../shared/search";
import { Icon } from "@iconify/react/dist/iconify.js";
import userIcon from "../../assets/icons/userPic.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = (value) => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div className="w-full flex justify-end gap-3 p-5 bg-white border-b-solid border-b-[gainsboro]   border-b-[1px] ">
        <Search
          type="search"
          placeholder="Search..."
          maxWidth={300}
          wrapperClass="w-full"
        />
        <div className="size-[50px] rounded-full border-[1px] bg-white border-[#D1D5DB] border-solid flex items-center justify-center">
          <Icon
            icon="solar:bell-linear"
            width="20"
            height="20"
            style={{ color: "#247BA0" }}
          />
        </div>

        <div className="size-[50px] rounded-full  bg-white  flex items-center justify-center relative">
          <img
            onClick={handleShowPopup}
            className="rounded-full cursor-pointer  "
            src={userIcon}
            alt=""
          />
          {showPopup && (
            <div className="absolute bottom-[-160px] right-0 rounded-xl bg-white w-fit z-30 p-[10px] shadow-primary">
              <div className="flex justify-start gap-2 items-center p-[10px] border-solid border-b-[gainsboro] border-b-[1px]">
                <Icon
                  icon="bx:user"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
                <p className="medium font-semibold">Profile</p>
              </div>

              <div
                onClick={() => navigate("/settings")}
                className="flex  justify-start gap-2 cursor-pointer items-center p-[10px] border-solid border-b-[gainsboro] border-b-[1px]"
              >
                <Icon
                  icon="mdi:settings-outline"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
                <p className="medium font-semibold">Settings</p>
              </div>

              <div className="flex justify-start gap-2 items-center p-[10px] ">
                <img src={logoutIcon} alt="" />

                <p className="medium font-semibold text-crimson">Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
