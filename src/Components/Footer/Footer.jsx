import React from 'react'
import styled from 'styled-components'
import Colors from '../UI/Colores'
import imgLogo from '../../Assets/img/logoVecinifySinFondo.png'

const { colorPrimario, colorSecundario } = Colors

const StyleContainerFooter = styled.footer`
    height: 20vh;
    background: #64b6ec;
    display: flex;
    margin-top: 50px;
    justify-content: center;

`
const StyleInfoFooter = styled.div`
    display: flex;
    align-items: center;
`
const StyleImgLogo = styled.img`
    width: 40px;
`
const StyleH5 = styled.h5`
    color: white;
    margin: 0;
`
export const Footer = () => {
    return (
        <>
            <StyleContainerFooter>
                <StyleInfoFooter>
                    <StyleImgLogo src={imgLogo} />
                    <StyleH5>Vecinify</StyleH5>
                </StyleInfoFooter>
            </StyleContainerFooter>
        </>
    )
}
