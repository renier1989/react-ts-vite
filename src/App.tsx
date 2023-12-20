import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <div className="text-2xl mt-7">Practicas de React + TS (Vite)</div>
      <hr />
      <Counter/>
      <hr />
      <Usuario/>
    </>
  );
}

export default App;
