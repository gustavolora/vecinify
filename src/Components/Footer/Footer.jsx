import React from 'react'
import styled from 'styled-components'
import Colors from '../UI/Colores'
import { StyleLogo } from '../UI/StyleHeader'
import imgLogo from '../../Assets/img/logoVecinifySinFondo.png'

const { colorPrimario, colorSecundario } = Colors

const StyleContainerFooter = styled.footer`
    height: 20vh;
    background: #64b6ec;
    display: flex;
    justify-content: center;
`
const StyleImgLogo = styled.img`
    width: 40px;
`
const StyleH2 = styled.h5`
    color: white;
    margin: 0;
`
export const Footer = () => {
    return (
        <>
            <StyleContainerFooter>
                <StyleLogo>
                    <StyleImgLogo src={imgLogo} />
                    <StyleH2>Vecinify</StyleH2>
                </StyleLogo>
            </StyleContainerFooter>
        </>
    )
}
