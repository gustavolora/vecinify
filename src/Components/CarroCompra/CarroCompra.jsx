import React from 'react'
import styled from 'styled-components'
import Colors from '../UI/Colores'

const { colorPrimario, colorSecundario} = Colors

const StyleContainerCar = styled.div`
    width: 400px;
    height: 500px;
    background: ${colorSecundario};
    position: absolute;
    display: flex;
    justify-content: center;
    right: 20px;
    top: 70px;
    border-radius: 10px;
`
const StyleTitulo = styled.h2`
    padding: 10px;
`

export const CarroCompra = () => {
  return (
    <>
        <StyleContainerCar>
            <StyleTitulo>Carrito de compras</StyleTitulo>

        </StyleContainerCar>
    </>

  )
}
