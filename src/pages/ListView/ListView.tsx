import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import './ListView.css'
import alertIcon from '../assets/alert-icon.svg'

const Details = ({lampadaireId} : {lampadaireId : string})=>{
    const path = "/lampadaire/" + lampadaireId
    return(<div><a href={path} className="details-button">Détails</a></div>) 
}

const Line = ({lampadaireId} : {lampadaireId : string}) => {
    return (
        <div className='list-line'>
        <div>
            {lampadaireId}
        </div>
        <div>———</div>
        <Details lampadaireId={lampadaireId}/>
        </div>
    );

}

const ListView = () => {
  const { lampadaires } = useContext(AppContext)

    return (<>
        <div className="card">
        <div className="alert-badge"><img src={alertIcon} width="121px" alt="alert icon" /></div>
            <h1>Numéros de série : </h1>

            {lampadaires.map((l) => 
                 <Line key={l.id} lampadaireId={l.id}/>  )}

        </div>
        </>
    );
};

export default ListView;