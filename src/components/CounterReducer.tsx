import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType = 
| {type: "incrementar" } 
| {type: "decrementar" }
| {type: "custom", payload: number }
;

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      // nota: siempre se debe enviar un nuevo estado, nunca de muta el original
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      // nota: siempre se debe enviar un nuevo estado, nunca de muta el original
      return {
        ...state,
        contador: state.contador=== 0 ? state.contador = 0 : state.contador - 1,
      };

    case "custom":
      // nota: siempre se debe enviar un nuevo estado, nunca de muta el original
      return {
        ...state,
        contador: action.payload,
      };

    // si es envia una accion que no esta entre los actions , siempre se retorna en state
    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [{contador}, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <div>
        Counter : <span className="text-2xl">{contador}</span>
        <br />
        <div className="flex mt-4  gap-3">
        <button
          onClick={() => dispatch({ type: "incrementar" })}
          className="p-2 rounded-md outline-green-900 outline hover:bg-green-700 trasnsition duration-200"
        >
          +1
        </button>
        <button
          onClick={() => dispatch({ type: "decrementar" })}
          className="p-2 rounded-md outline-red-900 outline hover:bg-red-700 trasnsition duration-200"
        >
          -1
        </button>
        <button
          onClick={() => dispatch({ type: "custom" , payload:100 })}
          className="p-2 rounded-md outline-indigo-900 outline hover:bg-indigo-700 trasnsition duration-200"
        >
          Set 100
        </button>

        <button
          onClick={() => dispatch({ type: "custom" , payload:0 })}
          className="p-2 rounded-md outline-orange-900 outline hover:bg-orange-700 trasnsition duration-200"
        >
          Reset
        </button>

        </div>
      </div>
    </>
  );
};
