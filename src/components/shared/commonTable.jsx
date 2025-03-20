import React, { useState } from "react";
import Search from "./search";
import CustomSelect from "./select";
import { Pagination, Table, Tag } from "antd";
import Chips from "./chips";
import { Icon } from "@iconify/react/dist/iconify.js";

const CommonTable = ({
  dataSource,
  columns,
  heading,
  searchBox = true,
  paymentMethod = true,
  selectStatus = true,
  selectDate = true,
  durationType = false,
  ispagination = true,
  selectSource = false,
}) => {
  const [filteredData, setFilteredData] = useState(dataSource);
  const methodOptions = [
    { value: "Paypal", label: "Paypal" },
    { value: "DHL", label: "DHL" },
  ];

  const statusOptions = [
    { value: "Completed", label: "Completed" },
    { value: "Failed", label: "Failed" },
    { value: "Pending", label: "Pending" },
  ];

  const dateOptions = [
    { value: "Today", label: "Today" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
  ];
  const typeOptions = [
    { value: "Unusual", label: "Unusual" },
    { value: "Multiple", label: "Multiple" },
  ];
  const sourceOptions = [
    { value: "Rides", label: "Rides" },
    { value: "Crypto", label: "Crypto" },
  ];
  const durationOption = [
    {
      value: "Monthly",
      label: "Monthly",
    },

    {
      value: "Quarterly",
      label: "Quarterly",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-2.5 rounded-xl bg-white py-6 px-7">
        <div className="flex w-full justify-between items-center ">
          {heading && <p className="medium font-bold w-full">{heading}</p>}

          <div className="flex w-full justify-end gap-2 items-center">
            {searchBox && (
              <Search
                type="search"
                placeholder="Search..."
                width={340}
                wrapperClass="w-full"
              />
            )}
            {durationType && (
              <>
                <CustomSelect
                  placeholder="Type"
                  options={durationOption}
                  width={140}
                />
              </>
            )}
            {paymentMethod && (
              <CustomSelect
                placeholder="Method"
                options={methodOptions}
                width={140}
              />
            )}

            {selectDate && (
              <CustomSelect
                placeholder="Date"
                options={dateOptions}
                width={140}
              />
            )}
            {selectStatus && (
              <CustomSelect
                placeholder="Status"
                options={statusOptions}
                width={140}
              />
            )}
            {/* {selectSource && (
              <CustomSelect
                placeholder="Type"
                options={typeOptions}
                width={140}
              />
            )} */}

            {selectSource && (
              <CustomSelect
                placeholder="Source"
                options={sourceOptions}
                width={140}
              />
            )}
          </div>
        </div>

        {/* Table */}
        <div>
          <div className="flex flex-col">
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={false} // Disable default pagination
              className="custom-table"
            />

            {/* Custom Pagination with Text */}
            {ispagination && (
              <div className="flex justify-between items-center mt-4">
                <span className="small font-medium">
                  Showing 1 to 10 of 100 entries
                </span>
                <Pagination
                  total={100}
                  pageSize={10}
                  showSizeChanger={false}
                  className="custom-pagination"
                  itemRender={(current, type, originalElement) => {
                    if (type === "prev") {
                      return (
                        <div className="w-[36px] h-[36px] rounded-[9px] flex items-center justify-center border-[1px] border-solid border-[#D1D5DB]">
                          <Icon icon="ep:arrow-left-bold" color="gray" />
                        </div>
                      );
                    }
                    if (type === "next") {
                      return (
                        <div className="w-[36px] h-[36px] rounded-[9px] flex items-center justify-center border-[1px] border-solid border-[#D1D5DB]">
                          <Icon icon="ep:arrow-right-bold" color="gray" />
                        </div>
                      );
                    }
                    return originalElement;
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonTable;
