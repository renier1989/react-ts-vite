import { useForm } from "../hooks/useForm";

export const Formulario = () => {
  const { formulario, handleChange } = useForm({
    email: "",
    nombre: "",
  });

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
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white">Nombre :</label>
            <input
              type="text"
              name="nombre"
              className="rounded text-black outline-none p-2"
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
