'use client'
import { useRouter } from 'next/navigation';
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function SignUpSignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<'signup' | 'signin'>('signup')
  const router = useRouter();

  const handleSignIn = () => {
    // Add your sign-in logic here
    router.push('/verify-email');
};

  return (
    <div className="h-screen w-full flex flex-col md:flex-row justify-center items-center overflow-hidden bg-[#FAF9FB]">
        {/* Left section with image */}
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center bg-gradient-to-br p-6">
            <img src="/images/Frame 2.png" alt="Internlink Logo" className="object-contain w-[68%] h-auto max-w-[90%]" />
        </div>

        {/* Right section with form content */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-4 md:px-0 h-[80vh]">
            <div className="w-full max-w-lg space-y-6">
                {/* Logo and title */}
                <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-2">
                        <img src="images/interlink-logo.png" alt="Internlink Logo" className="w-8 h-8" />
                        <span className="font-semibold">Internlink</span>
                    </div>
                </div>

                <div className="space-y-2 text-center">
                    <h1 className="text-[2.6em] font-black text-black leading-tight mb-4">
                        Unlock Candidate Insights with Ease.
                    </h1>
                    <p className="font-inter text-2xl font-bold text-black leading-tight mb-4">
                        Join Internlink Admin Today.
                    </p>
                </div>

                {/* Tab buttons for Sign Up and Sign In */}
                <div className="flex gap-4 mb-6 bg-white rounded-full w-[80%] md:w-[60%] mx-auto shadow-md">
                    <button
                        className={`flex-1 transition-all duration-300 ease-in-out py-2 ${
                            activeTab === 'signup' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
                        } rounded-full`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                    <button
                        className={`flex-1 transition-all duration-300 ease-in-out py-2 ${
                            activeTab === 'signin' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
                        } rounded-full`}
                        onClick={() => setActiveTab('signin')}
                    >
                        Sign In
                    </button>
                </div>

                {/* Form content */}
                <div className="space-y-4">
                    <p className="text-start text-sm text-gray-600">
                        {activeTab === 'signup' ? 'Sign up to your account:' : 'Sign in to your account:'}
                    </p>

                    <div className="max-w-md mx-auto p-6 rounded-lg space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="font-inter block text-start text-dark font-medium text-[17.73px] leading-[21.46px]">
                                    Work email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="username@gmail.com"
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="font-inter block text-start text-dark font-medium text-[17.73px] leading-[21.46px]">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            className="w-full bg-teal-800 hover:bg-teal-900 text-white py-2 rounded-l-full rounded-r-full"
                            onClick={activeTab === 'signin' ? handleSignIn : undefined}
                        >
                            {activeTab === 'signup' ? 'Create an account' : 'Sign in'}
                        </button>

                        {/* {activeTab === 'signin' && (
                            <div className="text-center mt-4">
                                <a href="/forgot-password" className="text-teal-800 hover:underline">
                                    Forgot your password?
                                </a>
                            </div>
                        )} */}

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-600">
                                Need Help?{' '}
                                <a href="mailto:support@internlink.com" className="text-teal-800 hover:underline">
                                    support@internlink.com
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

  )
}
