import React, { useEffect, useState } from "react";

const Chips = ({ status }) => {
  const [type, setType] = useState(status.toLowerCase());
  useEffect(() => {
    setType(status.toLowerCase());
  }, [status]);
  const statusConfig = {
    completed: {
      label: "Completed",
      bgClass: "bg-light-green",
      textClass: "text-black",
    },
    failed: {
      label: "Failed",
      bgClass: "bg-light-pink",
      textClass: "text-black",
    },
    pending: {
      label: "Pending",
      bgClass: "bg-light-yellow",
      textClass: "text-black",
    },
    resolved: {
      label: "Resolved",
      bgClass: "bg-light-green",
      textClass: "text-black",
    },
    open: {
      label: "Open",
      bgClass: "bg-light-yellow",
      textClass: "text-black",
    },
    delayed: {
      label: "Delayed",
      bgClass: "bg-light-pink",
      textClass: "text-black",
    },
    active: {
      label: "Active",
      bgClass: "bg-light-green",
      textClass: "text-black",
    },
    inactive: {
      label: "Inactive",
      bgClass: "bg-light-pink",
      textClass: "text-red",
    },

    disabled: {
      label: "Disabled",
      bgClass: "bg-light-pink",
      textClass: "text-black",
    },

    verified: {
      label: "Verfied",
      bgClass: "bg-light-green",
      textClass: "text-black",
    },
    blocked: {
      label: "Blocked",
      bgClass: "bg-light-pink",
      textClass: "text-error",
    },
    disputed: {
      label: "Disputed",
      bgClass: "bg-light-error",
      textClass: "text-error",
    },
    refund: {
      label: "Refund",
      bgClass: "bg-light-error",
      textClass: "text-error",
    },

    denied: {
      label: "Denied",
      bgClass: "bg-light-pink",
      textClass: "text-black",
    },

    approved: {
      label: "Approved",
      bgClass: "bg-light-green",
      textClass: "text-black",
    },

    inreview: {
      label: "In Review",
      bgClass: "bg-light-green",
      textClass: "text-black",
    },

    frozen: {
      label: "Frozen",
      bgClass: "bg-light-yellow",
      textClass: "text-black",
    },
  };
  const chipConfig = statusConfig[type];
  return (
    chipConfig && (
      <div
        className={`chips px-3.5 py-2.5 w-[111px]  rounded-full flex justify-center items-center ${chipConfig.bgClass}`}
      >
        <label className={`small font-medium ${chipConfig.textClass}`}>
          {chipConfig.label}
        </label>
      </div>
    )
  );
};
export default Chips;
