import React from 'react'
import { StyleForm, StyleCampoInput, ContainerForm, StyleLegend, StyleBtnSubmit } from '../UI'
import { useForm } from '../../Hooks/useForm'

export const FormularioTienda = () => {
  const valorIncial = {
    nombreTienda: "",
    direccion: "",
    dueno: ""
  }
  const { formState, nombreTienda, direccion, dueno, onChangeCampo} = useForm(valorIncial)

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(formState)
  }

  return (
    <>
      <ContainerForm>
        <StyleForm onSubmit={onSubmit}>
          <StyleLegend>Datos de la tienda</StyleLegend>
          <StyleCampoInput name='nombreTienda' value={nombreTienda} onChange={onChangeCampo} required placeholder='Nombre de la tienda' />
          <StyleCampoInput name='direccion' value={direccion} onChange={onChangeCampo} required placeholder='Dirección' />
          <StyleCampoInput name='dueno' value={dueno} onChange={onChangeCampo} required placeholder='Nombre del dueño'/>
          <StyleBtnSubmit>Registrarse</StyleBtnSubmit>
        </StyleForm>
      </ContainerForm>
    </>
  )
}
