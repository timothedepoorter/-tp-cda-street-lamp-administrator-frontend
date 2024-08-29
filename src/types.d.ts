type mongoObjectId = object

export type Lampadaire = {
    id: mongoObjectId,
    numIdentite: string,
    puissanceLumiere: number,
    isAllume: boolean,
    isKO: boolean,
    GeoLocalisation: object,
    DateDernierAllumage: Date,
    horaireId: number,
    capteurs: Capteur[]
}

export type Utilisateur = {
    id: mongoObjectId,
    identifiant: string,
    motDePasse: string,
}

export type Capteur = {
    _id: mongoObjectId,
    id: mongoObjectId, // à virer
    numIdentite: string,
    type: string,
    isActif: boolean,
    isDetecting: boolean,
    isKO: boolean
}

export type Horaire = {
    _id: mongoObjectId,
    id: mongoObjectId, // à virer
    saison: string,
    heureDebut: Date,
    heureFin: Date,
    dureeEclairage: number
}