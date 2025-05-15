import React from "react";
import limeBg from "../../assets/images/accounts/limeBg.png";
import grayBg from "../../assets/images/accounts/grayBg.png";
import logo from "../../assets/images/dashboard/logo.svg";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
          className="w-[35%] py-5 2xl:py-11 px-5 2xl:px-12 flex flex-col gap-[30px] 2xl:gap-[62px] bg-[#cddadf] rounded-2xl "
        >
          {/* Logo */}
          <img className="w-[150px] 2xl:w-[185px] object-cover mx-auto" src={logo} alt="" />
          {/* Content */}
          <div className="w-full flex flex-col justify-start gap-[32px]">
            <div className="flex flex-col">
              <h1 className="font-bold">Log In</h1>
              <p className="large font-normal">Welcome Back to Leggo</p>
            </div>

            <form className="flex flex-col gap-2.5">
              <Input
                type="text"
                label="User Name"
                wrapperClass="w-[100%]"
                placeholder="John Smith"
                className="w-full"
              />

              <Input
                type="password"
                label="Password"
                wrapperClass="w-[100%]"
                placeholder="Enter Password"
                className="w-full"
                icon={true}
              />

              <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                  <input
                    className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
                    type="checkbox"
                  />
                  <p className="medium font-normal ">Remember Me</p>
                </div>
                <p
                  onClick={() => navigate("/reset-password")}
                  className="medium font-normal cursor-pointer"
                >
                  Forgot Password!
                </p>
              </div>
            </form>
          </div>
          {/* button */}

          <Button
            onClick={() => navigate("/admin-home")}
            text="Login"
            className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
