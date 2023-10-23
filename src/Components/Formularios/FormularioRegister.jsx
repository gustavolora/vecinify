import React, { useState } from 'react'
import { StyleForm, StyleSpan, StyleBtnSubmit, StyleLegend, StyleCheckbox, StyleCampoInput, StyleLink } from '../UI'
import { ListaCategoria } from './ListaCategoria'
import { useForm } from '../../Hooks/useForm'

export const FormularioRegister = () => {
  //Valor inicial del usuario que se va a registrar
  const valorInitial = {
    nombre: "",
    apellido: "",
    identificacion: "",
    usuario: "",
    password: "",
    confirmacionPassword: "",
    nombreTienda: "",
    direccion: "",
    dueno: ""
  }

  //Guardamos el estado de la categoria y del checkbox
  const [categoria, setCategoria] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  //Utilizamos nuestro hook personalizado y se le pasa el estado inicial
  const { formState, limpiarInputs, onChangeCampo } = useForm(valorInitial)
  const { nombre, apellido, usuario, password, confirmacionPassword, nombreTienda, direccion, dueno } = formState

  //En la función onSubmit verifica la contraseña y que categoria no este vacio
  const onSubmit = (e) => {
    e.preventDefault()
    if(password === confirmacionPassword && categoria === !""){
      console.log(formState)
    }else{
      alert("Ocurrio un error, verifica los campos")
    }
    
    limpiarInputs()
  }

  return (
    <>
      <StyleForm onSubmit={onSubmit}>
        <StyleLegend>Registrarse</StyleLegend>
        <StyleCampoInput type="text" value={nombre} name='nombre' placeholder="Escriba su nombre" onChange={onChangeCampo} required />
        <StyleCampoInput type="text" value={apellido} name='apellido' placeholder="Escriba su apellido" onChange={onChangeCampo} required />
        <ListaCategoria cambio={setCategoria} required />
        <StyleCampoInput type="text" value={usuario} name='usuario' placeholder="Escriba su usuario" onChange={onChangeCampo} required />
        <StyleCampoInput type="password" value={password} name='password' placeholder="Escriba su contraseña" onChange={onChangeCampo} required />
        <StyleCampoInput type="password" value={confirmacionPassword} name='confirmacionPassword' placeholder="Confirmación de contraseña" onChange={onChangeCampo} required />
        {
          categoria === "Tienda" ?
            <>
              <StyleCampoInput name='nombreTienda' value={nombreTienda} onChange={onChangeCampo} required placeholder='Nombre de la tienda' />
              <StyleCampoInput name='direccion' value={direccion} onChange={onChangeCampo} required placeholder='Dirección' />
              <StyleCampoInput name='dueno' value={dueno} onChange={onChangeCampo} required placeholder='Nombre del dueño' />

            </> : <></>
        }
        <StyleCheckbox>
          <input type='checkbox' required onClick={(e) => setCheckbox(e.target.checked)} />
          <StyleLink to='teminos' >Acepta terminos y condiciones</StyleLink>
        </StyleCheckbox>
        <StyleBtnSubmit>Registrarse</StyleBtnSubmit>
        <StyleSpan>¿Ya tienes cuenta? <StyleLink to='/login'>Iniciar sesión</StyleLink></StyleSpan>
      </StyleForm>
    </>
  )
}
