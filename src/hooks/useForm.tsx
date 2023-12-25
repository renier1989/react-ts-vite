import { ChangeEvent, useState } from "react";

// para indicar que es tipo generico. se le asigna el <T>
// del lado donde se declara el useForm se le pude tambien espedificar una interface que me ayude ver mejor las propiedad que posee internamente.
export function useForm<T>(target:T){
// export const useForm = (target:any) =>{
    const [formulario, setformulario] = useState(target);
    
      // como estoy trabajando con elemenetos de un formulario utilizo este tipodo del ChangeEvent<HTMLImputElement>
      const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
    
        // asi puedo modificar los valores que entran en el fomrulario con el state
        // detecto el campo que estoy editando con la propiedad name del input deben tenes los mismo nombre
        // y luego le asigno el valor que se estas escribiendo
        setformulario({
          ...formulario,
          [name]: value,
        });
      };

      return {
        formulario,
        handleChange,
        ...formulario , // esto es par desestructurar los campos que se le estan pasando de una vez.
      }
}