'use client'


export default function VerifyEmail() {

  return (
    <div className="h-screen w-full flex flex-col md:flex-row justify-center items-center overflow-hidden bg-[#FAF9FB]">
        {/* Left section with image */}
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center bg-gradient-to-br p-6">
            <img src="/images/Frame 2.png" alt="Internlink Logo" className="object-contain w-[68%] h-auto max-w-[90%]" />
        </div>

        {/* Right section with form content */}
        <div className="flex w-full md:w-1/2 items-start justify-center px-4 md:px-0 h-[80vh]">
            <div className="w-full max-w-lg space-y-6">
                {/* Logo and title */}
                <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-2">
                        <img src="images/interlink-logo.png" alt="Internlink Logo" className="w-8 h-8" />
                        <span className="font-semibold">Internlink</span>
                    </div>
                </div>

                <div className="space-y-2 text-center">
                    <h1 className="text-[2.6em] font-black text-black leading-tight mb-4 mt-5">
                    Verify Your <br/>Email Address.
                    </h1>
                    <p className="font-inter text-[17.73px] font-normal leading-[21.48px] text-center">
                    A verification email has sent to your email <span className="font-inter text-[17.73px] font-medium leading-[21.48px] text-center text-[#2196F3]">test@internlink.in</span> Please check your email and click the link provided in the email to complete your account registration.  
                    </p>
                </div>
                 
                <p className="font-inter text-[17.73px] font-normal leading-[21.48px] text-center underline text-[#000000]">
                    Verify your account within 5mins.
                </p>

                <button className="w-full bg-teal-800 hover:bg-teal-900 text-white py-2 rounded-l-full rounded-r-full">
                     Resend verification email
                </button>
            </div>
        </div>
    </div>

  )
}
