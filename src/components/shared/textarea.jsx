import React, { useState } from "react";
const Textarea = ({
  wrapperClass,
  className,
  inputClass,
  label,
  labelClass,
  onChange,
  name,
  id,
  value,
  placeholder,
  rows,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  width,
  maxLength,
  error,
  errorMessage,
  disabled = false,
}) => {
  const inputStyle = {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth,
  };

  return (
    <>
      <div
        className={`textarea-box w-full flex flex-col gap-2 ${error ? "error" : ""} ${className}`}
        style={inputStyle}
      >
        <label className="extra-small text-black font-medium">{label}</label>
        <div
          className={`input-wrapper w-full flex border-[1px] border-solid border-[#247BA0]  rounded-[8px]  p-3  ${wrapperClass} ${
            disabled && "disabled"
          }`}
        >
          <textarea
            autoComplete="off"
            spellCheck
            rows={rows}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full h-full small font-semibold bg-transparent outline-none px-0 pr-6 placeholder-secondary-text ${inputClass}`}
            disabled={disabled}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </div>
        {errorMessage && (
          <p className="extra-small text-xs font-medium text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Textarea;
