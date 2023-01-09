import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button backgroundColor={"white"} label={"Hello World"} size="large" />
      </header>
    </div>
  );
}

export default App;
