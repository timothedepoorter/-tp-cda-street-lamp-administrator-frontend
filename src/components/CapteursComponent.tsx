import { Lampadaire } from '../types';
import Toggle from './Toggle';


const CapteursComponent = ({ lampadaire }: { lampadaire: Lampadaire }) => {
    console.log(lampadaire.capteurs)
    const capteurPieton = lampadaire.capteurs.find(c => c.type=="pieton")
    const capteurVehicule = lampadaire.capteurs.find(c => c.type=="vehicule")
    const capteurMeteo = lampadaire.capteurs.find(c => c.type=="meteo")
    return (<div className="sensors"><div className='bold'>Capteurs</div>  
    <div><div>Piéton</div> <Toggle active={capteurPieton?.isActif}/></div>
    <div><div>Véhicule</div> <Toggle active={capteurVehicule?.isActif}/></div>
    <div><div>Météo</div> <Toggle active={capteurMeteo?.isActif}/></div>
     </div>)
}

export default CapteursComponent;