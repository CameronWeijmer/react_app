import {useState} from "react";

export default function VisitorCounter() {
    const [counter, setCounter] = useState(0);

    function onClickIncrement() {
        console.log("onClickDecrement was clicked");
        setCounter(counter + 1)
    }

    function onClickDecrement() {
        console.log("onClickDecrement was clicked");
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <h2>Visitor Counter</h2>
            <p>Click button to count the visitors.</p>
            <button onClick={onClickIncrement}> increment visitors</button>
            <button onClick={onClickDecrement}> decrement visitors</button>
            <p>Current number of visitors: {counter}</p>
        </div>
    )
}