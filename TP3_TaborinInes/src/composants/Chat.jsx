import React from "react";
import { Link } from "react-router-dom";

function Chat({ chat }) {
  return (
    <>
      
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/chat/${chat.id}`}>
            <img className="rounded-t-lg" src={chat.image_url} alt={chat.name} />
          </Link>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{chat.name}</div>
            <p className="text-gray-700 text-base">{chat.description}</p>
          </div>
        </div>
      
    </>
  );
}

export default Chat;
