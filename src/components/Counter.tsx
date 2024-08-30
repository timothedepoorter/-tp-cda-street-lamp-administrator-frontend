import CounterDigit from "./CounterDigit";
const Counter = ({value} : {value:number}) => {
    const displayedValue:string = value.toString().padStart(6, '0')
    return (
        <div className="counter">
            {displayedValue
            .split('')
            .map((d, i) => <CounterDigit key={i} digit={d}/>  )}
        </div>
    );
};

export default Counter;