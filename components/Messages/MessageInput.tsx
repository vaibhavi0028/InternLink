import Image from 'next/image';

const MessageInput = () => {
  return (
    <div className="p-3 border-t flex items-center">
      <div className="relative w-full">
        <Image
          src="/images/mic-vector.svg"
          alt="Mic"
          width={15}
          height={15}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Message..."
          className="flex-grow w-full p-2 pl-10 bg-[#F1F7FC] border rounded-lg focus:outline-none"
        />

        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
          <Image
            src="/images/clip-vector.svg"
            alt="Clip"
            width={13}
            height={13}
            className="text-gray-500 cursor-pointer"
          />
          <Image
            src="/images/send-vector.svg"
            alt="Send"
            width={22}
            height={22}
            className="text-gray-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
