import { useParams } from 'react-router-dom';
import './DetailsView.css'
import map from '../../assets/map.png'
import { AppContext } from "../../contexts/AppContext"
import { useContext } from "react"
import { Lampadaire } from '../../types';
import toggleOn from '../../assets/toggle_on.svg'
import toggleOff from '../../assets/toggle_off.svg'

const ToggleComponent = ({active}:{active:boolean})=>{
        return(<div><img src={active? toggleOn : toggleOff} width="33.33px" alt={active? "toggle on":"toggle off"} /></div>)
}


const CapteursComponent = ({ lampadaire }: { lampadaire: Lampadaire }) => {
    console.log(lampadaire.capteurs)
    return (<div className="sensors"><div className='bold'>Capteurs</div>  
    <div><div>Piéton</div> <ToggleComponent active={true}/></div>
    <div><div>Véhicule</div> <ToggleComponent active={true}/></div>
    <div><div>Météo</div> <ToggleComponent active={false}/></div>
     </div>)
}


const DetailsView = () => {
    const { id } = useParams()
    const { lampadaires } = useContext(AppContext)
    // console.log(lampadaires)
if(id){
    const lampadaire = lampadaires.find(l =>l.id === id);

    if (lampadaire)
        return (<>
            <div className="card">
                <div className='two-columns'>
                    <div className="map">
                        <img src={map} width="738px" height="656px" alt="map" />
                    </div>
                    <div className='details-card'>
                        <p className='bold'>Numéro de série :</p>
                        <p className="light-italic">{id}</p>
                        <span className='color-error'>
                        <p className='bold'>Motif de l'alerte :</p>
                        <p className="light-italic">ijbneuihfuizhfuire</p>
                        </span>
                        <CapteursComponent lampadaire={lampadaire}></CapteursComponent>
                        <p><span className="smaller"><span className='bold'>Dernier allumage : </span> 
                        <span className="light-italic">{new Date(lampadaire.dateDernierAllumage).toLocaleString('fr-FR')}</span></span></p>
                    </div>
                </div>
            </div>
        </>
        );
    
}
 return (<>Ce lampadaire n'existe pas</>) // TODO : catchall
};

export default DetailsView;
