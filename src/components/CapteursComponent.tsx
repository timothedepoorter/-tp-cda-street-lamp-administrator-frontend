import { Lampadaire } from '../types';
import Toggle from './Toggle';


const CapteursComponent = ({ lampadaire }: { lampadaire: Lampadaire }) => {
    console.log(lampadaire.capteurs)
    const capteurMouvement = lampadaire.capteurs.find(c => c.type=="mouvement")
    const capteurTemperature = lampadaire.capteurs.find(c => c.type=="température")
    const capteurHumidite = lampadaire.capteurs.find(c => c.type=="humidité")
    return (<div className="sensors"><div className='bold'>Capteurs</div>  
    <div><div>Mouvement</div> <Toggle active={capteurMouvement?.isActif}/></div>
    <div><div>Température</div> <Toggle active={capteurTemperature?.isActif}/></div>
    <div><div>Humidité</div> <Toggle active={capteurHumidite?.isActif}/></div>
     </div>)
}

export default CapteursComponent;