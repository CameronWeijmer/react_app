import "./App.css";
import MyComponent from "./MyComponent.js";
import MyButton from "./MyButton";
import VisitorCounter from "./VisitorCounter";
import VisitorFeedback from "./VisitorFeedback";
import Form from "./Form";

function App() {
  return (
    <div>
      <MyComponent />
      <MyButton />
      <VisitorCounter />
      <VisitorFeedback />
      <Form/>
    </div>
  );
}

export default App;
