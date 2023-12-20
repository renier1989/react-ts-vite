import { useState } from "react";

export const Counter = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrementar = (numero:number = 1):void =>{
        setCounter(counter + numero);
    }

  return (
    <>
      <div className="my-5">
        {/* <h2 className=" text-xl">useState Section</h2> */}
        <span>Counter : <span className="text-2xl"> {counter}</span> </span>
        <br />
        <div className="flex mt-4 gap-3">
        <button 
        onClick={()=>incrementar()}
        className="p-2 rounded-md outline-green-900 outline hover:bg-green-700 trasnsition duration-200">
            +1
        </button>
        <button 
        onClick={()=>incrementar(2)}
        className="p-2 rounded-md outline-green-900 outline hover:bg-green-700 trasnsition duration-200">
            +2
        </button>
        <button 
        onClick={()=>setCounter(0)}
        className="p-2 rounded-md outline-red-900 outline hover:bg-red-700 trasnsition duration-200">
            Reset
        </button>
        </div>
      </div>
    </>
  );
};
