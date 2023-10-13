import React from 'react'
import { Btn, StyleHeader, StyleLogo, Footer, ContainerForm } from '../Components/UI'
import { FormularioRegister } from '../Components/Formularios/FormularioRegister'


export const Register = () => {
  return (
    <>
      <StyleHeader>
        <StyleLogo href='/'>Vecinify</StyleLogo>
        <div>
          <Btn href='/Login'>Login</Btn>
        </div>
      </StyleHeader>

      <ContainerForm>
        <FormularioRegister />
      </ContainerForm>

      <Footer />
    </>
  )
}
