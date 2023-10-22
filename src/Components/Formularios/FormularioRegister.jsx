import React, { useEffect, useState } from 'react'
import { StyleForm, StyleSpan, StyleBtnSubmit, StyleLegend, StyleCheckbox, StyleCampoInput, StyleBtn, StyleLink, Link } from '../UI'
import { ListaCategoria } from './ListaCategoria'
import { useForm } from '../../Hooks/useForm'
import { FormularioTienda } from './FormularioTienda'

export const FormularioRegister = () => {
  const valorCliente = {
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
  const [categoria, setCategoria] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  const { formState, limpiarInputs, onChangeCampo } = useForm(valorCliente)
  const { nombre, apellido, usuario, password, confirmacionPassword, nombreTienda, direccion, dueno } = formState
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    limpiarInputs()
  }

  return (
    <>
      <StyleForm onSubmit={onSubmit}>
        <StyleLegend>Registrarse</StyleLegend>
        <StyleCampoInput type="text" value={nombre} name='nombre' placeholder="Escriba su nombre" onChange={onChangeCampo} required />
        <StyleCampoInput type="text" value={apellido} name='apellido' placeholder="Escriba su apellido" onChange={onChangeCampo} required />
        <ListaCategoria cambio={setCategoria} />
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
          <label >Acepta terminos y condiciones</label>
        </StyleCheckbox>
        <StyleBtnSubmit>Registrarse</StyleBtnSubmit>
        <StyleSpan>¿Ya tienes cuenta? <StyleLink to='/login'>Iniciar sesión</StyleLink></StyleSpan>
      </StyleForm>
    </>
  )
}
