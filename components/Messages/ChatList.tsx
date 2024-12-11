const ChatList = () => {
    const messages = [
      { name: "Saige Fuentes", time: "Today, 9:52pm", preview: "Please find attached my CV", unread: 0 },
      { name: "Saige Fuentes", time: "Today, 12:11pm", preview: "Please find attached my CV", unread: 1 },
      { name: "Saige Fuentes", time: "Yesterday, 12:31pm", preview: "Please find attached my CV", unread: 5 },
      { name: "Saige Fuentes", time: "Wednesday, 11:12am", preview: "Please find attached my CV", unread: 0 },
    ];
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4 pt-2 pl-2">All messages</h2>
        <ul>
          {messages.map((msg, idx) => (
            <li
              key={idx}
              className={`flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
                msg.unread ? "font-bold" : ""
              }`}
            >
              {/* Left Side: Avatar and Message Details */}
              <div className="flex items-center space-x-4">
                <img
                  src="images/contact-pic.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-800">{msg.name}</p>
                  <p className="text-sm text-gray-500 truncate">{msg.preview}</p>
                </div>
              </div>
  
              {/* Right Side: Time and Status Indicator */}
              <div className="flex flex-col items-end space-y-1">
                <p className="text-xs text-gray-400">{msg.time}</p>
                {msg.unread > 0 ? (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {msg.unread}
                  </span>
                ) : (
                  <img
                    src="/images/tick-vector.svg"
                    alt="Read"
                    className="w-5 h-5"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ChatList;
  