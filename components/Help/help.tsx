"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "What is UX design?",
      answer:
        "UX design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.",
      isOpen: false,
    },
    {
      question: "What are the key principles of UX design?",
      answer:
        "The key principles of UX design include user-centered design, consistency, hierarchy, accessibility, feedback, and simplicity. These principles help create intuitive and enjoyable user experiences.",
      isOpen: false,
    },
    {
      question: "What is the difference between UX and UI design?",
      answer:
        "While UX design focuses on the overall experience and functionality, UI design deals with the visual elements and interface that users interact with. UI is a part of UX, but UX encompasses the entire user journey.",
      isOpen: false,
    },
    {
      question: "What is a wireframe?",
      answer:
        "A wireframe is a basic visual guide that represents the skeletal framework of a website or application. It focuses on layout, structure, and functionality rather than visual design elements.",
      isOpen: false,
    },
    {
      question: "What is user testing?",
      answer:
        "User testing is the process of evaluating a product by testing it with representative users. It helps identify usability issues and areas for improvement in the design.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div className="flex h-screen w-screen bg-[#FAF9FB]">
      <Sidebar />
      <div className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-black font-inter font-bold text-[clamp(30px,4vw,40px)]">
            Help / FAQs
          </h1>

          <div className="flex justify-center mb-6 my-8">
            <hr className="w-full h-[1.5px] border-gray-300" />
          </div>

          <div className="relative max-w-xs mx-auto mb-8 shadow-sm rounded-lg">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Image
                src="images/search.svg"
                alt="Search"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              placeholder="Search more query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-md text-[15px] placeholder-[#777373] focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="space-y-4 mx-auto max-w-5xl">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-[#D8D8D8] overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 flex justify-between items-center" 
                  >
                    <h2 className="text-black font-inter font-bold text-[clamp(20px,2.5vw,25px)] text-left">
                      {faq.question}
                    </h2>
                    <Image
                      src={
                        faq.isOpen
                          ? "images/up-vector.svg"
                          : "images/down-vector.svg"
                      }
                      alt={faq.isOpen ? "Close" : "Open"}
                      width={24}
                      height={24}
                    />
                  </button>
                  {faq.isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-black font-inter font-normal text-[clamp(13px,1.5vw,15px)]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-black font-inter text-lg">
                No FAQs found for your search.
              </p>
            )}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-12 mb-16">
            <div className="flex items-center gap-4 bg-white rounded px-4 py-3 shadow-lg">
              <Image
                src="images/call-vector.svg"
                alt="Phone"
                width={24}
                height={24}
              />
              <div>
                <p className="text-black font-inter font-medium text-[clamp(13px,1.5vw,15px)]">
                  Our 24×7 Customer Service
                </p>
                <a
                  href="tel:0227873784"
                  className="text-black font-inter font-semibold text-[clamp(16px,1.8vw,18px)] underline"
                >
                  0227873784
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded px-4 py-3 shadow-lg">
              <Image
                src="images/message-vector.svg"
                alt="Email"
                width={24}
                height={24}
              />
              <div>
                <p className="text-black font-inter font-medium text-[clamp(13px,1.5vw,15px)]">
                  Write us at
                </p>
                <a
                  href="mailto:support@internlink.com"
                  className="text-black font-inter font-semibold text-[clamp(16px,1.8vw,18px)] underline"
                >
                  support@internlink.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-black-500">
          Copyright @Internlink 2024
        </div>
      </div>
    </div>
  );
}
