import React, { useEffect,  useEffect, useState  } from 'react'
import { StyleForm,  StyleSpan, StyleBtnSubmit, StyleLegend, StyleCheckbox, StyleCampoInput, StyleBtn, StyleBtn } from '../UI'
import { ListaCategoria } from './ListaCategoria'
import { useForm } from '../../Hooks/useForm'

export const FormularioRegister = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    identificacion:   "",
    usuario: "",
    password: "",
    confirmacionPassword: ""
  }
  const [ categoria, setCategoria] = useState("")
  const [ checkbox, setCheckbox] = useState(false)

  const { formState, onChangeCampo} = useForm(valorInicial)
  const { nombre, apellido, usuario, password, confirmacionPassword} = formState
  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(formState)
  }

  return (
    <>
        <StyleForm onSubmit={onSubmit}>
          <StyleLegend>Registrarse</StyleLegend>
          <StyleCampoInput type="text" value={nombre} name='nombre' placeholder="Escriba su nombre" onChange={onChangeCampo}/>
          <StyleCampoInput type="text" value={apellido} name='apellido' placeholder="Escriba su apellido"  onChange={onChangeCampo}/>
          <ListaCategoria cambio={setCategoria}/>
          <StyleCampoInput type="text" value={usuario} name='usuario' placeholder="Escriba su usuario"  onChange={onChangeCampo}/>
          <StyleCampoInput type="password" value={password} name='password' placeholder="Escriba su contraseña"  onChange={onChangeCampo}/>
          <StyleCampoInput type="password" value={confirmacionPassword} name='confirmacionPassword' placeholder="Confirmación de contraseña" onChange={onChangeCampo}/>
          <StyleCheckbox>
            <input type='checkbox' required onClick={(e)=> setCheckbox(e.target.checked)}/>
            <label >Acepta terminos y condiciones</label>
          </StyleCheckbox>
          {
            categoria === "Tienda"? <StyleBtnSubmit>Continuar</StyleBtnSubmit>: <StyleBtnSubmit>Registrarse</StyleBtnSubmit>
          }
        </StyleForm>
    </>
  )
}
