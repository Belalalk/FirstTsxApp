import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  return (
    <div>
      <Alert>My alert</Alert>
      <Button color="danger" onClick={() => console.log("Clicked ")}>
        My Button
      </Button>
    </div>
  );
}
export default App;
