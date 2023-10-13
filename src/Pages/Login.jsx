import React from 'react'
import { Btn, StyleHeader, StyleLogo, Footer, ContainerForm } from '../Components/UI'
import { FormularioLogin } from '../Components/Formularios/FormularioLogin'

export const Login = () => {
  return (
    <>
      <StyleHeader>
        <StyleLogo href='/'>Vecinify</StyleLogo>
        <div>
          <Btn href='/register'>Register</Btn>
        </div>
      </StyleHeader>

      <ContainerForm>
        <FormularioLogin/>
      </ContainerForm>

      <Footer />

    </>
  )
}
