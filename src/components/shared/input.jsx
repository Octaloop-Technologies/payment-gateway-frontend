import React, { useState } from "react";
import eyeOpen from "../../assets/icons/eye-open.svg";
import eyeClose from "../../assets/icons/eye-close.svg";
import iconcopy from "../../assets/icons/copy.svg";

const Input = ({
  type = "text",
  wrapperClass = "",
  className = "",
  inputClass = "",
  label,
  labelClass = "",
  onChange,
  name,
  id,
  value,
  placeholder,
  icon,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  width,
  maxLength,

  errorMessage,
  disabled = false,
  copyicon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    return type === "password" ? (showPassword ? "text" : "password") : type;
  };

  const getInputIcon = () => {
    return type === "password" ? (showPassword ? eyeOpen : eyeClose) : icon;
  };
  const copyToClipboard = () => {
    if (value) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          console.log("Copied to clipboard");
        })
        .catch((err) => {
          console.log("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className={`extra-small text-black font-medium ${labelClass}`}>
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center border-[1px] border-solid border-[#247BA0] bg-white  rounded-[8px]  p-3 h-10   ${
          disabled ? "bg-gray-200 cursor-not-allowed" : ""
        } ${wrapperClass}`}
        style={{ maxWidth, maxHeight, minHeight, minWidth, height, width }}
      >
        <input
          autoComplete="off"
          type={getInputType()}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-full text-secondary-text small font-semibold bg-transparent outline-none px-0 pr-6 placeholder-secondary-text ${inputClass}`}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        {icon && (
          <img
            src={getInputIcon()}
            alt="icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 cursor-pointer"
            onClick={togglePassword}
          />
        )}
        {copyicon && (
          <img
            src={iconcopy}
            alt="icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 cursor-pointer"
            onClick={copyToClipboard}
          />
        )}
      </div>
      {errorMessage && (
        <p className="text-xs font-medium text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
