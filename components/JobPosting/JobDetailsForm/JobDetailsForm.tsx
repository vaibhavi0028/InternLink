"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import JoditEditor, { Jodit } from 'jodit-react';

export default function Component() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState('Full Time');
  const [selectedOffice, setSelectedOffice] = useState('Work From Home');
  const [selectedIncentive, setSelectedIncentive] = useState('Flexible Working Hours');
  const [selectedProficiency, setSelectedProficiency] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [content, setContent] = useState('');
  const formRef = useRef<HTMLDivElement>(null)
  const editor = useRef(null);


  const config = useMemo(() => ({
      readonly: false,
      buttons: [
        'bold', 'italic', 'underline', 'strikethrough'
      , 'ul'
      ],
      placeholder: 'Enter the job description, including the main responsibilities and the task of the employee...'
  }), []);



  const steps = [
    { id: 1, name: "Job Details" },
    { id: 2, name: "Candidate Requirements" },
    { id: 3, name: "Interviewer Information" },
    { id: 4, name: "Job Preview" },
    { id: 5, name: "Publish Job" },
  ]

  const incentives = [
    { id: 1, name: "Weekly Pay Out" },
    { id: 2, name: "Overtime Pay" },
    { id: 3, name: "Joining Bonus" },
    { id: 4, name: "Annual Bonus" },
    { id: 5, name: "Travel Allowance (TA)" },
    { id: 6, name: "Paid Accommodation" },
    { id: 7, name: "Mobile Allowance" },
    { id: 8, name: "Internet Allowance" },
    { id: 9, name: "Health Insurance" },
    { id: 10, name: "ESI (ESIC)" },
    { id: 11, name: "Food and Meals" },
    { id: 12, name: "Petrol Allowance" },
    { id: 13, name: "Flexible Working Hours" },
  ];

  const educationLevels = [
    { id: 1, name: "10th or below 10th" },
    { id: 2, name: "12th pass" },
    { id: 3, name: "Diploma" },
    { id: 4, name: "Graduate" },
    { id: 5, name: "Postgraduate" },
  ];

  const proficiencyLevels = [
    { id: 1, name: "Basic English" },
    { id: 2, name: "Good English" },
    { id: 3, name: "Fluent English" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const sections = formRef.current.querySelectorAll("section")
        const scrollPosition = formRef.current.scrollTop + formRef.current.clientHeight / 2

        let activeSection = 1
        sections.forEach((section, index) => {
          if (section.offsetTop <= scrollPosition) {
            activeSection = index + 1
          }
        })
        setActiveStep(activeSection)
      }
    }

    const currentFormRef = formRef.current
    if (currentFormRef) {
      currentFormRef.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (currentFormRef) {
        currentFormRef.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
      <div className="flex flex-col items-start justify-start p-6 bg-[#FAF9FB] w-full max-w-screen h-screen"> 
           <div className="flex items-center gap-x-3"> 
              <img src="images/interlink-logo.png" alt="Internlink Logo" className="w-8 h-8" />
              <span className="font-semibold">Internlink</span>
           </div>
            <div className="w-full h-full mx-auto">
                  <div className="mt-5">
                      <h1 className="font-inter text-[1.46em] font-bold leading-[1.2 em] text-left text-[#000000]">Hello Rahul.</h1>
                      <p className="font-inter text-[1 em] font-bold leading-[1 em] text-left text-[#626262]">Grow your team by posting a job</p>
                  </div>
                  {/* Timeline*/}
                  <div className="mt-8 flex">
                        {/* Timeline Left Side */}
                        <div className="w-44 p-6 bg-white h-[500px] rounded-lg border border-[#E4E4E4]">
                          <div className="space-y-0 relative h-full">
                          {steps.map((step, index) => (
                            <div key={step.id} className="relative">
                            <div className="py-2 text-center"> 
                            <span
                            className={`text-sm font-medium ${
                            activeStep >= step.id ? "text-primary font-semibold" : "text-[#808080] font-inter"
                            }`}
                            >
                            {step.name}
                            </span>
                            </div>
                            {index < steps.length - 1 && (
                            <div className="h-10 w-0.5 mx-auto bg-blue-500 relative">
                            {index === 0 && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            {index === steps.length - 2 && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            </div>
                            )}
                            </div>
                          ))}
                          </div>
                        </div> 

                        {/* Right Side Details Form */}
                        <div ref={formRef} className="flex-1 p-6 bg-white h-[500px] rounded-lg border border-[#E4E4E4] ml-4 overflow-y-auto ">
                          <h2 className="font-inter text-[1.125em] font-semibold leading-[1.96em] tracking-[-0.0336em] text-left">Create Job Post with AI</h2>
                          <div className="flex items-center justify-start mt-3">
                                <div className="flex items-center justify-start mr-6">
                                  <img src="images/interlink-ai.png" alt="AI" className="w-100 h-14 object-contain" />
                                </div>
                                <div className="flex bg-gray-200 text-gray-700 border border-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg h-14 w-full lg:w-3/4 xl:w-2/3">
                                  <input
                                  type="text"
                                  placeholder="Enter the prompt"
                                  className="bg-transparent flex-grow focus:outline-none"
                                  />
                                  <button className="p-2 flex items-center justify-center ml-auto">
                                    <span className="sr-only">Send prompt</span>
                                    <img src="images/arrow-button.png" alt="Send prompt" className="w-6 h-6" />
                                  </button>
                                </div>
                          </div>
                          <div className="flex items-center justify-center my-4">
                            <hr className="w-[102px] h-[1px] border-gray-300"/>
                              <p className="mx-2 text-dark font-inter text-[0.8125em] font-semibold leading-[1.3125em] tracking-[-0.02em] text-left">or</p>
                            <hr className="w-[102px] h-[1px] border-gray-300"/>
                          </div>
                          {/* Job Details Section */}
                          <section id = "job-details">
                              <div className="flex flex-col items-start">
                                <h3 className="font-inter text-[1.2em] font-bold leading-[2.204375em] tracking-[-0.0336em] text-left text-[#000000]">Job Details</h3>
                                <p className="font-inter text-[0.87em] font-medium leading-[1.05875em] text-left text-[#626262]">We use this information to find best candidates for the job</p>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[1em] font-medium leading-[1.215em] text-left mb-4">
                                  Company you are hiring for
                                  <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <input
                                  type="text"
                                  placeholder="Company Name"
                                  className="font-inter p-4 bg-transparent flex-grow w-[391.61px] h-[45.03px] border-[0.8px] border-[#9A9A9A] rounded-[7.24px]"
                                  />
                                </div>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[1em] font-medium leading-[1 em] text-left mb-4">
                                    Job title / Designation
                                    <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Frontend Developer"
                                    className="font-inter p-4 bg-transparent flex-grow w-[391.61px] h-[45.03px] border-[0.8px] border-[#9A9A9A] rounded-[7.24px]"
                                  />
                                </div>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[1em] font-medium leading-[1 em] text-left mb-4">
                                    Number of employees in your company 
                                    <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <div className="flex space-x-4">
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="full-time"
                                        className="sr-only"
                                        onChange={() => setSelectedOption('full-time')}
                                        checked={selectedOption === 'full-time'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOption === 'full-time'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOption('full-time')}
                                      >
                                        Full Time
                                      </span>
                                    </label>
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="part-time"
                                        className="sr-only"
                                        onChange={() => setSelectedOption('part-time')}
                                        checked={selectedOption === 'part-time'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOption === 'part-time'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOption('part-time')}
                                      >
                                        Part Time
                                      </span>
                                    </label>
                                  </div>
                                  <div className="flex items-center space-x-4 mt-5">
                                      <input type="checkbox" id="night-shift" />
                                        <label htmlFor="night-shift" className="font-inter text-[0.875em] font-medium leading-[1.0625em] text-left ">
                                        This is a night shift job
                                        </label>
                                  </div>
                                </div>
                              </div>
                              <hr className="w-[444px] h-[1.5px] border-gray-300 mt-12"/>
                              {/* {Location} */}
                              <div className="flex flex-col items-start mt-8">
                                <h3 className="font-inter text-[1.2em] font-bold leading-[2.204375em] tracking-[-0.0336em] text-left text-[#000000]">Location</h3>
                                <p className="font-inter text-[0.87em] font-medium leading-[1.05875em] text-left text-[#626262]">Let candidates know where they will be working from.</p>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[0.9 em] font-medium leading-[1 em] text-left mb-4">
                                    Work location type
                                    <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <div className="flex space-x-4">
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="Work From Office"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('Work From Office')}
                                        checked={selectedOffice === 'Work From Office'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'Work From Office'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('Work From Office')}
                                      >
                                        Work From Office
                                      </span>
                                    </label>
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="Work From Home"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('Work From Home')}
                                        checked={selectedOffice === 'Work From Home'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'Work From Home'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('Work From Home')}
                                      >
                                        Work From Home
                                      </span>
                                    </label>
                                  </div>
                                  <div className="mt-5 flex flex-col">
                                    <label className="font-inter text-[0.9 em] font-medium leading-[1 em] text-left mb-4 mt-4">
                                    Job City
                                        <span className="font-inter text-[16.08px] leading-[19.46px] text-left text-[#FF0000] font-semibold"> *</span>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Mumbai"
                                      className="font-inter p-4 bg-transparent flex-grow w-[391.61px] h-[45.03px] border-[0.8px] border-[#9A9A9A] rounded-[7.24px]"
                                    />
                                </div>
                                </div>
                              </div>
                              <hr className="w-[444px] h-[1.5px] border-gray-300 mt-12"/>
                              {/* {Job Description} */}
                              <div className="flex flex-col items-start mt-8">
                                <h3 className="font-inter text-[1.2em] font-bold leading-[2.204375em] tracking-[-0.0336em] text-left text-[#000000]">Compensation</h3>
                                <p className="font-inter text-[0.87em] font-medium leading-[1.05875em] text-left text-[#626262]">Job posting with right salary & incentives will help you find the right candidates.</p>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[0.9 em] font-medium leading-[1 em] text-left mb-4">
                                    What is the pay type
                                    <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <div className="flex space-x-4">
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="Fixed Only"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('Fixed Only')}
                                        checked={selectedOffice === 'Fixed Only'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'Fixed Only'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('Fixed Only')}
                                      >
                                        Fixed Only
                                      </span>
                                    </label>
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="Fixed + Incentive"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('Fixed + Incentive')}
                                        checked={selectedOffice === 'Fixed + Incentive'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'Fixed + Incentive'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('Fixed + Incentive')}
                                      >
                                        Fixed + Incentive
                                      </span>
                                    </label>
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="Incentive Only"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('Incentive Only')}
                                        checked={selectedOffice === 'Incentive Only'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'Incentive Only'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('Incentive Only')}
                                      >
                                        Incentive Only
                                      </span>
                                    </label>
                                  </div>

                                </div>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[0.9em] font-medium leading-[1em] text-left mb-6 mt-4">
                                    Do you offer any additional perks? 
                                    <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 items-center">
                                    {incentives.map((incentive) => (
                                      <label className="flex items-center mr-4" key={incentive.id}>
                                        <input
                                          type="radio"
                                          name="employment-type"
                                          value={incentive.name}
                                          className="sr-only mr-2"
                                          onChange={() => setSelectedIncentive(incentive.name)}
                                          checked={selectedIncentive === incentive.name}
                                        />
                                        <span
                                          className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                            selectedIncentive === incentive.name
                                              ? "border-customGray text-customGray"
                                              : "border-customGray text-customGray"
                                          } hover:bg-gray-100 active:bg-gray-200`}
                                          onClick={() => setSelectedIncentive(incentive.name)}
                                        >
                                          {incentive.name}
                                        </span>
                                      </label>
                                    ))}
                                  </div>
                                    <button className="font-inter text-[14.7px] font-medium leading-[17.79px] text-left text-[#098740] mt-5"> <span className="font-inter text-[14.7px] font-semibold leading-[17.79px] text-left text-[#098740]">+ </span>Add other perks</button>
                                </div>
                                <div className="mt-5 flex flex-col">
                                  <label className="font-inter text-[0.9 em] font-medium leading-[1 em] text-left mb-4 mt-5">
                                    Is there any joining fee or deposit required from the candidate? 
                                    <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <div className="flex space-x-4">
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="Yes"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('Yes')}
                                        checked={selectedOffice === 'Yes'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'Yes'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('Yes')}
                                      >
                                        Yes
                                      </span>
                                    </label>
                                    <label className="flex items-center">
                                      <input
                                        type="radio"
                                        name="employment-type"
                                        value="No"
                                        className="sr-only"
                                        onChange={() => setSelectedOffice('No')}
                                        checked={selectedOffice === 'No'}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedOffice === 'No'
                                            ? 'border-customGray text-customGray'
                                            : 'border-customGray text-customGray'
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedOffice('No')}
                                      >
                                        No
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <hr className="w-[444px] h-[1.5px] border-gray-300 mt-12 mb-12"/>
                              {/* <div className="flex justify-end">
                                  <button className="font-inter text-[1.125em] font-semibold leading-[1.36em] text-center text-[#FFFFFF] bg-[#0074E8] py-[0.5em] px-[1em] rounded-[0.45em] w-[12.5em] h-[2.81em]">
                                    Continue
                                  </button>
                              </div> */}
                          </section>
                          
                          {/* Candidate Requirements Section */}
                          <section id = "candidate-requirements">
                              <div className="flex flex-col items-start">
                                  <h3 className="font-inter text-[1.2em] font-bold leading-[2.204375em] tracking-[-0.0336em] text-left text-[#000000]">Candidate requirements</h3>
                                  <p className="font-inter text-[0.87em] font-medium leading-[1.05875em] text-left text-[#626262]">We will use this requirement details to make your job visible to write candidates</p>
                              </div>
                              <div className="flex flex-col mt-5">
                                <label className="font-inter text-[1 em] font-medium mb-4">
                                  Minimum education
                                  <span className="text-[#FF0000]"> *</span>
                                </label>
                                <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 items-center">
                                  {educationLevels.map((level) => (
                                    <label className="flex items-center mr-4" key={level.id}>
                                      <input
                                        type="radio"
                                        name="education-level"
                                        value={level.name}
                                        className="sr-only mr-2"
                                        onChange={() => setSelectedLevel(level.name)}
                                        checked={selectedLevel === level.name}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedLevel === level.name
                                            ? "border-customGray text-customGray"
                                            : "border-gray-300 text-gray-600"
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedLevel(level.name)}
                                      >
                                        {level.name}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col mt-5">
                                <label className="font-inter text-[0.9em] font-medium mb-4">
                                  English level required
                                  <span className="text-[#FF0000]"> *</span>
                                </label>
                                <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 items-center">
                                  {proficiencyLevels.map((level) => (
                                    <label className="flex items-center mr-4" key={level.id}>
                                      <input
                                        type="radio"
                                        name="proficiency-level"
                                        value={level.name}
                                        className="sr-only mr-2"
                                        onChange={() => setSelectedProficiency(level.name)}
                                        checked={selectedProficiency === level.name}
                                      />
                                      <span
                                        className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                          selectedProficiency === level.name
                                            ? "border-customGray text-customGray"
                                            : "border-gray-300 text-gray-600"
                                        } hover:bg-gray-100 active:bg-gray-200`}
                                        onClick={() => setSelectedProficiency(level.name)}
                                      >
                                        {level.name}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div className="mt-5 flex flex-col">
                                <label className="font-inter text-[0.9em] font-medium leading-[1em] text-left mb-4">
                                  Total experience required
                                  <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                </label>
                                <div className="flex space-x-4">
                                  {/* Experience only option */}
                                  <label className="flex items-center">
                                    <input
                                      type="radio"
                                      name="experience-required"
                                      value="Experience only"
                                      className="sr-only"
                                      onChange={() => setSelectedExperience("Experience only")}
                                      checked={selectedExperience === "Experience only"}
                                    />
                                    <span
                                      className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                        selectedExperience === "Experience only"
                                          ? "border-customGray text-customGray"
                                          : "border-customGray text-customGray"
                                      } hover:bg-gray-100 active:bg-gray-200`}
                                      onClick={() => setSelectedExperience("Experience only")}
                                    >
                                      Experience only
                                    </span>
                                  </label>

                                  {/* Fresher only option */}
                                  <label className="flex items-center">
                                    <input
                                      type="radio"
                                      name="experience-required"
                                      value="Fresher only"
                                      className="sr-only"
                                      onChange={() => setSelectedExperience("Fresher only")}
                                      checked={selectedExperience === "Fresher only"}
                                    />
                                    <span
                                      className={`px-4 py-2 border rounded-full cursor-pointer transition ${
                                        selectedExperience === "Fresher only"
                                          ? "border-customGray text-customGray"
                                          : "border-customGray text-customGray"
                                      } hover:bg-gray-100 active:bg-gray-200`}
                                      onClick={() => setSelectedExperience("Fresher only")}
                                    >
                                      Fresher only
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div className="mt-5 flex flex-col">
                                <label className="font-inter text-[0.9em] font-medium leading-[1em] text-left mb-4">
                                  Candidate from which other job title or role can apply
                                  <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                </label>
                                
                                <div className="flex flex-wrap gap-4">
                                  <label className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name="job-role"
                                      value="UX Designer"
                                      className="sr-only" 
                                    />
                                    <span
                                      className="px-4 py-2 border rounded-full cursor-pointer transition border-customGray text-customGray bg-[#0074E824] flex items-center"
                                    >
                                      UX Designer
                                      <button
                                        type="button"
                                        className="ml-2 text-red-500"
                                      >
                                        <img
                                          src="/images/remove-image.png" 
                                          alt="Remove"
                                          className="w-3 h-3"
                                        />
                                      </button>
                                    </span>
                                  </label>
                                  <label className="flex items-center">
                                    <input
                                      type="checkbox"
                                      name="job-role"
                                      value="Product Designer"
                                      className="sr-only "
                                    />
                                    <span
                                      className="px-4 py-2 border rounded-full cursor-pointer transition border-customGray text-customGray bg-[#0074E824] flex items-center"
                                    >
                                      Product Designer
                                      <button
                                        type="button"
                                        className="ml-2 text-red-500"
                                      >
                                        <img
                                          src="/images/remove-image.png" 
                                          alt="Remove"
                                          className="w-3 h-3" 
                                        />
                                      </button>
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div className="mt-5">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="font-inter p-4 bg-transparent flex-grow w-[391.61px] h-[45.03px] border-[0.8px] border-[#9A9A9A] rounded-[7.24px]"
                                    />
                              </div>
                              <hr className="w-[444px] h-[1.5px] border-gray-300 mt-12 mb-12"/>

                              {/* {Job Description - 1} */}
                              <div className="flex flex-col items-start">
                                <h3 className="font-inter text-[1.2em] font-bold leading-[2.204375em] tracking-[-0.0336em] text-left text-[#000000]">Job Description</h3>
                                <p className="font-inter text-[0.87em] font-medium leading-[1.05875em] text-left text-[#626262]">Describe the responsibilities of this job and other specific requirements here</p>
                                <div className="mt-5 flex flex-col w-[90%]">
                                  <label className="font-inter text-[1em] font-medium leading-[1.215em] text-left mb-4">
                                    Job description/additional requirements 
                                  <span className="font-inter text-[16.08px] font-medium leading-[19.46px] text-left text-[#FF0000]"> *</span>
                                  </label>
                                  <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    // tabIndex={1} // tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                  />
                                </div>
                              </div>
                          </section>
                           
                           {/* Interviewr Information */}
                            
                           <section id = 'interviewer-information'>
                              <div className="flex flex-col items-start mt-16">
                                  <h3 className="font-inter text-[1.2em] font-bold leading-[2.204375em] tracking-[-0.0336em] text-left text-[#000000]">Interview methods and address</h3>
                                  <p className="font-inter text-[0.87em] font-medium leading-[1.05875em] text-left text-[#626262]"> let's let candidate know how interview will be conducted for this job</p>    
                              </div>
                              <div className="mt-8">
                              <label className="block font-inter text-[1em] font-medium leading-[1.215em] text-left mb-2">Format of Interview <span className="text-[#FF0000]"> *</span></label>
                                    <div className="flex flex-col mb-4">
                                        <label className="flex items-center mb-2 font-inter text-[0.9em] font-medium leading-[1em] text-left mt-2">
                                        <input
                                          type="radio"
                                          name="interview_format"
                                          value="In Person"
                                          className="mr-2"
                                          style={{ accentColor: 'black' }}
                                        />
                                        In Person/Walk-In Interview
                                        </label>
                                      <label className="flex items-center mb-2 font-inter text-[0.9em] font-medium leading-[1em] text-left mt-2">
                                        <input
                                          type="radio"
                                          name="interview_format"
                                          value="Telephonic"
                                          className="mr-2"
                                          defaultChecked
                                          style={{ accentColor: 'black' }}
                                        />
                                        Telephonic/Online Interview
                                      </label>
                                    </div>

                                    <label className="block font-inter text-[1em] font-medium leading-[1.215em] text-left mb-4">Company address <span className="text-[#FF0000]"> *</span></label>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="font-inter p-4 bg-transparent flex-grow w-[391.61px] h-[45.03px] border-[0.8px] border-[#9A9A9A] rounded-[7.24px]"
                                    />

                                    <hr className="w-[444px] h-[1.5px] border-gray-300 mt-12 mb-10"/>

                                    <h2 className="font-inter text-[1.375em] font-semibold leading-[2.20587 em] tracking-[-0.0336em] text-left mb-6">Communication Preferences</h2>
                                    <p className="font-inter text-[1em] font-medium leading-[1.215em] text-left text-dark mb-4">Do you want candidates to contact you via call, email, or WhatsApp after applying?<span className="text-[#FF0000]"> *</span></p>
                                    <div className="flex flex-col mb-4">
                                      <label className="flex items-center mb-2 font-inter text-[0.9em] font-medium leading-[1em] text-left mt-2">
                                        <input
                                          type="radio"
                                          name="contact_preference"
                                          value="Yes"
                                          className="mr-2"
                                          style={{ accentColor: 'black' }}
                                        />
                                        Yes
                                      </label>
                                      <label className="flex items-center mb-2 font-inter text-[0.9em] font-medium leading-[1em] text-left mt-2">
                                        <input
                                          type="radio"
                                          name="contact_preference"
                                          value="No"
                                          className="mr-2"
                                          defaultChecked
                                          style={{ accentColor: 'black' }}
                                        />
                                        No, I Will Contact Candidate First
                                      </label>
                                    </div>
                                    {/* <div className="flex justify-between mt-6">
                                      <button
                                        className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400"
                                        onClick={() => alert('Back button clicked')}
                                      >
                                        Back
                                      </button>
                                      <button
                                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                                      >
                                        Continue
                                      </button>
                                    </div> */}
                              </div>
                           </section>
                           
                           {/* Job Preview */}
                           <section id = 'job-preview'>
                                <div className="flex items-center mt-5">
                                  <img src="images/job-bag.png" className="w-[2 em] h-[2 em] mr-6" />
                                  <h1 className="font-inter text-[1.6em] font-bold leading-[2.633125em] tracking-[-0.0401em] text-left mt-2">Jobs</h1>
                                </div>
                                <hr className="w-[444px] h-[1.5px] border-gray-300 mt-2 mb-4"/>
                                
                                <div className=" w-[40%]">
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Company Name</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em] ">Internlink</span>
                                  </div>
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Job Title</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">UI UX Design Designer</span>
                                  </div>
                                  <div className="flex justify-between  mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Job Role/Category</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">UI UX Design</span>
                                  </div>
                                  <div className="flex justify-between  mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Job Type</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Full Time</span>
                                  </div>
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Work Type</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Work From Home</span>
                                  </div>
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Job City</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Mumbai</span>
                                  </div>
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Monthly Salary | Pay Type</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">₹2000 Per Month</span>
                                  </div>
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Additional Perks</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Flexible Working Hours</span>
                                  </div>
                                  <div className="flex justify-between mb-4">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Joining Fee</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">No</span>
                                  </div>
                                </div>
                           </section>

                            {/* Publish Job*/}
                            <section id = 'publish-job'>
                                <div className="flex item-center mt-6">
                                  <img src="images/community.png" alt="Requirements Icon" className="w-[2.625em] h-[2.625em] mr-4" />
                                  <h2 className="flex items-center text-[#000000] font-Inter text-[1.34375em] font-semibold leading-[2.332em] tracking-[-0.040125em] text-left">
                                    Candidate Requirements
                                  </h2>
                                </div>
                                <hr className="w-[444px] h-[1.5px] border-gray-300 mt-2 mb-4"/>
                                <div className=" w-[40%]">
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Minimum Education</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Graduate </span>
                                  </div>
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Experience Required</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Freshers Only</span>
                                  </div>
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">English</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]"> Fluent English</span>
                                  </div>
                                </div>
                                <div className="flex item-center mt-6">
                                  <img src="images/interview.png" alt="Requirements Icon" className="w-[2.625em] h-[2.625em] mr-4" />
                                  <h2 className="flex items-center text-[#000000] font-Inter text-[1.34375em] font-semibold leading-[2.332em] tracking-[-0.040125em] text-left">
                                    Interview Information
                                  </h2>
                                </div>
                                <hr className="w-[444px] h-[1.5px] border-gray-300 mt-2 mb-4"/>
                                <div className=" w-[40%] mb-0">
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Type of Interview</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]"> Telephonic/Online </span>
                                  </div>
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Company Address</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Mumbai</span>
                                  </div>
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">HR Details</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Gauransh, 8451922278, dixitgauransh41@gmail.com</span>
                                  </div>
                                  <div className="flex items-center justify-between mb-5">
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">Can Candidates Contact</span>
                                    <span className="text-[#4E4E4E] font-inter text-[0.84375em] font-medium leading-[1.1em]">No</span>
                                  </div>
                                </div>
                            </section>

                        </div>
                  </div>
            </div>
      </div>
  )
}
