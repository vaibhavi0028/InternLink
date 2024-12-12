"use client";
import { useState, useEffect } from "react";
import MessageInput from "./MessageInput";
import { MouseEvent } from "react";

type Message = {
  sender: string;
  time: string;
  content: string | JSX.Element;
  images?: string[];
  showDetails?: boolean;
};

const MessageArea = () => {
  const [isPlusMenuOpen, setPlusMenuOpen] = useState(false);
  const [isDotsMenuOpen, setDotsMenuOpen] = useState(false);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [meetLink, setMeetLink] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" }); // Get full month name
  const currentYear = currentDate.getFullYear();
  const [isAvatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [avatarIcon, setAvatarIcon] = useState("images/avatar-vector.svg");

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "Saige Fuentes",
      time: "10:30 PM",
      content:
        "Hey, happy to hear from you. Yes, I will be back in a couple of days.",
    },
    {
      sender: "Saige Fuentes",
      time: "10:35 PM",
      content: "Here are some designs I took earlier today.",
      images: ["images/msg1.jpg", "images/msg2.jpg"],
    },
    {
      sender: "You",
      time: "10:40 PM",
      content: "Great! That's a nice design idea.",
    },
  ]);

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

  const handleScheduleInterviewClick = () => {
    setDatePickerOpen(true);
    closeMenus();
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform(e.target.value);
  };

  const handleMeetLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetLink(e.target.value);
  };

  const handleInviteClick = (interviewType: string) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "You",
        time,
        content: (
          <div className="bg-[#EAEAEA] text-[#626262] rounded-tl-lg">
            <div className="flex items-center bg-[#1C73E8] text-[#FFFFFF] p-4 rounded-bl-lg rounded-tl-lg rounded-br-lg">
              <img src="images/invite.svg" alt="CIP Art" className="mr-3" />
              <h3 className="font-dm-sans font-medium text-sm">
                Interview Invitation
              </h3>
            </div>
            <div className="p-4 bg-[#EAEAEA] text-[#626262]">
              <p>Hi Saige Fuentes,</p>
              <p className="mt-1">Which interview format would you prefer?</p>
              <div className="mt-4 mb-4 space-y-2 w-[85%] mx-auto">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-center bg-white border rounded-md hover:bg-gray-100 font-dm-sans text-[#626262]"
                  onClick={() =>
                    handleResponse("1. AI Interview by company name")
                  }
                >
                  1. AI Interview by company name
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-center bg-white border rounded-md hover:bg-gray-100 font-dm-sans text-[#626262]"
                  onClick={() => handleResponse("2. Official recruiter")}
                >
                  2. Official recruiter
                </button>
              </div>
            </div>
          </div>
        ),
      },
    ]);
  };

  const handleResponse = (response: string) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "Saige Fuentes",
        time,
        content: response,
        showDetails: true,
      },
    ]);
  };

  const handleInterviewCompletedClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAvatarIcon("images/interview-done.svg");
    setAvatarMenuOpen(false);
  };

  const handleAvatarClick = () => {
    setAvatarMenuOpen((prev) => !prev);
  };

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
          <div className="relative">
            <img
              src={avatarIcon}
              alt="Avatar"
              className="ml-4 w-9 h-9 cursor-pointer"
              onClick={handleAvatarClick} 
            />
            {isAvatarMenuOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                <button
                  onClick={handleInterviewCompletedClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Interview Completed
                </button>
              </div>
            )}
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInviteClick("Interview Invitation");
                    closeMenus();
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Invite for Interview
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScheduleInterviewClick();
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Schedule Interview
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
                <button className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <img
                    src="images/bin.svg"
                    alt="Delete"
                    className="w-5 h-5 mr-2"
                  />
                  Delete Chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-grow p-2 overflow-y-auto space-y-4 custom-scrollbar max-h-[450px]">
        <div className="text-center py-1">
          <p className="text-[#6B7C93] font-medium">Today, March 24</p>
        </div>

        {messages.map((msg, idx) => {
          const isSender = msg.sender !== "You";

          const showDetails =
            idx === 0 || messages[idx - 1].sender !== msg.sender;

          return (
            <div key={idx}>
              {showDetails && (
                <div
                  className={`flex items-center gap-4 mb-2 ${
                    isSender ? "" : "justify-start flex-row-reverse"
                  }`}
                >
                  <img
                    src={
                      isSender
                        ? "images/contact-pic.png"
                        : "images/contact-pic.jpg"
                    }
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-bold text-[#626262]">{msg.sender}</p>
                  <p className="text-sm text-gray-400">{msg.time}</p>
                </div>
              )}
              <div
                className={`flex ${isSender ? "" : "justify-end"} space-x-2`}
              >
                <div
                  className={`max-w-sm rounded-lg bg-[#EAEAEA] text-[#626262] ${
                    typeof msg.content === "string" ? "p-3" : "rounded-tl-lg"
                  }`}
                >
                  {typeof msg.content === "string" ? (
                    <p className="text-sm">{msg.content}</p>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
              {msg.images && isSender && (
                <div className="flex space-x-2 mt-2">
                  {msg.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Attachment"
                      className="w-30 h-48 rounded-md"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isDatePickerOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-[#EAEAEA] rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex items-center bg-[#1C73E8] text-[#FFFFFF] p-4 rounded-t-lg">
              <img
                src="images/invite.svg"
                alt="invite"
                className="mr-3 w-6 h-6"
              />
              <h3 className="font-dm-sans font-medium text-md flex-1">
                Schedule Interview
              </h3>
              <button
                onClick={() => setDatePickerOpen(false)}
                className="rounded"
              >
                <img
                  src="/images/cross2.png"
                  alt="cross"
                  width={14}
                  height={14}
                />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg">
                <div className="relative flex flex-col items-center">
                  <div className="relative">
                    <img
                      src="images/cal.svg"
                      alt="Calendar Icon"
                      className="w-32 h-32"
                    />
                    <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dm-sans text-[60px] font-bold text-[#95A5A6] text-center">
                      {currentDay}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-dm-sans text-lg font-medium text-[#626262]">
                      {currentMonth}
                    </div>
                    <div className="font-dm-sans text-md font-light text-[#626262]">
                      {currentYear}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <label className="font-semibold">Title</label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold">Date</label>
                    <input
                      type="date"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      onChange={(e) =>
                        handleDateSelect(new Date(e.target.value))
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold">Time</label>
                    <input
                      type="time"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={time}
                      onChange={handleTimeChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold">Platform</label>
                    <input
                      type="text"
                      placeholder="Enter platform"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={platform}
                      onChange={handlePlatformChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold">Meet Link</label>
                    <input
                      type="text"
                      placeholder="Enter meet link"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={meetLink}
                      onChange={handleMeetLinkChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 w-full flex items-center justify-center">
                <button
                  className="bg-[#1C73E8] text-white font-dm-sans font-semibold px-6 py-2 w-[50%] rounded-md"
                  onClick={() => {
                    setIsSubmitting(true);
                    if (title && selectedDate && time && platform && meetLink) {
                      const formattedDate = selectedDate
                        ? selectedDate.toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })
                        : "N/A";

                      const formattedTime = time ? `${time} IST` : "N/A";

                      setMessages((prevMessages) => [
                        ...prevMessages,
                        {
                          sender: "You",
                          time: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                          content: (
                            <div className="bg-[#EAEAEA] text-[#626262] rounded-tl-lg">
                              <div className="flex items-center bg-[#1C73E8] text-[#FFFFFF] p-4 rounded-bl-lg rounded-tl-lg rounded-br-lg">
                                <img
                                  src="images/invite.svg"
                                  alt="CIP Art"
                                  className="mr-3"
                                />
                                <h3 className="font-dm-sans font-medium text-sm">
                                  Interview Invitation
                                </h3>
                              </div>
                              <div className="p-4 bg-[#EAEAEA] text-[#626262]">
                                <p>Hi Saige Fuentes,</p>
                                <p className="mt-4">
                                  Can you please confirm your availability for
                                  the mentioned date and time? Let me know in
                                  case of reschedule.
                                </p>
                                <p className="mt-4 mb-4">
                                  Thanks,
                                  <br />
                                  Gauransh
                                </p>
                                <div className="bg-white p-4 rounded-lg">
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex justify-center md:col-span-1">
                                      <div className="relative flex flex-col items-center">
                                        <img
                                          src="images/cal.svg"
                                          alt="Calendar"
                                          className="w-28 h-28"
                                        />
                                        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-dm-sans text-[48px] font-bold text-[#95A5A6] text-center">
                                          {new Date(formattedDate).getDate()}
                                        </div>
                                        <div className="mt-2 text-center">
                                          <div className="font-dm-sans text-md font-medium text-[#626262]">
                                            {new Date(
                                              formattedDate
                                            ).toLocaleString("default", {
                                              month: "long",
                                            })}
                                            ,{" "}
                                            {new Date(
                                              formattedDate
                                            ).getFullYear()}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col ml-4 justify-start md:col-span-2 text-right">
                                      <div className="font-bold text-2xl text-left text-[#434343]">
                                        {title}
                                      </div>
                                      <div className="mt-4 text-left text-[#626262]">
                                        <p>Date: {formattedDate}</p>
                                        <p>Time: {formattedTime}</p>
                                        <p>Platform: {platform}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-4">
                                  <div>Join with video link:</div>
                                  <div className="flex items-center mt-2">
                                    <div className="bg-white p-4 rounded-lg w-full flex items-center justify-between">
                                      <span>{meetLink}</span>
                                      <img
                                        src="images/copy-icon.svg"
                                        alt="Copy"
                                        className="ml-2 cursor-pointer"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ),
                        },
                      ]);
                      setDatePickerOpen(false);
                    }
                  }}
                  disabled={
                    title === "" ||
                    !selectedDate ||
                    !time ||
                    platform === "" ||
                    meetLink === ""
                  }
                >
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <MessageInput />
    </div>
  );
};

export default MessageArea;
