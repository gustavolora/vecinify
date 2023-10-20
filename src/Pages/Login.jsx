import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer, ContainerForm } from '../Components/UI'
import { StyleHeader, Btn, StyleLogo } from '../Components/UI/StyleHeader'
import { FormularioLogin } from '../Components/Formularios/FormularioLogin'

export const Login = () => {
  return (
    <>
      <Header></Header>

      <ContainerForm>
        <FormularioLogin/>
      </ContainerForm>

      <Footer />

    </>
  )
}
