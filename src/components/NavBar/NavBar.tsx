
import lilleLogo from '../../assets/Logo_Lille_mais_bleu.svg'
import UserComponent from "./UserComponent"
import './NavBar.css'
import { Utilisateur } from '../../types'

function NavBar({loggedUser} : {loggedUser : Utilisateur}) {


  return (
    <nav><div><div className="logo">
      <a href="/">
          <img src={lilleLogo} width="95px" alt="Logo Lille, mais bleu" />
        </a>
      </div>
      </div>
      <div><p className="page-title">ProGKiikooEclairezVousXOXO</p></div>
      <UserComponent userName={loggedUser.identifiant} />
      
    </nav>
  )
}

export default NavBar