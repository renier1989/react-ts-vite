import { ChangeEvent, useState } from "react";

export const useForm = (target:any) =>{
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
        handleChange
      }
}