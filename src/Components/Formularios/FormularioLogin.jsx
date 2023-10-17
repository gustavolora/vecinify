import React from 'react'
import { StyleForm, StyleBtnSubmit, StyleLegend, StyleCampoInput } from '../UI'
import { useForm } from '../../Hooks/useForm'

export const FormularioLogin = () => {

  const valorInicial = {
    usuario: "",
    password: ""
  }

  const { formState, onChangeCampo} = useForm(valorInicial)
  const { usuario, password } = formState

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(formState)
  }

  return (
    <>
        <StyleForm onSubmit={onSubmit}>
          <StyleLegend>Bienvenido</StyleLegend>
          <StyleCampoInput name='usuario' value={usuario} type="text" placeholder="Escriba su usuario" onChange={onChangeCampo}/>
          <StyleCampoInput name='password' value={password} type="password" placeholder="Escriba su contraseña" onChange={onChangeCampo}/>
          <StyleBtnSubmit>Inciar sesión</StyleBtnSubmit>
        </StyleForm>
    </>
  )
}
