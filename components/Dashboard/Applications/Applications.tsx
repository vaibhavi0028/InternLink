'use client'
import { Delete } from "lucide-react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

import { useState } from 'react';

export default function Applications() {

    const [showModel, setShowModel] = useState(false);
    const [deleteJobPose, setDeleteJobPose] = useState(false);
    const router = useRouter();
    const userInfo = {
        name: 'Praveen Chasta',
        email: 'praveen.chastaa@gmail.com',
        phone: '123-456-7890',
        profileImage: '/images/candidate-profile.png',
        experience: '1 Year Experience',
        education: 'Jai Hind College',
        appliedDate: '03 Oct, 2024',
        compatibilityScore: '87%',
        rankImage: '/images/rank.png',
        onViewMore: () => setShowModel(true),
        onSave: () => console.log('Saved'),
    };

    const rankCompatibility = [
        {
          rank: "Top 10",
          compatibilityScore: "80% and above",
          backgroundColor: '#E7C300',
          rankUrl: '/images/rank.png'
        },
        {
          rank: "Top 30",
          compatibilityScore: "60% to 79%",
          backgroundColor: '#69CAFF',
          rankUrl:'images/rank-11.png'
        },
        {
          rank: "Top 50",
          compatibilityScore: "40% to 59%",
          backgroundColor: '#FF9900',
          rankUrl:'images/rank-31.png'
        },
        {
          rank: "Top 100",
          compatibilityScore: "20% to 39%",
          backgroundColor: '#FF5E5E',
          rankUrl:'images/rank-51.png'
        },
        {
          rank: "Top 1000",
          compatibilityScore: "Below 20%",
          backgroundColor: '#B20000',
          rankUrl:'images/rank-101.png'
        },
      ];
      

    return(
        <>
            <div className="flex flex-col h-screen w-screen">
                    <div className="flex items-center justify-between w-full h-[150px] p-4 pl-16 pr-16 bg-[#EBEFF3] shadow-md">
                        <div className="flex items-center">
                            <div className="image">
                                <img src="images/job-profile-image.png" alt="job-profile"  className="rounded-lg"/>
                            </div>
                            <div className="flex flex-col ml-8">
                                <h1 className="text-2xl font-bold leading-tight text-[#000000] mb-3">
                                    UI / UX Designer 
                                </h1>
                                <p className="text-[#777777] text-[20px] font-inter font-medium break-words">Course Compass</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-end">
                            <button className="text-center w-[155px] font-semibold p-2 rounded-[29.74px] border-[1.8px] border-[#000000] mb-3" onClick={() => setDeleteJobPose(true)}>Job Setting</button>
                            <p className="text-[#777777] text-[19px] font-inter font-medium break-words">Posted on 02 October 2024 | Rahul</p>
                        </div>
                    </div>
                    {/* Application Details */}
                    <div className="flex items-start h-screen w-screen">
                        {/* Left Side Filter Section */}
                        <div className="flex flex-col h-full w-[20%] p-8">
                            <button className="flex items-center mb-8" onClick={() => router.push('/jobs')}>
                                <img src="images/left-arrow.png" alt="back-button" className="mr-3" />
                                <span className="text-black text-[1em] font-inter font-semibold break-words">Back</span>
                            </button>
                            <h1 className="text-black text-[1.33em] font-inter font-semibold break-words mt-2 mb-4">Filters</h1>
                            <div className="relative w-[13em] h-[2.5em]">
                                <select className="w-full h-full bg-white rounded-md border-[0.13em] border-[#9A9A9A] appearance-none pl-4 pr-8">
                                    <option value="UI/UX Designer" className="text-black text-[0.75em] font-inter font-medium break-words">UI/UX Designer</option>
                                    <option value="All">All</option>
                                    <option value="All">All</option>
                                    <option value="All">All</option>
                                </select>
                                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                    <img
                                    src="/images/downword-arrow.png"
                                    alt="Dropdown arrow"
                                    className="w-4 h-3"
                                    />
                                </div>
                            </div>
                            <div className="relative w-[13em] h-[2.5em] mt-5">
                                <select className="w-full h-full bg-white rounded-md border-[0.13em] border-[#9A9A9A] appearance-none pl-4 pr-8">
                                    <option value="UI/UX Designer" className="text-black text-[0.75em] font-inter font-medium break-words">UI/UX Designer</option>
                                    <option value="All">All</option>
                                    <option value="All">All</option>
                                    <option value="All">All</option>
                                </select>
                                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                    <img
                                    src="/images/downword-arrow.png"
                                    alt="Dropdown arrow"
                                    className="w-4 h-3"
                                    />
                                </div>
                            </div>
                            <div className="relative w-[13em] h-[2.5em] mt-5">
                                <select className="w-full h-full bg-white rounded-md border-[0.13em] border-[#9A9A9A] appearance-none pl-4 pr-8">
                                    <option value="UI/UX Designer" className="text-black text-[0.75em] font-inter font-medium break-words">UI/UX Designer</option>
                                    <option value="All">All</option>
                                    <option value="All">All</option>
                                    <option value="All">All</option>
                                </select>
                                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                    <img
                                    src="/images/downword-arrow.png"
                                    alt="Dropdown arrow"
                                    className="w-4 h-3"
                                    />
                                </div>
                            </div>

                        </div>
                        {/* Hr Line section */}
                        <hr className="w-[1px] border-2 h-[78%] border-dotted border-[#A5A5A5] mt-20" />
                        
                        {/* Right Side Application Section */}
                        <div className="flex-grow h-full p-8">
                            <div className="flex items-center justify-between">
                                <h1 className="text-black text-[26px] font-inter font-semibold break-words">Recommended applications 
                                <span className="border-[0.06em] rounded-[15px] text-[#000000] border-[#A7A7A7] font-inter p-[0.3em] ml-6">1</span>
                                </h1>
                                <div>
                                    <button><img src = "images\left-list-button.png"/></button>
                                    <button className="ml-5"><img src = "images\right-list-button.png"/></button>
                                </div>
                            </div>
                            {/* Application Card */}
                            <div className="mt-16">
                                <div className="h-[285px] w-[285px] bg-white shadow-lg border rounded-lg p-4">
                                    <div className="bg-gray-100 rounded-xl shadow-md w-full h-full p-3 box-border">
                                        {/* Top Row: Profile, R1, and Save */}
                                        <div className="flex items-center justify-between">
                                        {/* Profile Image */}
                                        <Image
                                            src="/images/candidate-profile.png"
                                            alt="Candidate Profile"
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />

                                        {/* R1 Icon and Save */}
                                        <div className="flex items-center space-x-4">
                                            {/* R1 Icon */}
                                            <Image
                                            src="/images/rank.png"
                                            alt="Rank Icon"
                                            width={34}
                                            height={34}
                                            />

                                            {/* Save Button */}
                                            <button className="bg-white p-2 rounded-lg shadow-sm">
                                            <Image
                                                src="/images/save-icon.png"
                                                alt="Save Icon"
                                                width={16}
                                                height={16}
                                            />
                                            </button>
                                        </div>
                                        </div>

                                        {/* Name Section */}
                                        <div className="mt-2">
                                        <h3 className="font-semibold text-lg text-gray-900 text-start">
                                            Praveen Chasta
                                        </h3>
                                        </div>

                                        {/* Info Section */}
                                        <div className="mt-4 space-y-2">
                                        <p className="text-sm text-gray-600">1 Year Experience</p>
                                        <p className="text-sm text-gray-600">Education: Jai Hind College</p>
                                        <p className="text-sm text-gray-600">Applied: 03 Oct, 2024</p>
                                        </div>

                                        {/* Footer Section */}
                                        <div className="flex justify-between items-center mt-4">
                                            <div>
                                                <button 
                                                    className="bg-black text-white text-sm px-4 py-2 rounded-md"
                                                    onClick={() => setShowModel(true)}
                                                >
                                                    View more
                                                </button>
                                            </div>
                                            <div className="bg-transparent p-1">
                                                <span className="text-lg font-bold text-gray-900">87%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>          
                            </div>
                        </div>
                    </div>
            </div>
            {showModel && (
                <div>
                    <Modal isOpen={showModel} onClose={() => setShowModel(false)} userInfo={userInfo} />
                </div>
            )}
            {deleteJobPose && (
                <div>
                    <DeleteJob isOpen={deleteJobPose} onClose={() => setDeleteJobPose(false)} />
                </div>
            )}
       </>
    )
}


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
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    userInfo: UserInfo;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, userInfo }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">

            <div className="bg-white rounded-3xl shadow w-full max-w-[800px] h-auto md:h-[685px]">
                {/* Top Container */}
                <div className="bg-[#EBEFF3] rounded-tl-3xl rounded-tr-3xl flex justify-between items-start p-8 w-full shadow-md">
                    <div className="flex items-center justify-center">
                        <Image src={userInfo.profileImage} alt="Profile" width={76} height={76} className=" rounded-full" />
                        <div className="ml-5">
                            <img src = "images/rank.png" alt = "rank" className="w-8 h-7 mt-2" />
                            <p  className="text-black text-[25.68px] font-inter font-semibold"> {userInfo.name} <span className="bg-[#D8B913] text-white text-[13px] font-inter font-semibold leading-[19.39px] p-2 rounded-lg">Compatibility score 87%</span></p>
                            
                        </div>
                    </div>
                    <button
                         onClick={onClose}
                        className="rounded"
                        >
                        <Image src = "/images/cross.png" alt = "cross" width={23} height={23} />
                    </button>
            
                </div>
                 {/* Bottom Container */}
                 <div className="flex items-center w-full h-[79.8%]">
                     {/* Bottom Left Container */}
                     <div className="flex flex-col justify-around items-center w-[30%] h-full rounded-bl-3xl bg-[#EBEFF3] mt-[0.9px]">
                        <div className="border w-[201px] border-[#6C6C6C] bg-[#FDFDFD] rounded-lg p-4">
                            <h1 className="text-black text-[18px] font-inter font-semibold">Education</h1>
                            <div className="flex flex-col items-center h-[180px] overflow-y-auto">
                                <div className="flex items-center mt-5">
                                    <Image src = "/images/job-profile-image.png" alt = "Education" width={32} height={32}/>
                                    <div className="flex flex-col items-center ml-5">
                                        <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start">UI/UX Designer </p>
                                        <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start mt-1">2021 - 3 Months</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5">
                                    <Image src = "/images/job-profile-image.png" alt = "Education" width={32} height={32}/>
                                    <div className="flex flex-col items-center ml-5">
                                        <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start">UI/UX Designer </p>
                                        <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start mt-1">2021 - 3 Months</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5">
                                    <Image src = "/images/job-profile-image.png" alt = "Education" width={32} height={32}/>
                                    <div className="flex flex-col items-center ml-5">
                                        <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start">UI/UX Designer </p>
                                        <p className="text-[#4C4C4C] text-[12px] font-inter font-semibold text-start mt-1">2021 - 3 Months</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border w-[201px] border-[#6C6C6C] bg-[#FDFDFD] rounded-lg p-4">
                            <button className="bg-black text-white text-sm px-4 py-2 rounded-md mt-4">
                                Download Resume
                            </button>
                        </div>
                        <div className="border w-[201px] border-[#6C6C6C] bg-[#FDFDFD] rounded-lg p-4">
                            <h1 className="text-black text-[12px] font-inter font-semibold">Contact Information</h1>
                            <div className="flex flex-col items-start h-[80px] ">
                                <div className="flex items-center mt-3">
                                    <Image src = "/images/phone.png" alt = "Education" width={18} height={18}/>
                                    <div className="flex flex-col items-start ml-5">
                                        <p className="text-[#4C4C4C] text-[10px] font-inter font-medium text-start">Phone </p>
                                        <p className="text-[#000000] text-[10px] font-inter font-medium text-start mt-1">+91 8451922278</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <Image src = "/images/email.png" alt = "Education" width={18} height={18}/>
                                    <div className="flex flex-col items-start ml-5">
                                        <p className="text-[#4C4C4C] text-[10px] font-inter font-medium text-start">Email</p>
                                        <p className="text-[#000000] text-[10px] font-inter font-medium text-start">dixitgauransh41@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                        {/* Bottom Right Container */}
                     <div className="w-[70%] h-full p-8">
                         <div className="flex flex-col items-start">
                            <h1 className="text-black text-[16px] font-inter font-semibold ">INTRODUCTION</h1>
                            <p className="text-[#616161] text-[14px] font-inter font-normal mt-1">
                                Are you tired of staring at a blank screen and struggling to come up with the perfect introduction for your blog posts, articles, or essays? Look no further! Our Introduction Generator tool is here to revolutionize how you start your written pieces. Say goodbye to writer’s block and hello to engaging, attention-grabbing introductions effortlessly.
                            </p>
                         </div>
                         <div className="flex flex-col items-start mt-4">
                            <h1 className="text-black text-[16px] font-inter font-semibold ">COVER LETTER</h1>
                            <p className="text-[#616161] text-[14px] font-inter font-normal mt-1">
                                Are you tired of staring at a blank screen and struggling to come up with the perfect introduction for your blog posts, articles, or essays? Look no further! Our Introduction Generator tool is here to revolutionize how you start your written pieces. Say goodbye to writer’s block and hello to engaging, attention-grabbing introductions effortlessly.
                            </p>
                         </div>
                         <div className="flex flex-col items-start mt-4">
                            <h1 className="text-black text-[16px] font-inter font-semibold ">SOCIAL MEDIA</h1>
                            <div className="flex items-center mt-2">
                                <Image src = "/images/github.png" alt = "Github" width={32} height={32} className="mr-3"/>
                                <Image src = "/images/linkedin.png" alt = "Linkedin" width={32} height={32}/>
                            </div>
                         </div>
                         <div className="flex justify-end items-start">
                            <button className="bg-black text-white text-sm px-4 py-2 rounded-md mt-4">
                                Message
                            </button>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
}

const DeleteJob: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
           <div className="bg-[#FFFFFF] p-8 w-[275px] h-[246px] rounded-3xl">
                <h1 className="text-black text-[17.29px] font-inter font-medium text-center">Are you sure you want to <br/>Delete the job?</h1>
                <div className="flex items-center justify-center mt-5">
                    <Image src = "/images/job-profile-image.png" alt = "cross" width={42} height={43} />
                    <p className="text-black text-[12.88px] font-inter font-semibold ml-5">UI / UX Designer</p>
                </div>
                <div className="flex items-center justify-center mt-5">
                     <button 
                        className="bg-white border border-black rounded-3xl px-4 py-2 mr-2"
                        onClick={onClose}
                     >
                        Close
                     </button>
                     <button 
                        className="bg-[#FF0000] text-white rounded-3xl px-4 py-2"
                     >
                        Delete
                     </button>
                </div>
           </div>
        </div>
    );
}
                