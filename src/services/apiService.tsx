import axios from "axios"
import type { Lampadaire, Capteur, Horaire } from '../types'
const apiUrl = process.env.REACT_APP_JSON_SERVER_URL
// const apiUrl = process.env.REACT_APP_TEST_API_URL

// TODO : généricité

export const getLampadaires = async () => {
    return new Promise<Lampadaire[]>((resolve, reject) => {
        axios.get(apiUrl + "lampadaire")
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}
// export const getUtilisateurs = async () => {
//     return new Promise<Utilisateur[]>((resolve, reject) => {
//         axios.get(apiUrl + "utilisateur")
//             .then(response => resolve(response.data))
//             .catch(e => reject(e));
//     })
// }
export const getCapteurs = async () => {
    return new Promise<Capteur[]>((resolve, reject) => {
        axios.get(apiUrl + "capteur")
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    })
}
export const getHoraires = async () => {
    return new Promise<Horaire[]>((resolve, reject) => {
        axios.get(apiUrl + "horaire")
            .then(response => resolve(response.data))
            .catch(e => {
                if (e instanceof Error) {
                    console.error(e)
                    reject(e)
                }
            });
    })
}
