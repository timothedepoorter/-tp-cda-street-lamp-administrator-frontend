import logoutIcon  from '../../assets/logout.svg'


const LogOut = () => {
    return (
        <div className="disconnect-btn">
            <a href="/" target="_blank">
          <img src={logoutIcon} width="34px" alt="Se déconnecter" />
        </a>
        </div>
    );
};

export default LogOut;