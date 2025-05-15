import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import editIcon from "../../../../assets/icons/editProfile.svg";
import adminPic from "../../../../assets/icons/userPic.svg";
import Input from "../../../../components/shared/input";
import Button from "../../../../components/shared/button";
import UpdateGeneralSetting from "../../../../components/modals/updateGeneralSetting";
import CustomSelect from "../../../../components/shared/select";

const ProfileSetting = () => {
  const navigate = useNavigate();
  const [isUpdateSetting, setIsUpdateSetting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(adminPic);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const reportTypeOptions = [
    { value: "Light", label: "Light" },
    { value: "Dark", label: "Dark" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-8 ">
        <div className="flex gap-2 items-center">
          <Icon
            icon="eva:arrow-back-outline"
            width="24"
            height="24"
            style={{ color: "#000" }}
            onClick={() => navigate("/admin-home")}
            className="cursor-pointer"
          />
          <p className="large font-bold">Profile Settings</p>
        </div>

        <div className="bg-white rounded-lg py-8 px-7 pb-[90px] flex flex-col gap-9 justify-start w-[80%]">
          {/* Img div */}
          <div className="size-[100px] relative">
            <img
              className="w-full h-full object-cover rounded-full"
              src={selectedImage}
              alt="Profile"
            />

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              className="hidden"
              onChange={handleImageChange}
            />

            {/* Camera Icon (Triggers File Upload) */}
            <img
              className="absolute bottom-0 right-0 cursor-pointer"
              src={editIcon}
              alt="Upload"
              onClick={() => document.getElementById("fileInput").click()}
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-y-5 gap-x-4">
            <Input
              type="text"
              label="Name"
              wrapperClass="w-[100%]"
              placeholder="abc xyz"
              className="w-full"
            />

            <Input
              type="email"
              label="Email"
              wrapperClass="w-[100%]"
              placeholder="abc@123.com"
              className="w-full"
            />

            <Input
              type="number"
              label="Number"
              wrapperClass="w-[100%]"
              placeholder="723827391"
              className="w-full"
            />

            <CustomSelect
              placeholder="Light"
              options={reportTypeOptions}
              label="Preferences"
              wrapperClasses="!w-full flex flex-col gap-2 "
            />
          </div>

          <Button
            onClick={() => setIsUpdateSetting(true)}
            text="Edit"
            className="bg-primary rounded-lg text-white p-4 small font-semibold max-w-[174px] w-full"
          />
        </div>
      </div>

      <UpdateGeneralSetting
        isUpdateSetting={isUpdateSetting}
        setIsUpdateSetting={setIsUpdateSetting}
      />
    </>
  );
};

export default ProfileSetting;
