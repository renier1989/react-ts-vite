import { useEffect, useRef, useState } from "react";

type Ttimer = {
  milisegundos: number;
  stop: boolean;
};

export const Timer = ({ milisegundos, stop }: Ttimer) => {
  const [segundos, setSegundos] = useState(0);

  // el tipado del ref es number porque es lo que retorna el setInterval
  const ref = useRef<number>();

  useEffect(() => {
    // con esto se compruba si hay un intervalo sino limpia el intervalo
    ref.current && clearInterval(ref.current);
    // declaro s => s+1 , para evitar pasar el estado de segundos como dependencia al useEffect
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);

  //   esta es algo extra que le agregue para improvisar y ver que otras cosa podria implementar tipado
  stop && clearInterval(ref.current);

  return (
    <>
      <div>
        <h2>
          Timer : <span className="text-xl">{segundos} </span>
        </h2>
      </div>
    </>
  );
};
