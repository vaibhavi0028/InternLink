import Sidebar from "../Dashboard/Sidebar/Sidebar";
import ChatList from "./ChatList";
import MessageArea from "./MessageArea";

const Chat = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <header className="p-4 bg-gray-100 pb-2">
          <h1 className="text-[20px] font-bold text-gray">Messages</h1>
        </header>
        <div className="flex flex-col md:flex-row w-full h-screen px-3 py-1 gap-4 bg-gray-100">
          <div className="bg-white w-full md:w-1/3 border rounded-lg shadow-md p-2">
            <ChatList />
          </div>

          <div className="bg-white w-full md:w-2/3 border rounded-lg shadow-md p-2">
            <MessageArea />
          </div>
        </div>

        <footer className="p-4 bg-gray-100 text-center">
          <p className="text-sm text-black-500">Copyright @Internlink 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
