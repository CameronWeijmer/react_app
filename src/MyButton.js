export default function MyButton() {
    function onClick() {
        alert("You clicked me!");
    }

    function onClick2(e) {
        if (e.ctrlKey === true) {
            alert("Button clicked and Ctrl pressed. " + e.ctrlKey)
        } else {
            alert("Only Button clicked. " + e.ctrlKey)
        }
    }
    return (
        <div>
            <div class={"myButton"}>
                <h1>My Button</h1>
                <button onClick={onClick}>Click me!</button>
            </div>
            <div className={"myButton"}>
                <h1>My Second Button </h1>
                <button onClick={(e) => onClick2(e)}>Click me another!</button>
            </div>
        </div>
    );
}