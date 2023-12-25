import { useForm } from "../hooks/useForm";

interface IFormData {
  email: string;
  nombre: string;
  edad: number
}

export const Formulario = () => {
  const { nombre, email,edad,formulario, handleChange } = useForm<IFormData>({
    email: "renier@gmail.com",
    nombre: "Renier Vargas",
    edad: 33
  });

  // const { email, nombre, edad } = formulario

  return (
    <>
      <form autoComplete="off">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-full">
            <label className="text-white">Email :</label>
            <input
              type="email"
              name="email"
              className="rounded text-black outline-none p-2"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white">Nombre :</label>
            <input
              type="text"
              name="nombre"
              className="rounded text-black outline-none p-2"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white">Edad :</label>
            <input
              type="number"
              name="edad"
              className="rounded text-black outline-none p-2"
              value={edad}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <pre className="italic">{JSON.stringify(formulario)}</pre>
        </div>
      </form>
    </>
  );
};
