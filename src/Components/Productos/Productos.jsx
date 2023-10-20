import React from 'react'
import { Card } from '../Card/Card'

import styled from 'styled-components'

const StyleContainerProductos = styled.div`
    padding: 25px 0;
    
`
const StyleTitulo = styled.h2`
    margin-bottom: 16px;
`
const StyleCards = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

export const Productos = () => {
  return (
    <>
        <StyleContainerProductos>
            <StyleTitulo>Productos</StyleTitulo>
            <StyleCards>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                
               
            </StyleCards>
        </StyleContainerProductos>

    </>
  )
}
