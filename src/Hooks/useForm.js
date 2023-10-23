import { useState } from "react"

export const useForm = (valorInicial = {}) => {

    //En este useState le pasamos un valor inicial que por defecto es un objeto vacio
    const [formState, setFormState] = useState(valorInicial)

    //La función onChangeCampo va a manejar lo que el usuario escribe
    const onChangeCampo = ({target}) =>{
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    //Esta función despues de hacer el registro deja los campo vacios
    const limpiarInputs = () =>{
      setFormState(valorInicial)
    }

  return {
    formState,
    limpiarInputs,
    onChangeCampo
  }
}
