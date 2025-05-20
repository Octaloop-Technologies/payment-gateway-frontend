import React from "react";
import limeBg from "../../assets/images/accounts/limeBg.png";
import grayBg from "../../assets/images/accounts/grayBg.png";
import logo from "../../assets/images/dashboard/logo.svg";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${limeBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full min-h-screen h-full  flex items-center justify-center"
      >
        <div
          // style={{
          //   backgroundImage: `url(${grayBg})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
          className=" w-[90%] sm:w-[60%] lg:w-[35%] py-5 2xl:py-11 px-5 2xl:px-12 flex flex-col gap-[30px] 2xl:gap-[62px] bg-[#cddadf] rounded-2xl "
        >
          {/* Logo */}
          <img
            className="w-[150px] 2xl:w-[185px] object-cover mx-auto pt-[44px]"
            src={logo}
            alt=""
          />
          {/* Content */}
          <div className="w-full flex flex-col justify-start gap-[32px]">
            <div className="flex flex-col">
              <h1 className="font-bold">Reset Your Password</h1>
              <p className="large font-normal">
                Enter Your Registered email to receive OTP
              </p>
            </div>

            <form className="flex flex-col gap-2.5">
              <Input
                type="email"
                label="Email Address"
                wrapperClass="w-[100%]"
                placeholder="Enter Email"
                className="w-full"
              />
            </form>
          </div>
          {/* button */}

          <Button
            onClick={() => navigate("/verify")}
            text="Next"
            className="bg-primary rounded-lg w-full text-white p-3 small font-semibold mb-[44px]"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
