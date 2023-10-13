import React, {useState} from 'react'
import { StyleForm,StyleBtnSubmit, StyleLegend, StyleCheckbox, StyleCampoInput } from '../UI'
import { ListaCategoria } from './ListaCategoria'
import { useForm } from '../../Hooks/useForm'

export const FormularioRegister = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    identificacion:   "",
    usuario: "",
    confirmacionUsuario: "",
    password: "",
    confirmacionPassword: "",
  }
  const [ categoria, setCategoria] = useState("")
  const [ checkbox, setCheckbox] = useState(false)

  const { formState, onChageCampo} = useForm(valorInicial)
  const { nombre, apellido, identificacion, usuario, confirmacionUsuario, password, confirmacionPassword} = formState

  console.log("onchange--",onChageCampo)
  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(formState)
  }

  return (
    <>
        <StyleForm onSubmit={onSubmit}>
          <StyleLegend>Registrarse</StyleLegend>
          <StyleCampoInput type="text" value={nombre} name='nombre' placeholder="Escriba su nombre" onChange={onChageCampo}/>
          <StyleCampoInput type="text" value={apellido} name='apellido' placeholder="Escriba su apellido"  onChange={onChageCampo}/>
          <ListaCategoria cambio={setCategoria}/>
          <StyleCampoInput type="text" value={usuario} name='usuario' placeholder="Escriba su usuario"  onChange={onChageCampo}/>
          <StyleCampoInput type="password" value={password} name='password' placeholder="Escriba su contraseña"  onChange={onChageCampo}/>
          <StyleCampoInput type="password" value={confirmacionPassword} name='confirmacionPassword' placeholder="Confirmación de contraseña" onChange={onChageCampo}/>
          <StyleCheckbox>
            <input type='checkbox' onClick={(e)=> setCheckbox(e.target.checked)} onChange={onChageCampo}/>
            <label >Acepta terminos y condiciones</label>
          </StyleCheckbox>
          <StyleBtnSubmit>Registrarse</StyleBtnSubmit>
        </StyleForm>
    </>
  )
}
