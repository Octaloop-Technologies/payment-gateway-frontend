import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const KeyMetricsCard = ({
  title,
  value,
  description,
  percentage,
  icon,
  icontrend,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="text-gray medium font-semibold">{title}</p>
        {/* <div className={`size-[60px] flex items-center justify-center rounded-3xl ${iconBg}`}>
          {icon}
        </div> */}
        <img className="size-[60px]" src={icon} alt="" />
      </div>
      <h2 className="font-bold">{value}</h2>

      {icontrend && percentage && description && (
        <div className="w-full flex gap-2">
          <Icon
            icon={icontrend}
            width="24"
            height="24"
            style={{ color: "#00B69B" }}
          />
          <p className="medium font-semibold text-seaGreen">
            {percentage}
            <span className="text-darkGray">{description}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default KeyMetricsCard;
