import { useState } from "react"

export const useForm = (valorInicial = {}) => {

    const [formState, setFormState] = useState(valorInicial)

    const onChangeCampo = ({e}) =>{
        const { name, value } = e.target
        console.log(name, "---", value)
        setFormState({
            ...formState,
            [name]: value
        })
    }

  return {
    formState,
    onChangeCampo
  }
}
