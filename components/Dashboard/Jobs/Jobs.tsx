'use client';

import { useRouter } from 'next/navigation';
import Sidebar from '../Sidebar/Sidebar';

export default function Job() {
  const router = useRouter();

  const handlePostJob = () => {
    router.push('/job-details'); 
  };

  const handleViewApplicants = () => {
    router.push('/applications'); 
  };

  return (
    <div className="flex h-screen w-screen bg-[#FAF9FB]">
      <Sidebar />
      
        <div className="flex flex-col w-full p-12">
            <div className="flex justify-between w-full mb-4">
                <h1 className="font-inter text-2xl font-bold text-left text-black">
                All Jobs (1)
                </h1>
                <button
                onClick={handlePostJob}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                Post a new Job
                </button>
            </div>
            <hr className="w-full h-[1.5px] border-gray-300 mt-12"/>
            
            {/* Job Card */}
            <div className='flex justify-around items-center bg-[#FFFFFF] mt-5 rounded-lg border border-[#B7B7B7] p-4'>
                <div className='flex flex-col'>
                    <h1 className="font-inter text-[1.625em] font-semibold leading-[1.967em] text-left">
                    UI / UX Designer 
                    </h1>
                    <p className="font-inter text-[1em] font-medium leading-[1.21em] text-left text-[#777777]">
                    Course Compass
                    </p>
                    <p className="font-inter text-[1em] font-medium leading-[1.21em] text-left text-[#777777] mt-2">
                    Posted on 02 October 2024 | Rahul
                    </p>
                </div> 
                <hr className="border-[#B7B7B7] h-0 w-[79px] transform -rotate-90"/>
                <div className='flex flex-col items-center justify-center'>
                    <img src="images/clock.png" className="w-[43px] h-[43px]" />
                    <p className="font-inter text-[0.875em] font-medium leading-[1.21em] text-center mt-2 text-[#565656]">
                      Job Live for <br/> 48 hours
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src="images/applied-candidate.png" className="w-[43px] h-[43px]" />
                    <p className="font-inter text-[0.875em] font-medium leading-[1.21em] text-center mt-2 text-[#565656]">
                        51 People Applied
                    </p>
                </div>
                <button
                    onClick={handleViewApplicants}
                    className="text-[#565656] py-2 px-4 rounded-lg transition duration-200 w-[168px] h-[55px] border border-[#565656]"
                    >
                    View Applicants
                </button>
            </div>
        </div>
    </div>
    
  );
}
