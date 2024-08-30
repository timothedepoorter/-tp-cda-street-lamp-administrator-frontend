import { useParams } from 'react-router-dom';
import './DetailsView.css'
import map from '../../assets/map.png'
import lightbulb from '../../assets/fxemoji--lightbulb.svg'
import { AppContext } from "../../contexts/AppContext"
import { useContext } from "react"
import CapteursComponent from '../../components/CapteursComponent';

const DetailsView = () => {
    const { id } = useParams()
    const { lampadaires } = useContext(AppContext)
if(id){
    const lampadaire = lampadaires.find(l =>l.id === id);

    if (lampadaire)
        return (<>
            <div className="card">
                <div className='two-columns'>
                    <div className="map">
                        <img src={map} width="738px" height="656px" alt="map" />
                        <img className='lightbulb' src={lightbulb} width="100px" alt="lightbulb" />
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
