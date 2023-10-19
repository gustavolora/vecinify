import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer, ContainerForm } from '../Components/UI'
import { FormularioRegister } from '../Components/Formularios/FormularioRegister'


export const Register = () => {
  return (
    <>
      <Header> </Header>

      <ContainerForm>
        <FormularioRegister />
      </ContainerForm>

      <Footer />
    </>
  )
}
