import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);
  const [stop, setStop] = useState(false);

  const cambiarMilisegundos = (milis: number) => {
    setMilisegundos(milis);
    setStop(false);
  };

  const pausar = () => {
    setStop(true);
    setMilisegundos(0);
  };

  return (
    <>
      <div>
        <span className="mb-1"> Milisegundos : {milisegundos} </span>
        <div className="my-2">
          <button
            onClick={() => cambiarMilisegundos(1000)}
            className=" p-2 rounded-md outline-green-900 outline hover:bg-green-700 trasnsition duration-200"
          >
            1000
          </button>

          <button
            onClick={() => cambiarMilisegundos(2000)}
            className="ml-4 mr-4 p-2 rounded-md outline-green-900 outline hover:bg-green-700 trasnsition duration-200"
          >
            2000
          </button>

          <button
            onClick={pausar}
            className="p-2 rounded-md outline-red-900 outline hover:bg-red-700 trasnsition duration-200"
          >
            Pausar
          </button>
        </div>

        {/* aqui le paso el argumento de los segundo para usarlo en el componente hijo. */}
        {/* pero en el componente hijo debe haber un tipo que le diga que tipo de argumentos va a recibir con su tipado */}
        <Timer milisegundos={milisegundos} stop={stop} />
      </div>
    </>
  );
};
