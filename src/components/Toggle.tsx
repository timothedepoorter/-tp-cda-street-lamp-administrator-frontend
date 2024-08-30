import toggleOn from '../assets/toggle_on.svg'
import toggleOff from '../assets/toggle_off.svg'

const Toggle = ({active}:{active:boolean | undefined})=>{
        if (active != undefined)
        return(<div><img src={active? toggleOn : toggleOff} width="33.33px" alt={active? "toggle on":"toggle off"} /></div>)
        else return(<div><p>inconnu</p></div>)
}

export default Toggle;