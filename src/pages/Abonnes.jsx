import newsLetterAbonnes from "../composants/newsLetterAbonnes";
import { useDispatch, useSelector } from "react-redux";
import { supprimerAbonne } from "../store/abonnesSlice";

const Abonnes = () => {
  const abonnes = useSelector((state) => state.abonnes.abonnes);
  const dispatch = useDispatch();
  const supprimer = (index) => {
    const reponse = confirm("Voulez-vous supprimer cet abonné ?");
    if (reponse) {
      dispatch(supprimerAbonne(index));
    }
  };

  return (
    <div className="container my-10">
      <h1 className="uppercase text-4xl font-extrabold my-10 bg-[#301D1C] w-fit mx-auto px-8 py-6 text-white">
        Liste des abonnés
      </h1>

      <div>
        {abonnes.map((abonne, index) => (
          <newsLetterAbonnes            
            abonne={abonne}
            index={index}
            key={abonne.mail}
            supprimer={supprimer}
          />
        ))}
      </div>

    </div>
  );
};

export default Abonnes;
