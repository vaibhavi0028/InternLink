"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Done from "../../public/images/interview-done.svg";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  experience: string;
  education: string;
  appliedDate: string;
  compatibilityScore: string;
  rankImage: string;
  onViewMore: () => void;
  onSave: () => void;
  isInterviewComplete: boolean;
}

export default function ShortlistedApplicants() {
  const [showModel, setShowModel] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<UserInfo | null>(
    null
  );
  const [showDialog, setShowDialog] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [savedApplicants, setSavedApplicants] = useState<
    Record<string, boolean>
  >({});
  const [interviewStatus, setInterviewStatus] = useState<
    Record<string, boolean>
  >({});
  const [interviewSaved, setInterviewSaved] = useState(false);

  const shortlistedApplicants: UserInfo[] = [
    {
      name: "Vaibhavi",
      email: "vaibhavi@gmail.com",
      phone: "123-456-7890",
      profileImage: "/images/candidate-profile.png",
      experience: "1 Year Experience",
      education: "Jai Hind College",
      appliedDate: "03 Oct, 2024",
      compatibilityScore: "87%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("vaibhavi@gmail.com"),
      isInterviewComplete: interviewStatus["vaibhavi@gmail.com"] || false,
    },
    {
      name: "Ronald Richards",
      email: "ronald@example.com",
      phone: "987-654-3210",
      profileImage: "/images/candidate-profile.png",
      experience: "3 Years Experience",
      education: "XYZ College",
      appliedDate: "05 Oct, 2024",
      compatibilityScore: "92%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("ronald@example.com"),
      isInterviewComplete: interviewStatus["ronald@gmail.com"] || false,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-123-4567",
      profileImage: "/images/candidate-profile.png",
      experience: "2 Years Experience",
      education: "ABC College",
      appliedDate: "06 Oct, 2024",
      compatibilityScore: "85%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("jane.smith@example.com"),
      isInterviewComplete: interviewStatus["jane.smith@gmail.com"] || false,
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "444-555-6666",
      profileImage: "/images/candidate-profile.png",
      experience: "4 Years Experience",
      education: "DEF College",
      appliedDate: "07 Oct, 2024",
      compatibilityScore: "90%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("john.doe@example.com"),
      isInterviewComplete: interviewStatus["john.doe@gmail.com"] || false,
    },
    {
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "123-789-4560",
      profileImage: "/images/candidate-profile.png",
      experience: "5 Years Experience",
      education: "GHI College",
      appliedDate: "08 Oct, 2024",
      compatibilityScore: "88%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("alice@example.com"),
      isInterviewComplete: interviewStatus["alice@gmail.com"] || false,
    },
    {
      name: "David Lee",
      email: "david@example.com",
      phone: "111-222-3333",
      profileImage: "/images/candidate-profile.png",
      experience: "6 Years Experience",
      education: "JKL College",
      appliedDate: "09 Oct, 2024",
      compatibilityScore: "95%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("david@example.com"),
      isInterviewComplete: interviewStatus["david@gmail.com"] || false,
    },
    {
      name: "Emily Clark",
      email: "emily@example.com",
      phone: "333-444-5555",
      profileImage: "/images/candidate-profile.png",
      experience: "7 Years Experience",
      education: "MNO College",
      appliedDate: "10 Oct, 2024",
      compatibilityScore: "91%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("emily@example.com"),
      isInterviewComplete: interviewStatus["emily@gmail.com"] || false,
    },
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      phone: "666-777-8888",
      profileImage: "/images/candidate-profile.png",
      experience: "8 Years Experience",
      education: "PQR College",
      appliedDate: "11 Oct, 2024",
      compatibilityScore: "93%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("michael@example.com"),
      isInterviewComplete: interviewStatus["michael@gmail.com"] || false,
    },
    {
      name: "Emily Clark",
      email: "emily2@example.com",
      phone: "333-444-5555",
      profileImage: "/images/candidate-profile.png",
      experience: "7 Years Experience",
      education: "MNO College",
      appliedDate: "10 Oct, 2024",
      compatibilityScore: "91%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("emily2@example.com"),
      isInterviewComplete: interviewStatus["emily2@gmail.com"] || false,
    },
    {
      name: "Michael Johnson",
      email: "michael2@example.com",
      phone: "666-777-8888",
      profileImage: "/images/candidate-profile.png",
      experience: "8 Years Experience",
      education: "PQR College",
      appliedDate: "11 Oct, 2024",
      compatibilityScore: "93%",
      rankImage: "/images/rank-vector.svg",
      onViewMore: () => setShowModel(true),
      onSave: () => handleSave("michael2@example.com"),
      isInterviewComplete: interviewStatus["michael2@gmail.com"] || false,
    },
  ];

  const handleSave = useMemo(
    () => (email: string) => {
      setSavedApplicants((prevState) => ({
        ...prevState,
        [email]: !prevState[email],
      }));
    },
    []
  );

  const handleViewMore = (applicant: UserInfo) => {
    setSelectedApplicant(applicant); 
    setShowModel(true); 
  };

  const applicantsPerPage = 8;

  const currentApplicants = useMemo(
    () =>
      shortlistedApplicants.slice(
        currentPage * applicantsPerPage,
        (currentPage + 1) * applicantsPerPage
      ),
    [currentPage, shortlistedApplicants]
  );

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * applicantsPerPage < shortlistedApplicants.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleInterviewStatus = (email: string, status: boolean) => {
    setInterviewStatus((prevState) => ({
      ...prevState,
      [email]: status,
    }));
    if (selectedApplicant?.email === email) {
      setSelectedApplicant({
        ...selectedApplicant,
        isInterviewComplete: status,
      });
    }
    setShowDialog(false); 
  };

  return (
    <div className="flex h-screen w-screen bg-[#FAF9FB]">
      <Sidebar />

      <div className="flex flex-col w-full p-6 md:p-12 pt-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-black">
            Shortlisted Applicants
          </h1>
        </div>

        <div className="flex justify-center mb-4">
          <button className="bg-[#1C73E8] text-white text-sm px-4 py-2 rounded-xl">
            Saved
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <hr className="w-1/2 h-[1.5px] border-gray-300" />
        </div>

        <div className="max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentApplicants.map((applicant, index) => (
              <div
                key={index}
                className="h-[285px] w-full sm:w-[280px] md:w-[285px] bg-white shadow-lg border rounded-lg p-3"
              >
                <div className="bg-gray-100 rounded-xl shadow-md w-full h-full p-3 box-border">
                  <div className="flex items-center justify-between">
                    <Image
                      src={applicant.profileImage}
                      alt="Candidate Profile"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={applicant.rankImage}
                          alt="Rank Icon"
                          width={34}
                          height={34}
                        />
                        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xs">
                          R{index + 1}
                        </span>
                      </div>
                      <button className="bg-white p-2 rounded-[100%] shadow-sm">
                        <Image
                          src={
                            applicant.isInterviewComplete
                              ? Done
                              : savedApplicants[applicant.email]
                              ? "/images/save-vector.svg"
                              : "/images/unsave-vector.svg"
                          }
                          alt={
                            applicant.isInterviewComplete
                              ? "Interview Done"
                              : "Save Icon"
                          }
                          width={14}
                          height={14}
                          onClick={applicant.onSave}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="mt-1">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {applicant.name}
                    </h3>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="border border-black rounded-xl p-1.5 w-max max-w-full">
                      <p className="text-xs text-black">
                        {applicant.experience}
                      </p>
                    </div>
                    <div className="border border-black rounded-xl p-1.5 w-max max-w-full">
                      <p className="text-xs text-black">
                        Education: {applicant.education}
                      </p>
                    </div>
                    <div className="border border-black rounded-xl p-1.5 w-max max-w-full">
                      <p className="text-xs text-black">
                        Applied: {applicant.appliedDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <button
                      className="bg-black text-white text-sm px-4 py-2 rounded-xl"
                      onClick={() => handleViewMore(applicant)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full"
            >
              <Image src="/images/prev.svg" alt="Prev" width={36} height={36} />
            </button>
            <button
              onClick={handleNextPage}
              disabled={
                (currentPage + 1) * applicantsPerPage >=
                shortlistedApplicants.length
              }
              className="p-2 rounded-full"
            >
              <Image src="/images/next.svg" alt="Next" width={36} height={36} />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-2 py-4">
          <p className="text-sm text-black font-inter">
            Copyright @Internlink 2024
          </p>
        </div>
      </div>

      {showModel && selectedApplicant && (
        <Modal
          isOpen={showModel}
          onClose={() => setShowModel(false)}
          userInfo={selectedApplicant}
          setShowDialog={setShowDialog}
        />
      )}

      {showDialog && selectedApplicant && (
        <DialogComponent
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          toggleInterviewStatus={toggleInterviewStatus}
          email={selectedApplicant.email}
        />
      )}
    </div>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInfo: UserInfo;
  setShowDialog: (show: boolean) => void;
  toggleInterviewStatus: (email: string, status: boolean) => void;
}

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  userInfo: UserInfo;
  setShowDialog: (show: boolean) => void;
}> = ({ isOpen, onClose, userInfo, setShowDialog }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white rounded-3xl shadow w-full max-w-[800px] h-auto md:h-[685px]">
        <div className="bg-[#EBEFF3] rounded-tl-3xl rounded-tr-3xl flex justify-between items-start p-8 w-full shadow-md">
          <div className="flex items-center justify-center">
            <Image
              src={userInfo.profileImage}
              alt="Profile"
              width={76}
              height={76}
              className=" rounded-full"
            />
            <div className="ml-5">
              <div className="flex space-x-2">
                <Image
                  src="/images/rank.svg"
                  alt="Rank Icon"
                  width={34}
                  height={34}
                />
                {userInfo.isInterviewComplete && (
                  <Image
                    src={Done}
                    alt="Interview Done"
                    width={30}
                    height={30}
                  />
                )}
              </div>

              <p className="text-black text-[25.68px] font-inter font-semibold">
                {" "}
                {userInfo.name}{" "}
                <span className="bg-[#D8B913] text-white text-[13px] font-inter font-semibold leading-[19.39px] p-2 rounded-lg">
                  Compatibility score 87%
                </span>
              </p>
            </div>
          </div>
          <button onClick={onClose} className="rounded">
            <Image src="/images/cross.png" alt="cross" width={23} height={23} />
          </button>
        </div>
        <div className="flex items-center w-full h-[79.8%]">
          <div className="flex flex-col justify-around items-center w-[30%] h-full rounded-bl-3xl bg-[#EBEFF3] mt-[0.9px]">
            <div className="border w-[201px] border-[#6C6C6C] bg-[#FDFDFD] rounded-lg p-4">
              <h1 className="text-black text-[18px] font-inter font-semibold">
                Education
              </h1>
              <div className="flex flex-col items-center h-[180px] overflow-y-auto">
                <div className="flex items-center mt-5">
                  <Image
                    src="/images/job-profile-image.png"
                    alt="Education"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-center ml-5">
                    <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start">
                      UI/UX Designer{" "}
                    </p>
                    <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start mt-1">
                      2021 - 3 Months
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    src="/images/job-profile-image.png"
                    alt="Education"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-center ml-5">
                    <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start">
                      UI/UX Designer{" "}
                    </p>
                    <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start mt-1">
                      2021 - 3 Months
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <Image
                    src="/images/job-profile-image.png"
                    alt="Education"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-center ml-5">
                    <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start">
                      UI/UX Designer{" "}
                    </p>
                    <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start mt-1">
                      2021 - 3 Months
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-[201px] border-[#6C6C6C] bg-[#FDFDFD] rounded-lg p-4">
              <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
                Download Resume
              </button>
            </div>
            <div className="border w-[201px] border-[#6C6C6C] bg-[#FDFDFD] rounded-lg p-4">
              <h1 className="text-black text-[12px] font-inter font-semibold">
                Contact Information
              </h1>
              <div className="flex flex-col items-start h-[80px] ">
                <div className="flex items-center mt-3">
                  <Image
                    src="/images/phone.png"
                    alt="Education"
                    width={18}
                    height={18}
                  />
                  <div className="flex flex-col items-start ml-5">
                    <p className="text-[#4C4C4C] text-[10px] font-inter font-medium text-start">
                      Phone{" "}
                    </p>
                    <p className="text-[#000000] text-[10px] font-inter font-medium text-start mt-1">
                      +91 8451922278
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src="/images/email.png"
                    alt="Education"
                    width={18}
                    height={18}
                  />
                  <div className="flex flex-col items-start ml-5">
                    <p className="text-[#4C4C4C] text-[10px] font-inter font-medium text-start">
                      Email
                    </p>
                    <p className="text-[#000000] text-[10px] font-inter font-medium text-start">
                      dixitgauransh41@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%] h-full p-8">
            <div className="flex flex-col items-start">
              <h1 className="text-black text-[16px] font-inter font-semibold ">
                INTRODUCTION
              </h1>
              <p className="text-[#616161] text-[14px] font-inter font-normal mt-1">
                Are you tired of staring at a blank screen and struggling to
                come up with the perfect introduction for your blog posts,
                articles, or essays? Look no further! Our Introduction Generator
                tool is here to revolutionize how you start your written pieces.
                Say goodbye to writer’s block and hello to engaging,
                attention-grabbing introductions effortlessly.
              </p>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h1 className="text-black text-[16px] font-inter font-semibold ">
                COVER LETTER
              </h1>
              <p className="text-[#616161] text-[14px] font-inter font-normal mt-1">
                Are you tired of staring at a blank screen and struggling to
                come up with the perfect introduction for your blog posts,
                articles, or essays? Look no further! Our Introduction Generator
                tool is here to revolutionize how you start your written pieces.
                Say goodbye to writer’s block and hello to engaging,
                attention-grabbing introductions effortlessly.
              </p>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h1 className="text-black text-[16px] font-inter font-semibold ">
                SOCIAL MEDIA
              </h1>
              <div className="flex items-center mt-2">
                <Image
                  src="/images/github.png"
                  alt="Github"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <Image
                  src="/images/linkedin.png"
                  alt="Linkedin"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="flex justify-end items-start space-between mt-16">
              {userInfo.isInterviewComplete && (
                <div className="text-[16px] mt-6 mr-6">
                  Interview Remarks: Done
                </div>
              )}
              <button
                className="bg-black text-white text-sm px-4 py-2 rounded-md mt-4 mr-6"
                onClick={() => setShowDialog(true)}
              >
                {userInfo.isInterviewComplete ? (
                  <div className="flex space-x-2">
                    <Image
                      src="/images/pencil-vector.svg"
                      alt="edit"
                      width={14}
                      height={14}
                    />
                    <span>Edit</span>
                  </div>
                ) : (
                  "Give Interview Remarks"
                )}
              </button>
              <button className="bg-black text-white text-sm px-4 py-2 rounded-md mt-4">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DialogComponent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  toggleInterviewStatus: (email: string, status: boolean) => void;
  email: string;
}> = ({ isOpen, onClose, toggleInterviewStatus, email }) => {
  const [status, setStatus] = useState(false);
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleCheckboxChange = (checked: boolean) => {
    setStatus(checked);
  };
  const handleSave = () => {
    toggleInterviewStatus(email, status);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={handleClickOutside}
      style={{ zIndex: 999 }}
    >
      <div
        className="dialog-content max-w-2xl p-0 gap-0 bg-white rounded-lg pt-8"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 1000 }}
      >
        <div className="dialog-body px-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="remark"
              className="block text-black font-inter font-semibold text-[22px] sm:text-[20px] md:text-[22px]"
            >
              Interview Remark
            </label>
            <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-[12px] md:text-[14px]">
              Describe the responsibilities of this job and other specific
              requirements here
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="status"
              className="flex gap-1 text-black font-inter font-bold text-[16px] sm:text-[14px] md:text-[16px]"
            >
              Interview Status
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="status"
                className="h-5 w-5 border-[2px] border-black rounded-[5px] mr-2 cursor-pointer"
                onChange={(e) => handleCheckboxChange(e.target.checked)}
                checked={status}
              />
              <Image src={Done} alt="Done" width={20} height={20} />
              <label
                htmlFor="status"
                className="font-inter font-medium text-black text-[16px] sm:text-[14px] md:text-[16px] cursor-pointer"
              >
                Interview Completed
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="skills"
              className="flex gap-1 text-black font-inter font-bold text-[16px] sm:text-[14px] md:text-[16px]"
            >
              How well did the candidate demonstrate the required technical
              skills?
              <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="excellent"
                  name="skills"
                  value="excellent"
                  className="peer hidden"
                />
                <label
                  htmlFor="excellent"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:bg-[#6563FF] peer-checked:text-white"
                >
                  Excellent
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="good"
                  name="skills"
                  value="good"
                  className="peer hidden"
                />
                <label
                  htmlFor="good"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:bg-[#6563FF] peer-checked:text-white"
                >
                  Good
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="lacks"
                  name="skills"
                  value="lacks"
                  className="peer hidden"
                />
                <label
                  htmlFor="lacks"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:bg-[#6563FF] peer-checked:text-white"
                >
                  Lacks the necessary technical skills
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="problem-solving"
              className="flex gap-1 text-black font-inter font-bold text-[16px] sm:text-[14px] md:text-[16px]"
            >
              How effectively did the candidate handle problem-solving or
              situational questions?
              <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="problem-excellent"
                  name="problem-solving"
                  value="excellent"
                  className="hidden peer"
                />
                <label
                  htmlFor="problem-excellent"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:text-white peer-checked:bg-[#6563FF]"
                >
                  Excellent
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="problem-good"
                  name="problem-solving"
                  value="good"
                  className="hidden peer"
                />
                <label
                  htmlFor="problem-good"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:text-white peer-checked:bg-[#6563FF]"
                >
                  Good
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="problem-poor"
                  name="problem-solving"
                  value="poor"
                  className="hidden peer"
                />
                <label
                  htmlFor="problem-poor"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:text-white peer-checked:bg-[#6563FF]"
                >
                  Lacks the Necessary Technical Skills
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="adaptability"
              className="flex gap-1 text-black font-inter font-bold text-[16px] sm:text-[14px] md:text-[16px]"
            >
              How adaptable did the candidate appear in terms of handling
              unexpected questions or challenges?
              <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="adaptable"
                  name="adaptability"
                  value="adaptable"
                  className="peer hidden"
                />
                <label
                  htmlFor="adaptable"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:bg-[#6563FF] peer-checked:text-white"
                >
                  Adaptable
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="somewhat"
                  name="adaptability"
                  value="somewhat"
                  className="peer hidden"
                />
                <label
                  htmlFor="somewhat"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:bg-[#6563FF] peer-checked:text-white"
                >
                  Somewhat rigid
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="rigid"
                  name="adaptability"
                  value="rigid"
                  className="peer hidden"
                />
                <label
                  htmlFor="rigid"
                  className="rounded-full px-3 py-1 text-sm border border-[#9A9A9A] text-[#9A9A9A] cursor-pointer peer-checked:bg-[#6563FF] peer-checked:text-white"
                >
                  Very rigid
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="dialog-footer flex justify-end gap-4 p-6 border-t">
          <button
            className="outline-button border-2 border-[#444444] text-[#444444] bg-transparent px-12 py-2 rounded-md w-auto font-bold"
            onClick={onClose}
          >
            Back
          </button>

          <button
            className="save-button text-white bg-[#0074E8] px-12 py-2 rounded-md w-auto"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
