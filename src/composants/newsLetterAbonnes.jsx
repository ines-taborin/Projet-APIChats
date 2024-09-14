import React from "react";
import { useDispatch } from "react-redux";
import { modifierAbonne, supprimerAbonne } from "../store/abonnesSlice";

const NewsLetterAbonnes = ({ abonne, index }) => {
  const dispatch = useDispatch();

  const handleModifier = (index) => {
    const nom = prompt("Modifier le nom de l'abonné :");
    dispatch(modifierAbonne({ nom, index }));
  };

  const handleSupprimer = (index) => {
    const reponse = confirm("Voulez-vous supprimer cet abonné ?");
    if (reponse) {
      dispatch(supprimerAbonne(index));
    }
  };

  return (
    <div>
      <p className="font-bold mb-2">{abonne.name}</p>

      <div>
        <button onClick={() => handleModifier(index)}>Modifier</button>
        <button onClick={() => handleSupprimer(index)}> Supprimer</button>
      </div>
    </div>
  );
};

export default NewsLetterAbonnes;
