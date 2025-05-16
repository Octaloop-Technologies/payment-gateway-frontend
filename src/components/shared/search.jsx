import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Search = ({
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
  return (
  
      <div
        className={`relative flex items-center  gap-2 rounded-[12px] bg-white py-2.5 px-3 border-[#D1D5DB] border-[1px] border-solid  transition-all  ${
          disabled ? "bg-gray-200 cursor-not-allowed" : ""
        } ${wrapperClass}`}
        style={{ maxWidth, maxHeight, minHeight, minWidth, height, width }}
      >
        <Icon
          icon="cuida:search-outline"
          width="24"
          height="24"
          style={{ color: "#007BFF" }}
        />
        <input
          autoComplete="off"
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-full  small font-normal bg-transparent outline-none px-0 pr-6 placeholder-secondary-text ${inputClass}`}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        {/* {icon && (
              <img
                src={getInputIcon()}
                alt="icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 cursor-pointer"
                onClick={togglePassword}
              />
            )} */}
        {/* {copyicon && (
              <img
                src={iconcopy}
                alt="icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 cursor-pointer"
                onClick={copyToClipboard}
               
              />
            )} */}
    
      {/* {errorMessage && (
            <p className="text-xs font-medium text-red-600">{errorMessage}</p>
          )} */}
    </div>
  );
};

export default Search;
