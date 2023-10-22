import React from 'react'
import { Header } from '../Components/Header/Header'
import { ContainerForm } from '../Components/UI'
import { StyleHeader, Btn, StyleLogo } from '../Components/UI/StyleHeader'
import { FormularioLogin } from '../Components/Formularios/FormularioLogin'

export const Login = () => {
  return (
    <>
      <ContainerForm>
        <FormularioLogin/>
      </ContainerForm>


    </>
  )
}
