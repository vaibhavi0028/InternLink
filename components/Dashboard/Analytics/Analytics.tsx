'use client';

import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { time: '11am', views: 80 },
    { time: '1pm', views: 100 },
    { time: '3pm', views: 250 },
    { time: '5pm', views: 200 },
    { time: '7pm', views: 400 },
    { time: '9pm', views: 450 },
    { time: '11pm', views: 400 },
    { time: '1am', views: 350 },
    { time: '3am', views: 400 },
    { time: '5am', views: 200 },
    { time: '7am', views: 300 },
];

const tiers = [
    { label: "Entry Level", value: 254, color: "rose-500" },
    { label: "Mid-Level", value: 3000, color: "sky-500" },
    { label: "Senior-Level", value: 3254, color: "violet-500" },
];

export default function Analytics() {
    const [activeTab, setActiveTab] = useState('');
    const [selectedJob, setSelectedJob] = useState('');

    const maxValue = Math.max(...tiers.map(t => t.value));

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedJob(event.target.value);
        setActiveTab('performance');
    };

    return (
        <div className="flex items-start bg-[#F5F5F5] w-screen h-screen">
            <Sidebar />
            <div className="p-8 w-full h-full flex flex-col">
                <h1 className="text-[30px] text-left font-bold font-inter">Analytics</h1>
                <div className="w-full h-full flex flex-col items-center">
                    <div className="flex flex-col items-center mt-5 bg-white w-full h-full max-h-[857px] rounded-3xl shadow-lg overflow-y-auto">
                        <div className="flex items-center p-8">
                            <button
                                className={`border-[1px] p-2 rounded-3xl mr-10 w-[164px] ${
                                    activeTab === 'performance'
                                        ? 'bg-[#1C73E8] text-[#FFFFFF]'
                                        : 'border-[1px] text-[#1C73E8] border-[#1C73E8]'
                                }`}
                                onClick={() => handleTabClick('performance')}
                            >
                                Performance
                            </button>
                            <button
                                className={`border-[1px] p-2 rounded-3xl w-[170px] ${
                                    activeTab === 'ai-insights'
                                        ? 'bg-[#1C73E8] text-[#FFFFFF]'
                                        : 'border-[1px] text-[#1C73E8] border-[#1C73E8]'
                                }`}
                                onClick={() => handleTabClick('ai-insights')}
                            >
                                AI-Driven Insights
                            </button>
                        </div>
                        <hr className="w-full max-w-[705px] bg-[#B4ABAB] h-[1px]" />
                        <div className="relative w-full max-w-[844px] flex items-center justify-center mt-5 bg-[#E4E4E4] rounded-3xl">
                            <select
                                className="p-4 w-full h-[55px] bg-transparent text-[#4B4B4B] text-[18px] font-inter font-semibold rounded-3xl appearance-none"
                                onChange={handleSelectChange}
                                value={selectedJob}
                            >
                                <option value="" disabled hidden>
                                    Select the job post to view performance
                                </option>
                                <option value="job1">
                                    1. UI / UX Designer - Job Live for 48 hours
                                </option>
                                <option value="job2">
                                    2. Product Designer - Job Live for 36 hours
                                </option>
                                <option value="job3">
                                    3. Web Developer - Job Live for 72 hours
                                </option>
                            </select>
                            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none p-4">
                                <img
                                    src="/images/downword-arrow.png"
                                    alt="Dropdown arrow"
                                    className="w-6 h-4"
                                />
                            </div>
                        </div>
                        {activeTab === 'performance' && selectedJob && (
                            <div className="mt-5 w-full h-full flex items-center justify-center">
                                <div className="w-full max-w-[90%] h-[300px] bg-[#ffffff] rounded-3xl flex items-center justify-center">
                                    <div className="w-full max-w-[767px] border-[#E6E8EC] border-[1px] rounded-lg h-[300px] p-4 shadow-lg mr-10">
                                        <div className='flex items-center justify-between mx-5 mb-5'>
                                            <h3 className="text-lg font-semibold">Job views</h3>
                                            <h3 className="text-lg font-semibold ">Oct</h3>
                                        </div>
                                        <ResponsiveContainer width="100%" height="82%">
                                            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                                <defs>
                                                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="rgb(255, 99, 99)" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="rgb(255, 99, 99)" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis
                                                    dataKey="time"
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fontSize: 12 }}
                                                    dy={10}
                                                />
                                                <YAxis
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tick={{ fontSize: 12 }}
                                                    dx={-10}
                                                    domain={[0, 500]}
                                                    ticks={[0, 100, 200, 300, 400, 500]}
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: 'white',
                                                        border: '1px solid #ccc',
                                                        borderRadius: '4px',
                                                    }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="views"
                                                    stroke="rgb(255, 99, 99)"
                                                    fillOpacity={1}
                                                    fill="url(#colorViews)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="w-full max-w-[402px] border-[#E6E8EC] border-[1px] rounded-lg h-[300px] shadow-lg p-4">
                                        <h1 className="text-[#000000] font-bold font-inter text-[16px]">Tier-based views</h1>
                                        <div className='flex items-start w-30% h-full mt-5'>
                                            <div className='flex flex-col items-start'>
                                                <div className='mb-2'>
                                                    <div className='flex items-center justify-start'>
                                                        <span className='bg-[#FC7574] w-[11px] h-[11px] rounded-full mr-2'></span><span className='text-[#787486]'>Entry Level</span>
                                                    </div>
                                                    <p className='mt-2 font-inter font-bold text-[20px]'>254</p>
                                                </div>
                                                <div className='mb-2'>
                                                    <div className='flex items-center justify-start'>
                                                        <span className='bg-[#81D2FF] w-[11px] h-[11px] rounded-full mr-2'></span><span className='text-[#787486]'>Mid-Level</span>
                                                    </div>
                                                    <p className='mt-2 font-inter font-bold text-[20px]'>3000</p>
                                                </div>
                                                <div className='mb-2'>
                                                    <div className='flex items-center justify-start'>
                                                        <span className='bg-[#CED9E3] w-[11px] h-[11px] rounded-full mr-2'></span><span className='text-[#787486]'>Senior-Level</span>
                                                    </div>
                                                    <p className='mt-2 font-inter font-bold text-[20px]'>3254</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'ai-insights' && selectedJob &&  (
                            <div className="mt-5 w-full h-full flex flex-col items-center justify-center">
                                <div className="mt-5 w-full h-full flex items-center justify-center">
                                    <div className="w-full max-w-[90%] h-[300px] bg-[#ffffff] rounded-3xl flex items-center justify-center">
                                        <div className="w-full max-w-[767px] border-[#E6E8EC] border-[1px] rounded-lg h-[300px] p-4 shadow-lg mr-10">
                                            <div className='flex items-center justify-between mx-5 mb-5'>
                                                <h3 className="text-lg font-semibold">Job views</h3>
                                                <h3 className="text-lg font-semibold ">Oct</h3>
                                            </div>
                                            <ResponsiveContainer width="100%" height="82%">
                                                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                                    <defs>
                                                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="rgb(255, 99, 99)" stopOpacity={0.8} />
                                                            <stop offset="95%" stopColor="rgb(255, 99, 99)" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <XAxis
                                                        dataKey="time"
                                                        axisLine={false}
                                                        tickLine={false}
                                                        tick={{ fontSize: 12 }}
                                                        dy={10}
                                                    />
                                                    <YAxis
                                                        axisLine={false}
                                                        tickLine={false}
                                                        tick={{ fontSize: 12 }}
                                                        dx={-10}
                                                        domain={[0, 500]}
                                                        ticks={[0, 100, 200, 300, 400, 500]}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{
                                                            backgroundColor: 'white',
                                                            border: '1px solid #ccc',
                                                            borderRadius: '4px',
                                                        }}
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="views"
                                                        stroke="rgb(255, 99, 99)"
                                                        fillOpacity={1}
                                                        fill="url(#colorViews)"
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div className="w-full max-w-[402px] border-[#E6E8EC] border-[1px] rounded-lg h-[300px] shadow-lg p-4">
                                            <h1 className="text-[#5C5C5C] font-bold font-inter text-[16px] text-center">AI Insights on Tier-base views</h1>
                                            <div className='flex items-start w-full h-full mt-5'>
                                                <div className='flex flex-col items-start'>
                                                    <div className='flex items-center justify-start mt-5'>
                                                        <img src = "images/star.png" className='w-5 h-5'/>
                                                        <p className='font-inter text-[#808080] font-[16px] ml-3'>Job Posting can be done better.</p>
                                                    </div>
                                                        
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 w-full h-full flex items-center justify-around'>
                                    <div className="w-full max-w-[402px] border-[#E6E8EC] border-[1px] rounded-lg h-[300px] shadow-lg p-4">
                                            <h1 className="text-[#000000] font-bold font-inter text-[16px]">Tier-based views</h1>
                                            <div className='flex items-start w-30% h-full mt-5'>
                                                <div className='flex flex-col items-start'>
                                                    <div className='mb-2'>
                                                        <div className='flex items-center justify-start'>
                                                            <span className='bg-[#FC7574] w-[11px] h-[11px] rounded-full mr-2'></span><span className='text-[#787486]'>Entry Level</span>
                                                        </div>
                                                        <p className='mt-2 font-inter font-bold text-[20px]'>254</p>
                                                    </div>
                                                    <div className='mb-2'>
                                                        <div className='flex items-center justify-start'>
                                                            <span className='bg-[#81D2FF] w-[11px] h-[11px] rounded-full mr-2'></span><span className='text-[#787486]'>Mid-Level</span>
                                                        </div>
                                                        <p className='mt-2 font-inter font-bold text-[20px]'>3000</p>
                                                    </div>
                                                    <div className='mb-2'>
                                                        <div className='flex items-center justify-start'>
                                                            <span className='bg-[#CED9E3] w-[11px] h-[11px] rounded-full mr-2'></span><span className='text-[#787486]'>Senior-Level</span>
                                                        </div>
                                                        <p className='mt-2 font-inter font-bold text-[20px]'>3254</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="w-full max-w-[402px] border-[#E6E8EC] border-[1px] rounded-lg h-[300px] shadow-lg p-4">
                                            <h1 className="text-[#5C5C5C] font-bold font-inter text-[16px] text-center">AI Insights on Tier-base views</h1>
                                            <div className='flex items-start w-full h-full mt-5'>
                                                <div className='flex flex-col items-start'>
                                                    <div className='flex items-center justify-start mt-5'>
                                                        <img src = "images/star.png" className='w-5 h-5'/>
                                                        <p className='font-inter text-[#808080] font-[16px] ml-3'>Job Posting can be done better.</p>
                                                    </div>
                                                        
                                                </div>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
