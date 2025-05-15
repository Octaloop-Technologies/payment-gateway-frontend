import React, { useEffect, useState } from "react";
import msgImg from "../../assets/images/dashboard/enableImage.png";
import Button from "../shared/button";
import { Modal } from "antd";
import Input from "../shared/input";

const Enable2Factor = ({ isEnable, setIsEnable }) => {
  const [open, setOpen] = useState("pass");
  useEffect(() => {
    if (open === "factorEnable") {
      const timeout = setTimeout(() => {
        setIsEnable(false); 
        setOpen("pass")// Close the modal
      }, 1500);

      return () => clearTimeout(timeout); // Cleanup to prevent memory leaks
    }
  }, [open, setIsEnable]);
  const handleOk = () => {
    setIsEnable(false);
  };

  const handleCancel = () => {
    setIsEnable(false);
  };

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
    <Modal
      open={isEnable}
      onOk={handleOk}
      onCancel={handleCancel}
      className="modal-main"
      centered={true}
      width={577}
      maskClosable={true}
      footer={null}
    >
      <div className="modal-content flex  flex-col  ">
        <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
          Enable 2-FA
        </p>

        <img className="w-[230px] object-cover mx-auto" src={msgImg} alt="" />

        <div className="flex flex-col px-8  gap-10 pb-10 items-center ">
          {open === "pass" && (
            <>
              <h2 className="text-2xl font-semibold text-center leading-none ">
                Please confirm your identity before enabling Two-Factor
                Authentication
              </h2>

              <Input
                type="password"
                label="Enter Your Password"
                wrapperClass="w-[100%]"
                placeholder="Enter Password"
                className="w-full"
                icon={true}
              />
              <div className="w-full flex flex-col gap-3 ">
                <Button
                  onClick={() => setOpen("phoneNo")}
                  text="Next"
                  className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Cancel"
                  className="bg-light-pink rounded-lg w-full text-red p-3 small font-semibold"
                />
              </div>
            </>
          )}

          {open === "phoneNo" && (
            <>
              <h2 className="text-2xl font-semibold text-center leading-none ">
                Enter your phone number to get a verification code
              </h2>

              <Input
                type="password"
                label="Enter Your Phone No."
                wrapperClass="w-[100%]"
                placeholder="033177493572"
                className="w-full"
              />
              <div className="w-full flex flex-col gap-3 ">
                <Button
                  onClick={() => setOpen("verifyCode")}
                  text="Next"
                  className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Cancel"
                  className="bg-light-pink rounded-lg w-full text-red p-3 small font-semibold"
                />
              </div>
            </>
          )}

          {open === "verifyCode" && (
            <>
              <h2 className="text-2xl font-semibold text-center leading-none ">
                Please enter the 6-digit verification code sent to your phone
                number.
              </h2>
              <div className="flex flex-col justify-start gap-3 w-full">
                <label className="small text-gray font-semibold" htmlFor="">
                  Enter 6 Digit Code
                </label>
                <div className="flex items-center justify-start gap-[26px] w-full">
                  {/* First Group of OTP Inputs */}
                  {[...Array(3)].map((_, index) => (
                    <input
                      key={`otp-${index}`}
                      id={`otp-${index}`}
                      type="text"
                      value={otp[index]}
                      onChange={(e) => handleChange(e, index)}
                      maxLength={1}
                      className={`w-[58px] h-[44px] text-center text-lg border rounded-lg shadow-sm bg-white focus:outline-none 
          ${
            otp[index] && /^\d$/.test(otp[index])
              ? "border-primary"
              : "border-[#90999D]"
          }`}
                    />
                  ))}
                  {/* Dash Separator */}
                  <div className="text-lg bg-[white] w-[20px] h-[2px]"></div>
                  {/* Second Group of OTP Inputs */}
                  {[...Array(3)].map((_, index) => (
                    <input
                      key={`otp-${index + 3}`}
                      id={`otp-${index + 3}`}
                      type="text"
                      value={otp[index + 3]}
                      onChange={(e) => handleChange(e, index + 3)}
                      maxLength={1}
                      className={`w-[58px] h-[44px] text-center text-lg border rounded-lg shadow-sm bg-white focus:outline-none 
          ${
            otp[index + 3] && /^\d$/.test(otp[index + 3])
              ? "border-primary"
              : "border-[#90999D]"
          }`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col gap-3 ">
                <Button
                  onClick={() => setOpen("factorEnable")}
                  text="Verify & Enable 2FA"
                  className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Resend"
                  className="bg-white border border-[black] rounded-lg w-full text-black p-3 small font-semibold"
                />
              </div>
            </>
          )}

          {open === "factorEnable" && (
            <div className="flex flex-col gap-2.5">
              <p className="text-2xl font-semibold text-center leading-none ">
                Two-Factor Authentication is now active!
              </p>
              <p className="large font-normal text-center">
                You will be required to enter a verification code each time you
                log in.
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Enable2Factor;
