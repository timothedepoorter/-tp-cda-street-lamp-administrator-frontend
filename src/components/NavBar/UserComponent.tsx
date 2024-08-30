import LogOut from "./LogOut";

const UserComponent = ({userName} : {userName:string}) => {
    return (
        <div className="user-component">
        <div>
            <p>{userName}</p>
        </div>
        <LogOut />
        </div>
    );
};

export default UserComponent;