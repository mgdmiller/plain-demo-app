import useMenu from "Hooks/useMenu";
import { useParams } from "react-router-dom";

function App() {
  const { id } = useParams();
  const { current, error, update } = useMenu(id);

  return current ? <div className="App">App</div> : <div>Menu not found</div>;
}

export default App;
