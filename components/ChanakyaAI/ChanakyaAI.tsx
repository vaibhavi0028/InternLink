"use client";
import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const ChanakyaAI = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      <Sidebar />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-100`}
      >
        <div className="flex items-center justify-between p-4 pt-6">
          <img
            src="images/right.svg"
            alt="Expand"
            className="w-5 h-5 cursor-pointer"
            onClick={toggleSidebar}
          />
          <img
            src="images/expand2.svg"
            alt="Expand"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <hr className="border-t border-white mt-4 border-t-[0.1px]" />
        <div className="p-4">
          <p className="text-[19px] mb-4">Yesterday</p>
          <ul className="mt-2 space-y-2 text-[15px]">
            <li className="flex items-center space-x-2 mb-3">
              <img
                src="images/msg-vector.svg"
                alt="Message"
                className="w-4 h-4"
              />
              <span>Summarize the candidate...</span>
            </li>
            <li className="flex items-center space-x-2 mb-3">
              <img
                src="images/msg-vector.svg"
                alt="Message"
                className="w-4 h-4"
              />
              <span>Highlight the candidate’s key...</span>
            </li>
            <li className="flex items-center space-x-2 mb-3">
              <img
                src="images/msg-vector.svg"
                alt="Message"
                className="w-4 h-4"
              />
              <span>Is the candidate eligible...</span>
            </li>
            <li className="flex items-center space-x-2 mb-3">
              <img
                src="images/msg-vector.svg"
                alt="Message"
                className="w-4 h-4"
              />
              <span>Analyze the candidate's GitHub...</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="w-full mb-8 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-500">CV Chanakya AI</h1>
          <div className="flex justify-between items-center space-between">
            <img
              src="images/expand1.svg"
              alt="Expand"
              className="w-6 h-6 cursor-pointer mr-8"
            />
            <img
              src="images/left.svg"
              alt="Expand"
              className="w-5 h-5 cursor-pointer mr-4"
              onClick={toggleSidebar}
            />
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <div className="w-full max-w-3xl space-y-8 align-center">
            <div className="flex items-start space-x-4 mb-8 flex-col">
              <div>
                <img
                  src="images/ai-vector.svg"
                  alt="Avatar"
                  className="w-14 h-14 ml-5 mb-6"
                />
              </div>
              <div>
                <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                  Welcome!
                </h1>
                <p className="text-black mt-2 text-sm sm:text-base md:text-lg font-normal mb-3">
                  Tell me what's on your mind, or pick a suggestion.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start p-4 bg-white shadow-lg rounded-lg"
                >
                  <div className="pt-1 pb-3">
                    <img
                      src={`images/ai${index + 1}.svg`}
                      alt={`AI Icon ${index + 1}`}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="max-w-full">
                    <p className="text-sm text-gray-500 break-words">
                      SummarizeSummarizeSummarizeSummarizevSummarizeSumm
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center fixed bottom-6 sm:left-0 sm:right-0 sm:z-10">
  <div className="w-full sm:max-w-2xl sm:w-3/4 flex items-center bg-white shadow-lg sm:rounded-full px-4 py-2 sm:py-2 sm:px-4 sm:z-0">
                <img
                  src="images/clip-vector.svg"
                  alt="Clip"
                  className="w-6 h-6"
                />
                <input
                  type="text"
                  placeholder="Message CV Chanakya AI"
                  className="flex-1 mx-2 px-2 py-1 bg-transparent focus:outline-none text-black placeholder-black"
                />
                <img src="images/send.svg" alt="Send" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChanakyaAI;
