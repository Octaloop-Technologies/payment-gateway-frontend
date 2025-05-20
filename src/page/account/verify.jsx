import React, { useState } from "react";
import limeBg from "../../assets/images/accounts/limeBg.png";
import grayBg from "../../assets/images/accounts/grayBg.png";
import logo from "../../assets/images/dashboard/logo.svg";
import Input from "../../components/shared/input";
import Button from "../../components/shared/button";
import { useNavigate } from "react-router-dom";
const Verify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Ensure only numbers are entered
    if (/[^0-9]/.test(value)) return;

    // Update the OTP value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move focus to the next input if a number is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };
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
          className=" w-[90%] sm:w-[60%] lg:w-[38%] py-5 2xl:py-11 px-5 2xl:px-12 flex flex-col gap-[30px] 2xl:gap-[62px] bg-[#cddadf] rounded-2xl "
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
              <h1 className="font-bold">Verify Your Identity</h1>
              <p className="large font-normal">
                Enter the OTP sent to your email address
              </p>
            </div>

            <form className="flex flex-col gap-2.5">
              <div className="flex flex-col justify-start gap-3 w-full">
                <label className="small text-gray font-semibold" htmlFor="">
                  Enter
                </label>
                <div className="flex items-center  justify-center lg:justify-start gap-2.5 lg:gap-4 xl:gap-[24px] w-full">
                  {/* First Group of OTP Inputs */}
                  {[...Array(3)].map((_, index) => (
                    <input
                      key={`otp-${index}`}
                      id={`otp-${index}`}
                      type="text"
                      value={otp[index]}
                      onChange={(e) => handleChange(e, index)}
                      maxLength={1}
                      className={`w-[40px]  2xl:w-[58px] h-[44px] text-center text-lg border rounded-lg shadow-sm bg-white focus:outline-none 
          ${
            otp[index] && /^\d$/.test(otp[index])
              ? "border-primary"
              : "border-[#90999D]"
          }`}
                    />
                  ))}
                  {/* Dash Separator */}
                  <div className="text-lg bg-transparent w-[20px] h-[2px]"></div>
                  {/* Second Group of OTP Inputs */}
                  {[...Array(3)].map((_, index) => (
                    <input
                      key={`otp-${index + 3}`}
                      id={`otp-${index + 3}`}
                      type="text"
                      value={otp[index + 3]}
                      onChange={(e) => handleChange(e, index + 3)}
                      maxLength={1}
                      className={`w-[40px]  2xl:w-[58px] h-[44px] text-center text-lg border rounded-lg shadow-sm bg-white focus:outline-none 
          ${
            otp[index + 3] && /^\d$/.test(otp[index + 3])
              ? "border-primary"
              : "border-[#90999D]"
          }`}
                    />
                  ))}
                </div>
              </div>
            </form>
          </div>
          {/* button */}

          <Button
            onClick={() => navigate("/set-new-password")}
            text="Next"
            className="bg-primary rounded-lg w-full text-white p-3 small font-semibold mb-[44px]"
          />
        </div>
      </div>
    </>
  );
};

export default Verify;
