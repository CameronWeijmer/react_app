import {useState} from "react";

export default function MyVisitorFeedback() {
    const [feedback, setFeedback] = useState("");
    const [records, setRecord] = useState("");

    function onChangeText(event) {
        setFeedback(event.target.value)
    }

    function onUpdateRecords() {
        setRecord(records + feedback + "\n")
    }

    return (
        <div>
            <h2>Visitor feedback</h2>
            <p>Please leave your feedback. Thank you!</p>
            <label>New feedback:&nbsp; <input type="text" value={feedback} onChange={(e) => onChangeText(e)}/>
            </label>
            <button onClick={onUpdateRecords}>add</button>
            <p style={{whiteSpace: "pre-line"}}>{records}</p>
        </div>
    )
}