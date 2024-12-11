"use client";
import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

export default function Settings() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Gauransh",
    lastName: "Dixit",
    phone: "91+ 8451922278",
    companyName: "Zomato",
    gstin: "29GGGGG1314R9Z6",
    email: "johndoe@gmail.com",
    password: "password",
  });
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  const saveChanges = () => {
    console.log("Changes saved!");
  };

  const handleEmailPasswordChange = () => {
    if (newEmail) {
      setFormData((prev) => ({ ...prev, email: newEmail }));
    }
    if (newPassword) {
      setFormData((prev) => ({ ...prev, password: newPassword }));
    }
    setNewEmail("");
    setNewPassword("");
    togglePopup();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex h-screen w-screen bg-[#FAF9FB]">
      <Sidebar />
      <div className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold font-inter text-black text-[clamp(30px,4vw,40px)]">
              Profile
            </h1>
            <button
              onClick={handleEdit}
              disabled={isEditing}
              className={`px-4 py-2 text-white text-sm font-inter font-medium text-[clamp(14px,2vw,18px)] rounded 
                ${
                  isEditing
                    ? "bg-[#0074E8] bg-opacity-65"
                    : "bg-[#0074E8] hover:bg-blue-600"
                }`}
            >
              Edit
            </button>
          </div>
          <div className="flex justify-center mb-6">
            <hr className="w-full h-[1.5px] border-gray-300" />
          </div>
          <div className="bg-white rounded-lg shadow p-10 space-y-8">
            <div className="space-y-8">
              <div>
                <h2 className="mt-4 text-lg font-semibold font-inter text-black text-[clamp(18px,2.5vw,23px)]">
                  Personal Details
                </h2>
                <p className="text-sm mt-2 text-[#5B5B5B] font-inter font-medium text-[clamp(12px,2vw,13px)]">
                  Update your personal information.
                </p>
              </div>
              <div className="grid gap-16 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-black text-sm font-semibold font-medium font-inter text-[clamp(15px,2vw,19px)]"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-3 py-2 border rounded pl-9 
                        ${
                          isEditing
                            ? "bg-white text-black"
                            : "bg-[#F1EFEC] text-[#797979]"
                        }`}
                    />
                    <img
                      src="images/profile.svg"
                      alt="Profile Icon"
                      className="absolute left-3 top-2.5 w-4 h-4"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-black font-semibold text-sm font-medium font-inter text-[clamp(15px,2vw,19px)]"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-3 py-2 border rounded pl-9 
                        ${
                          isEditing
                            ? "bg-white text-black"
                            : "bg-[#F1EFEC] text-[#797979]"
                        }`}
                    />
                    <img
                      src="images/profile.svg"
                      alt="Profile Icon"
                      className="absolute left-3 top-2.5 w-4 h-4"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="phone"
                  className="text-black font-semibold text-sm font-medium font-inter text-[clamp(15px,2vw,19px)]"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full max-w-[300px] px-3 py-2 border rounded pl-9 
                      ${
                        isEditing
                          ? "bg-white text-black"
                          : "bg-[#F1EFEC] text-[#797979]"
                      }`}
                  />
                  <img
                    src="images/call.svg"
                    alt="Call Icon"
                    className="absolute left-3 top-2.5 w-4 h-4 mb-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="w-full h-[1.5px] border-gray-300 mt-8" />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="mt-16 mb-2 text-lg font-semibold font-inter text-black text-[clamp(18px,2.5vw,23px)]">
                  Company Details / Verification
                </h2>
                <p className="text-sm mb-8 text-[#5B5B5B] font-inter font-medium text-[clamp(12px,2vw,13px)]">
                  View and update your company details.
                </p>
              </div>
              <div className="grid gap-12 sm:grid-cols-2 w-3/4">
                <div className="space-y-2">
                  <label
                    htmlFor="companyName"
                    className="text-black font-semibold text-sm font-medium font-inter text-[clamp(15px,2vw,19px)]"
                  >
                    Company Name
                  </label>
                  <div className="relative">
                    <input
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-3 py-2 border rounded pl-9 
                        ${
                          isEditing
                            ? "bg-white text-black"
                            : "bg-[#F1EFEC] text-[#797979]"
                        }`}
                    />
                    <img
                      src="images/company.svg"
                      alt="Company Icon"
                      className="absolute left-3 top-2.5 w-4 h-4"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="gstin"
                    className="text-black font-semibold text-sm font-medium font-inter text-[clamp(15px,2vw,19px)]"
                  >
                    GSTIN
                  </label>
                  <div className="relative">
                    <input
                      id="gstin"
                      value={formData.gstin}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full px-3 py-2 border rounded pl-9 
                        ${
                          isEditing
                            ? "bg-white text-black"
                            : "bg-[#F1EFEC] text-[#797979]"
                        }`}
                    />
                    <img
                      src="images/lock.svg"
                      alt="Lock Icon"
                      className="absolute left-3 top-2.5 w-4 h-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="mt-16 mb-8 text-lg font-semibold font-inter text-black text-[clamp(18px,2.5vw,23px)]">
                Login Details
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-black font-semibold text-sm font-medium font-inter text-[clamp(15px,2vw,19px)]"
                  >
                    Login Email
                  </label>
                  <div className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={true}
                        className={`w-full px-3 py-2 border rounded pl-9 
                          ${
                            isEditing
                              ? "bg-white text-black"
                              : "bg-[#F1EFEC] text-[#797979]"
                          }`}
                      />
                      <img
                        src="images/envelope.svg"
                        alt="Envelope Icon"
                        className="absolute left-3 top-2.5 w-4 h-4"
                      />
                    </div>
                    <button
                      className="px-4 py-2 bg-black text-white text-sm font-inter font-bold text-[clamp(11px,2vw,13px)] rounded hover:bg-gray-800"
                      onClick={togglePopup}
                      disabled={!isEditing}
                    >
                      Change Email
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-black font-semibold text-sm font-medium font-inter text-[clamp(15px,2vw,19px)]"
                  >
                    Login Password
                  </label>
                  <div className="relative flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        disabled={true}
                        className={`w-full px-3 py-2 border rounded pl-9 
                          ${
                            isEditing
                              ? "bg-white text-black"
                              : "bg-[#F1EFEC] text-[#797979]"
                          }`}
                      />
                      <img
                        src="images/lock.svg"
                        alt="Lock Icon"
                        className="absolute left-3 top-2.5 w-4 h-4"
                      />
                    </div>
                    <button
                      className="px-4 py-2 bg-black text-white text-sm font-inter font-bold text-[clamp(11px,2vw,13px)] rounded hover:bg-gray-800"
                      onClick={togglePopup}
                      disabled={!isEditing}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={handleUpdate}
                disabled={!isEditing}
                className={`px-3 py-2 text-white font-inter font-medium text-lg text-[clamp(13px,2vw,18px)] rounded 
                  ${
                    isEditing
                      ? "bg-[#0074E8] hover:bg-blue-600"
                      : "bg-[#0074E8] bg-opacity-65"
                  }`}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-black-500">
          Copyright @Internlink 2024
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-black font-inter font-semibold text-[clamp(20px,4vw,24px)] mb-6">
              Update Your Login Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-black font-inter font-semibold text-[clamp(12px,2vw,14px)]">
                  Login Email ID
                </label>
                <div className="relative w-full px-3 py-2 mt-2 border rounded bg-[#F1EFEC] text-[#797979]">
                  <img
                    src="images/envelope.svg"
                    alt="Envelope Icon"
                    className="absolute left-3 top-2.5 w-4 h-4"
                  />
                  <span className="w-full px-3 py-2 border rounded pl-6 bg-[#F1EFEC] text-[#797979]">
                    {formData.email}
                  </span>
                </div>
                <div className="relative mt-4">
                  <input
                    id="newEmail"
                    type="email"
                    placeholder="New Email Id"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded pl-9 bg-[#F1EFEC] text-[#797979]"
                  />
                  <img
                    src="images/envelope.svg"
                    alt="Envelope Icon"
                    className="absolute left-3 top-2.5 w-4 h-4"
                  />
                </div>
              </div>
              <div>
                <label className="text-black font-inter font-semibold text-[clamp(12px,2vw,14px)]">
                  Login Password
                </label>
                <div className="relative mt-4">
                  <input
                    id="oldPassword"
                    type="password"
                    placeholder="Old Password"
                    className="w-full px-3 py-2 border rounded pl-9 bg-[#F1EFEC] text-[#797979]"
                  />
                  <img
                    src="images/lock.svg"
                    alt="Lock Icon"
                    className="absolute left-3 top-2.5 w-4 h-4"
                  />
                </div>
                <div className="relative mt-4">
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded pl-9 bg-[#F1EFEC] text-[#797979]"
                  />
                  <img
                    src="images/lock.svg"
                    alt="Lock Icon"
                    className="absolute left-3 top-2.5 w-4 h-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleEmailPasswordChange}
                className="px-4 py-2 bg-[#0074E8] text-white font-inter font-medium text-[clamp(14px,2vw,18px)] rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
