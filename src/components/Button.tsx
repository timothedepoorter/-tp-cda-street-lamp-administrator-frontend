import { Link } from "react-router-dom";

export const Button = ({ linkTo, label }: { linkTo: string; label:string }) => {
    return (
        <div>
            <Link className="button" to={linkTo}>{label}</Link>
        </div>
    );
};
