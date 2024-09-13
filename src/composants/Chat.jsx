import React from "react";
import { Link } from "react-router-dom";

function Chat({ chat }) {
	// if the image is not found, use a placeholder
	const imageUrl = chat.image && chat.image.url ? chat.image.url : "/chat_placeholder.webp";

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<Link to={`/chat/${chat.id}`}>
				<img className="rounded-t-lg object-scale-down h-48 w-96" src={imageUrl} alt={chat.name} />
			</Link>
			<div className="px-6 py-4">
				<div className="font-bold text-3xl mb-2">{chat.name}</div>
				<p className="font-bold mb-2">{chat.origin}</p>
				<p className="text-justify">{chat.description}</p>
			</div>
		</div>
	);
}

export default Chat;
