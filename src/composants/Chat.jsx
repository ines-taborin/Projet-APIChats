import React from "react";
import { Link } from "react-router-dom";

function Chat({ chat }) {
	// if the image is not found, use a placeholder
	const imageUrl = chat.image && chat.image.url ? chat.image.url : "/chat_placeholder.webp";

	return (
		<Link to={`/chat/${chat.id}`} className="max-w-sm rounded overflow-hidden shadow-xl group">
			<div className="overflow-hidden">
				<img className="rounded-t-lg object-cover h-[300px] w-full object-top group-hover:scale-105 transition-all" src={imageUrl} alt={chat.name} />
			</div>
			<div className="px-6 py-4">
				<div className="font-bold text-3xl mb-2">{chat.name}</div>
				<p className="font-bold mb-2">{chat.origin}</p>
				<p className="text-justify line-clamp-3">{chat.description}</p>
			</div>
		</Link>
	);
}

export default Chat;
