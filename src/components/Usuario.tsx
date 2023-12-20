import { useState } from "react";

interface IUsuario {
  uid: string;
  nombre: string;
  status: boolean;
}
const usuarioValues: IUsuario = {
  uid: "",
  nombre: "",
  status: false,
};

export const Usuario = () => {
  const [usuario, setUsuario] = useState<IUsuario>(usuarioValues);
  const login = () => {
    setUsuario({
      uid: "k23lsdfj2",
      nombre: "Renier Vargas",
      status: true,
    });
  };

  return (
    <>
      <div className="my-5 flex">
        <div>
          <h2 className="text-xl mb-4">Usuario Section</h2>
          {!usuario.uid ? (
            <button
              onClick={login}
              className="p-2 rounded-md outline-indigo-900 outline hover:bg-indigo-700 trasnsition duration-200"
            >
              Login
            </button>
          ) : null}

          {usuario.uid ? (
            <button
              onClick={() => setUsuario(usuarioValues)}
              className="ml-4 p-2 rounded-md outline-indigo-900 outline hover:bg-indigo-700 trasnsition duration-200"
            >
              Logout
            </button>
          ) : null}

          <div className="mt-2 ">
            <code className="italic">
              {" "}
              {usuario.uid
                ? JSON.stringify(usuario)
                : "No hay usuario logeado"}{" "}
            </code>
          </div>
        </div>
        {usuario.uid ? (
          <div className=" bg-indigo-400 bg-opacity-20 rounded-md p-3 ml-10">
            <span className="font-semibold">Datos del usuario:</span>
            <p className="font-thin text-slate-400">Uid: {usuario.uid}</p>
            <p className="font-thin text-slate-400">Nombre: {usuario.nombre}</p>
            <p className="font-thin text-slate-400">
              Status: {usuario.status ? "Verificado" : "Sin Verificar"}
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};
