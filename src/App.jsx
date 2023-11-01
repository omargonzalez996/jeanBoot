import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./components/Carrousel";
import NavBarra from "./components/NavBarra";
import Perks from "./components/Perks";

function App() {
  return (
    <>
      <NavBarra />
      <Carrousel />
      <Perks />
    </>
  );
}

export default App;
