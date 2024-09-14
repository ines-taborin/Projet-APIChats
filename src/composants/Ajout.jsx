import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterAbonne } from "../store/abonnesSlice";

const Ajout = () => {
    const listeAbonnes = useSelector(state=>state.abonnes.abonnes);
    const dispatch = useDispatch();

    const [abonne, setAbonne] = useState({nom: "", mail: ""});

    const handleChange = (e) => {
        setAbonne({...abonne, [e.target.name]: e.target.value});
    };

    const verifierMail = (mail) => {
        let existe = listeAbonnes.find((abonne) => abonne.mail === mail);
        return existe == undefined ? false : true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (verifierMail(abonne.mail)== true)
            alert("Cet abonné existe déja");
        else
            dispatch(ajouterAbonne(abonne));
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom</label> <br />
            <input
                type="text"
                name="nom"
                id="nom"
                value={abonne.nom}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="mail">Mail</label> <br />
            <input
                type="email"
                name="mail"
                id="mail"
                value={abonne.mail}
                onChange={handleChange}
            />
            <br />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default Ajout;