import "./App.css";
import { ReactComponent as IconBoard } from "./assets/icon-board.svg";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>kanban</h1>

        <h4>{`All Boards (3)`}</h4>
        <h3>
          <IconBoard /> Platform Launch
        </h3>
        <h3>
          <IconBoard /> Marketing Plan
        </h3>
        <h3>
          <IconBoard /> Roadmap
        </h3>
        <h3>+ Create New Board</h3>
      </nav>
    </div>
  );
}

export default App;
