import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from '../composants/Post'

function Posts() {   
    
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_EVLvLili2JoEZbD3up1Rys3PdcVg831piGhrJ99HjelN3pPW4FkOtS4nczfAeou3",
    });

    const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };

    const { id } = useParams()

    const [posts, setPosts] = useState([])
    const [chat, setChat] = useState();

    useEffect(() => {
        document.title = "Accueil";
        fetch("https://api.thecatapi.com/v1/breeds?attach_image=1", requestOptions)
            .then((response) => response.json())
            .then((data) => {
        // Filtrer les resultats pour inclure seulement les chats avec images
        const filteredChats = data.filter((chat) => chat.image && chat.image.url && chat.image.id.length > 0);
                setChats(filteredChats);
            });
    }, []);

  return (
    <>
        <Link to={'/'} className='lien'>Retour à la liste des chats</Link>

        <h1>Articles de {chat && chat.name}</h1>

        <div className='conteneur'>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>



    </>
  )
}

export default Posts