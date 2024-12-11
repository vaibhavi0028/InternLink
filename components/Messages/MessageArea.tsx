"use client";
import { useState } from "react";
import MessageInput from "./MessageInput";

const MessageArea = () => {
  const [isPlusMenuOpen, setPlusMenuOpen] = useState(false);
  const [isDotsMenuOpen, setDotsMenuOpen] = useState(false);

  const togglePlusMenu = () => {
    setPlusMenuOpen(!isPlusMenuOpen);
    setDotsMenuOpen(false);
  };

  const toggleDotsMenu = () => {
    setDotsMenuOpen(!isDotsMenuOpen);
    setPlusMenuOpen(false);
  };

  const closeMenus = () => {
    setPlusMenuOpen(false);
    setDotsMenuOpen(false);
  };

  const messages = [
    {
      sender: "Saige Fuentes",
      time: "10:30 PM",
      content: "Hey, happy to hear from you. Yes, I will be back in a couple of days.",
    },
    {
      sender: "Saige Fuentes",
      time: "10:35 PM",
      content: "Here are some designs I took earlier today.",
      images: ["images/msg1.jpg", "images/msg2.jpg"],
    },
    { sender: "You", time: "10:40 PM", content: "Great! That's a nice design idea." },
  ];

  return (
    <div className="flex flex-col h-full relative" onClick={closeMenus}>
      <div className="flex items-center justify-between border-b pb-4 mb-1 px-4">
        <div className="flex items-center">
          <img
            src="images/contact-pic.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Saige Fuentes</h2>
            <div className="flex flex-row gap-3">
              <p className="text-sm font-bold text-green-500">Online</p>
              <span className="text-sm text-gray-400">
                UI/UX Design Job | Course Compass
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="images/plus.svg"
              alt="Plus"
              className="w-5 h-5 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                togglePlusMenu();
              }}
            />
            {isPlusMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Invite for Interview
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Schedule for an Interview
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <img
              src="images/dots.svg"
              alt="Dots"
              className="w-5 h-5 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleDotsMenu();
              }}
            />
            {isDotsMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Delete Chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center py-1">
        <p className="text-[#6B7C93] font-medium">Today, March 24</p>
      </div>

      <div className="flex-grow p-2 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => {
          const isSender = msg.sender !== "You";
          const showDetails = idx === 0 || messages[idx - 1].sender !== msg.sender;

          return (
            <div key={idx}>
              {showDetails && (
                <div
                  className={`flex items-center gap-4 mb-2 ${isSender ? "" : "justify-start flex-row-reverse"}`}
                >
                  <img
                    src={isSender ? "images/contact-pic.png" : "images/contact-pic.jpg"}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-bold">{msg.sender}</p>
                  <p className="text-sm text-gray-400">{msg.time}</p>
                </div>
              )}
              <div className={`flex ${isSender ? "" : "justify-end"} space-x-2`}>
                <div
                  className={`max-w-sm p-3 rounded-lg ${isSender ? "bg-[#EAEAEA] text-[#626262]" : "bg-blue-500 text-white"}`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
              {msg.images && isSender && (
                <div className="flex space-x-2 mt-2">
                  {msg.images.map((img, i) => (
                    <img key={i} src={img} alt="Attachment" className="w-20 h-28 rounded-md" />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default MessageArea;
