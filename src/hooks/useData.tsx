import { useEffect, useState } from "react"
import type { Utilisateur, Lampadaire, Capteur, Horaire } from '../types'
import {
    getLampadaires,
    getUtilisateurs,
    getCapteurs,
    getHoraires
} from "../services/apiService"

export const useData = () => {
    const [lampadaires, setLampadaires] = useState<Lampadaire[]>([])
    const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
    const [horaires, setHoraires] = useState<Horaire[]>([])
    const [capteurs, setCapteurs] = useState<Capteur[]>([])
    const [error, setError] = useState("")


    function dealWithError(e: unknown, item:string) {        
        if (e instanceof Error) {
            console.log(error)
            const message = `Erreur lors de la récupération des ${item} : ` + e.message
            setError(error? error + "\n" + message : message)
        }
    }

    useEffect(() => {
        getLampadaires()
            .then(data => {
                setLampadaires(data)})
            .catch(e => {dealWithError(e, "lampadaires")})
        getUtilisateurs()
            .then(data => setUtilisateurs(data))
            .catch(e => dealWithError(e, "utilisateurs"))
        getHoraires()
            .then(data => setHoraires(data))
            .catch(e => dealWithError(e, "horaires"))
        getCapteurs()
            .then(data => setCapteurs(data))
            .catch(e => dealWithError(e, "capteurs"))
    }, []);

    // const filterCountries = (name) => {
    //     setFiltredCountries(countries.filter(c=>c.name.common.toLowerCase().includes(name.toLowerCase())))
    // }

    return { lampadaires, utilisateurs, horaires, capteurs, error }
}