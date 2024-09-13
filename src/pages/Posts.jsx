import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from '../composants/Post'

function Posts() {
    const { id } = useParams()

    const [posts, setPosts] = useState([])
    const [utilisateur, setUtilisateur] = useState();

    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(data => setPosts(data))

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUtilisateur(data))
    }, [id])

  return (
    <>
        <Link to={'/'} className='lien'>Retour à la liste des utilisateurs</Link>

        <h1>Articles de {utilisateur && utilisateur.name}</h1>

        <div className='conteneur'>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>



    </>
  )
}

export default Posts