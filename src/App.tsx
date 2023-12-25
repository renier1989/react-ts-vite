import { Counter } from "./components/Counter";
import { CounterReducer } from "./components/CounterReducer";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <div className="text-2xl mt-7">Practicas de React + TS (Vite)</div>
      <hr />
      <h2 className="text-2xl mt-4">Hook useState:</h2>
      <div className="border px-5 mt-2 rounded-md shadow-slate-800 shadow-lg">
        <Counter />
        <Usuario />
      </div>

      <h2 className="text-2xl mt-4">Hook useEffecr + useRef:</h2>
      <div className="border px-5 mt-2 rounded-md shadow-slate-800 shadow-lg py-5">
        <TimerPadre/>
      </div>

      <h2 className="text-2xl mt-4">Hook useReducer:</h2>
      <div className="border px-5 mt-2 rounded-md shadow-slate-800 shadow-lg py-5">
        <CounterReducer/>
      </div>

    </>
  );
}

export default App;