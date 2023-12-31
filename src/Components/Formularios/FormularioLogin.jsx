import React from 'react'
import { StyleForm, StyleSpan, StyleBtnSubmit, StyleLegend, StyleBtn, StyleCampoInput, StyleLink   } from '../UI'
import { useForm } from '../../Hooks/useForm'
import { clientServices } from '../../services/services-client'
import { useNavigate } from 'react-router-dom'


export const FormularioLogin = () => {
  const valorInicial = {
    usuario: "",
    contrasena: ""
  }
  const navigate = useNavigate()

  //Utilizamo nuestro hook personalizado y le pasamos el valor inicial
  const { formState, onChangeCampo} = useForm(valorInicial)
  const { usuario, contrasena } = formState

  const onSubmit = (e) =>{
    e.preventDefault()
    //Llamamos a nuestro servio login para verificar que los datos ingresado si existan en la base de datos
    clientServices.Login().then((users) =>{
      users.forEach(({password, username}) => {
        //Hacemos la verificación y si es correcta no redirige al inicio de lo contrario nos mostrara un mensaje
        if (password === contrasena && username === usuario) {
          alert("Login exitoso")
          navigate('/')
        }else{
          console.log("Contraseña o usuario incorrectos")
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
          <StyleSpan>¿No tienes una cuenta aún? <StyleLink to='/register'>Crear cuenta</StyleLink></StyleSpan>
        </StyleForm>
    </>
  )
}
