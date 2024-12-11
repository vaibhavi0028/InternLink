'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Jobs', icon: '/images/unactive-job-bag.png', activeIcon: '/images/job-bag.png', route: '/jobs' },
    { name: 'Analytics', icon: '/images/analytics.png', activeIcon: '/images/active-anatylics.png', route: '/analytics' },
    { name: 'Shortlisted Applicant', icon: '/images/shortlisted-candidate.png', activeIcon: '/images/active-community.png', route: '/shortlisted' },
    { name: 'Messages', icon: '/images/message.png', activeIcon: '/images/active-message.png', route: '/messages' },
    { name: 'CV Chanakya AI', icon: '/images/ai.png', activeIcon: '/images/ai.png', route: '/cv-ai' },
    { name: 'Settings', icon: '/images/setting.png', activeIcon: '/images/active-setting.png', route: '/settings' },
    { name: 'Help', icon: '/images/help.png', activeIcon: '/images/active-help.png', route: '/help' },
  ];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleNavigation = (item: typeof navItems[0]) => {
    router.push(item.route);
  };

  return (
    <div
      className={`bg-[#1F1F1F] h-screen  ${isHovered ? 'w-[17.5em]' : 'w-16'} duration-300`}   
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className='mb-6'>
        <div className="flex justify-start p-4 mb-6 items-center">
          <Image
            src="/images/interlink-logo.png"
            alt="Interlink Logo"
            width={45}
            height={45}
          />
          {isHovered && (
        <span className="text-white ml-3 font-inter text-[1.62em] font-bold leading-[1.88em] tracking-[-0.028em] text-left">
          Interlink
        </span>
          )}
        </div>
        {isHovered && (<hr className="border border-[#636363] w-[193.02px] h-[1px] mt-4 ml-auto" />)}
      </div>

      {/* Navigation Items */}
      <nav className="space-y-4">
        {navItems.map((item) => (
            <div
            key={item.name}
            className={`flex items-center space-x-4 p-2 pl-5 cursor-pointer hover:text-[1.1em] ${
              pathname === item.route ? 'bg-[#FAF9FB]' : ''
            }`}
            onClick={() => handleNavigation(item)}
            >
            <Image 
              src={pathname === item.route ? item.activeIcon : item.icon}
              alt={item.name}
              width={25}
              height={25}
            />
            {isHovered && (
              <span
              className={`font-inter text-[1.1em] font-medium leading-[1.96em] tracking-[-0.03em] text-left ${
                pathname === item.route ? 'text-black' : 'text-white'
              }`}
              >
              {item.name}
              </span>
            )}
            </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
