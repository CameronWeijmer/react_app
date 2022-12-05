import { useState } from "react";

export default function MyPreAndLastnameForm() {
  const [prename, setPrename] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const handleSubmit = (event) => {
    /*To cancel the native behavior of the submit button
     *you need to use React’s event.preventDefault()
     */ event.preventDefault();
    setFullname(prename + " " + lastname);
    /*As state updates are asynchronous, *console.log will not work as expected. */
    console.log("full name: " + fullname);
  };
  function handleClear() {
    setPrename("");
    setLastname("");
    setFullname("");
  }
  return (
    <div className="container">
      <h2>Please enter your full name</h2>{" "}
      <form onSubmit={(e) => handleSubmit(e)}>
        <table>
          <thead>
            <tr>
              <th>Prename</th>
              <th>Lastname</th>
              <th>submit</th>
              <th>clear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {" "}
              {/*Einrücken zugunsten der Darstellung nicht korrekt */}
              <td>
                <input
                  type="text"
                  value={prename}
                  onChange={(e) => setPrename(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </td>
              <td>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </td>
              <td>
                <button type="button" value="Clear" onClick={handleClear}>
                  Clear
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <label>
          Your full name ist:&nbsp;
          <output>{fullname}</output>
        </label>
        <br />
      </form>
    </div>
  );
}
