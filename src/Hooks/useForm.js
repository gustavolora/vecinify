import { useState } from "react"

export const useForm = (valorInicial = {}) => {

    const [formState, setFormState] = useState(valorInicial)

    const onChangeCampo = ({target}) =>{
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const limpiarInputs = () =>{
      setFormState(valorInicial)
    }

  return {
    formState,
    limpiarInputs,
    onChangeCampo
  }
}
