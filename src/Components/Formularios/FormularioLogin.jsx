import React from 'react'
import { StyleForm,StyleBtnSubmit, StyleLegend } from '../UI'
import { CampoInput } from './CampoInput'

export const FormularioLogin = () => {
  return (
    <>
        <StyleForm>
          <StyleLegend>Bienvenido</StyleLegend>
          <CampoInput type="text" placeholder="Escriba su usuario"/>
          <CampoInput type="password" placeholder="Escriba su contraseña"/>
          <StyleBtnSubmit>Inciar sesión</StyleBtnSubmit>
        </StyleForm>
    </>
  )
}
