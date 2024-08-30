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
    const [error, setError] = useState("")

    useEffect(() => {
        function dealWithError(e: unknown, item:string) {        
            if (e instanceof Error) {
                console.log(e)
                const message = `Erreur lors de la récupération des ${item} : ` + e.message
                setError(error? error + "\n" + message : message)
            }
        }
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
    }, [error]);

    return { lampadaires, horaires, capteurs, error }
}