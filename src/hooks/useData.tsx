import { useEffect, useState } from "react"
import type {  Lampadaire, Capteur, Horaire } from '../types'
import {
    getLampadaires,
    getCapteurs,
    getHoraires
} from "../services/apiService"

export const useData = () => {
    const [lampadaires, setLampadaires] = useState<Lampadaire[]>([])
    const [horaires, setHoraires] = useState<Horaire[]>([])
    const [capteurs, setCapteurs] = useState<Capteur[]>([])

    useEffect(() => {

        async function dealWithError(e: unknown, item:string) {        
            if (e instanceof Error) {
                const message = `Erreur lors de la récupération des ${item} : ` + e.message
                console.error(message)
            }
        }
        // TODO: Switch to React Router loader function or react-query
        getLampadaires()
            .then(data => {
                setLampadaires(data)})
            .catch(e => {dealWithError(e, "lampadaires")})
        getHoraires()
            .then(data => setHoraires(data))
            .catch(e => dealWithError(e, "horaires"))
        getCapteurs()
            .then(data => setCapteurs(data))
            .catch(e => dealWithError(e, "capteurs"))
    }, []);

    return { lampadaires, horaires, capteurs  }
}