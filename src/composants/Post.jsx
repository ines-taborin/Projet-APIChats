import React from 'react'

function Post({ post }) {
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
  )
}

export default Post