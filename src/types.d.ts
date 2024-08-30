// type mongoObjectId = {$oid: string}

type GeoLocation= {
      type: string,
      coordinates: [ number, number]
    }

export type Lampadaire = {
    id: string,
    internalId: string,
    numIdentite: string,
    puissanceLumiere: number,
    isAllume: boolean,
    isKO: boolean,
    geoLocalisation: GeoLocation,
    dateDernierAllumage: string,
    horaireId: string,
    capteurs: Capteur[]
}

export type Utilisateur = {
    id: string,
    identifiant: string,
    motDePasse: string,
}

export type Capteur = {
    id: string,
    numIdentite: string,
    type: string,
    isActif: boolean,
    isDetecting: boolean,
    isKO: boolean
}

export type Horaire = {
    id: string,
    internalId: string,
    saison: string,
    heureDebut: string,
    heureFin: string,
    dureeEclairage: number
}

export type Context = {
    lampadaires: Lampadaire[];
    horaires: Horaire[];
    capteurs: Capteur[];
    error: string;
}

export type LampadairesStatus = {
    on:number, off:number, ko:number}