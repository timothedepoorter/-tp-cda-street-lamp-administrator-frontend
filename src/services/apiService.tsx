import axios from "axios"
import type { Lampadaire, Capteur, Horaire } from '../types'

function getApiUrl(){
switch (process.env.REACT_APP_API_MODE) {
  case 'backend':
    return process.env.REACT_APP_TEST_API_URL
  case 'jsonServer':
    return process.env.REACT_APP_JSON_SERVER_URL
  case 'docker':
  default:
    return process.env.REACT_APP_DOCKER_API_URL;
}
}

const apiUrl = getApiUrl()

// TODO : généricité

export const getLampadaires = async () => {
    return new Promise<Lampadaire[]>((resolve, reject) => {
        axios.get(apiUrl + "lampadaire")
            .then(response => {
                console.log(response)
                resolve(response.data)})
            .catch(e => reject(e));
    })
}
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
            .catch(e => reject(e));
    })
}
