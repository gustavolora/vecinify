import React from 'react'
import { StyleForm, StyleSpan, StyleBtnSubmit, StyleLegend, StyleBtn, StyleCampoInput } from '../UI'
import { useForm } from '../../Hooks/useForm'
import { clientServices } from '../../services/services-client'
import { useNavigate } from 'react-router-dom'

export const FormularioLogin = () => {
  const navigate = useNavigate()
  const valorInicial = {
    usuario: "",
    contrasena: ""
  }

  const { formState, onChangeCampo} = useForm(valorInicial)
  const { usuario, contrasena } = formState

  const onSubmit = (e) =>{
    e.preventDefault()

    clientServices.Login().then((users) =>{
      users.forEach(({password, username}) => {
        if (password === contrasena && username === usuario) {
          console.log("Login exitoso")
          navigate("/activo")
        }else{
          console.log("Acceso denegado")
        }
      });
    })
  }

  return (
    <>
        <StyleForm onSubmit={onSubmit}>
          <StyleLegend>Bienvenido</StyleLegend>
          <StyleCampoInput name='usuario' value={usuario} type="text" placeholder="Escriba su usuario" onChange={onChangeCampo}/>
          <StyleCampoInput name='contrasena' value={contrasena} type="password" placeholder="Escriba su contraseña" onChange={onChangeCampo}/>
          <StyleBtnSubmit>Inciar sesión</StyleBtnSubmit>
          <StyleSpan>¿No tienes una cuenta aún? <StyleBtn href='/register'>Crear cuenta</StyleBtn></StyleSpan>
        </StyleForm>
    </>
  )
}
