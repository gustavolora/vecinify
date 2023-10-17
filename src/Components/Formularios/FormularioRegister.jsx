import React, { useEffect, useState } from 'react'
import { StyleForm, StyleBtnSubmit, StyleLegend, StyleCheckbox, StyleCampoInput, StyleBtn } from '../UI'
import { ListaCategoria } from './ListaCategoria'
import { useForm } from '../../Hooks/useForm'
import { clientServices } from '../../services/services-client.js'


export const FormularioRegister = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    password: "",
    confirmacionPassword: ""
  }
  const [categoria, setCategoria] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  const { formState, onChangeCampo } = useForm(valorInicial)
  const { nombre, apellido, email, usuario, password, confirmacionPassword } = formState

  const onSubmit = (e) => {
    e.preventDefault()
    if (password === confirmacionPassword) {
      const fecha = new Date().toISOString()
      clientServices.Registrar(nombre, apellido, email, usuario, password, categoria, fecha)
    }else{
      console.log("Error")
    }
  }

  const users = async () =>{
    const response = await fetch("http://127.0.0.1:8000/api/v1/User/")
    const data = await response.json()

    console.log(data)
  }

  useEffect(()=>{
    users()
  },[])


  return (
    <>
      <StyleForm onSubmit={onSubmit}>
        <StyleLegend>Registrarse</StyleLegend>
        <StyleCampoInput type="text" value={nombre} name='nombre' placeholder="Escriba su nombre" onChange={onChangeCampo} />
        <StyleCampoInput type="text" value={apellido} name='apellido' placeholder="Escriba su apellido" onChange={onChangeCampo} />
        <ListaCategoria cambio={setCategoria} />
        <StyleCampoInput type='email' value={email} name='email' placeholder='Escriba su email' onChange={onChangeCampo}/>
        <StyleCampoInput type="text" value={usuario} name='usuario' placeholder="Escriba su usuario" onChange={onChangeCampo} />
        <StyleCampoInput type="password" value={password} name='password' placeholder="Escriba su contraseña" onChange={onChangeCampo} />
        <StyleCampoInput type="password" value={confirmacionPassword} name='confirmacionPassword' placeholder="Confirmación de contraseña" onChange={onChangeCampo} />
        <StyleCheckbox>
          <input type='checkbox' required onClick={(e) => setCheckbox(e.target.checked)} />
          <label >Acepta terminos y condiciones</label>
        </StyleCheckbox>
        {
          categoria === "Tienda" ? <StyleBtn href='/register/tienda'>Login</StyleBtn> : <StyleBtnSubmit value="registrar">Registrarse</StyleBtnSubmit>
        }
      </StyleForm>
    </>
  )
}
