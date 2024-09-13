import React, { useEffect, useState } from "react";
import Chat from "../composants/Chat";

function Accueil() {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key":
      "live_EVLvLili2JoEZbD3up1Rys3PdcVg831piGhrJ99HjelN3pPW4FkOtS4nczfAeou3",
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const [chats, setChats] = useState([]);

  useEffect(() => {
    document.title = "Accueil";
    fetch(`https://api.thecatapi.com/v1/breeds?attach_image=1`, requestOptions)
      .then((response) => response.json())
      .then((data) => setChats(data));
  }, []);

  return (
    <div className="container my-10 ">
      <h1 className="text-center">Liste des Chats</h1>

      <div className="grid grid-cols-3 gap-4">
        {chats.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
