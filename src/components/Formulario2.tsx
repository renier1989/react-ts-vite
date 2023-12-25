import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {
  const {postal,direccion, formulario, handleChange } = useForm({
    postal: 'postal',
    direccion : 'algo'
  });

  return (
    <>
      <form autoComplete="off">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-full">
            <label className="text-white">Codigo Postal:</label>
            <input
              type="text"
              name="postal"
              className="rounded text-black outline-none p-2"
              value={postal}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white">Dirección :</label>
            <input
              type="text"
              name="direccion"
              className="rounded text-black outline-none p-2"
              value={direccion}
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
