import React from "react";
import { Select } from "antd";

const CustomSelect = ({
  wrapperClasses,
  className,
  value,
  onChange,
  options,
  label,
  error,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  height,
  width,
  placeholder,
  showSearch,
}) => {
  const selectStyle = {
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    maxWidth:maxWidth,
    height: height,
    width: width,
  };

  return (
    <>
      <div
        className={`select-wrapper flex flex-col  ${wrapperClasses}  ${error ? "error" : ""} `}
      >
        <label className={value ? "active" : "extra-small text-black font-medium"}> {label}</label>
        <Select
          style={selectStyle}
          onChange={onChange}
          options={options?.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          showSearch={showSearch}
          value={value}
          className={"custom-select cryptoSelect"}
          popupClassName="custom-select-dropdown"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default CustomSelect;
