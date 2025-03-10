import React from "react";
import Search from "../shared/search";
import { Icon } from "@iconify/react/dist/iconify.js";
import userIcon from "../../assets/icons/userPic.svg";
const Navbar = () => {
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

        <div className="size-[50px] rounded-full  bg-white  flex items-center justify-center">
          <img className="rounded-full " src={userIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
