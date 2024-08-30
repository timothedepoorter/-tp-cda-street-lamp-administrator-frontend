
const StatusIndicator = ({color, text} : {color:string, text:string}) => {

const className = 'status-indicator background-' + color
    
    return (
        <div className={className}><p>{text}          </p>
        </div>
    );
};

export default StatusIndicator;