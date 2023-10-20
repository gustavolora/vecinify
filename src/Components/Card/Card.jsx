import React from 'react'
import styled from 'styled-components'
import ImgProducto from '../../Assets/img/productos/buchanans.jpg'
import Colors from '../UI/Colores'

const { colorPrimario, colorSecundario} = Colors

const StyleProducto = styled.div`
    width: 200px;
    background: ${colorSecundario};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`
const StyleImgProducto = styled.img`
    max-width: 100%;
`
const StyleDivInfo = styled.div`
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const StyleNombre = styled.p`
    font-size: 12px;
    color: ${colorPrimario};
    font-weight: 400;
`
const StylePrecio = styled.p`
    font-size: 16px;
    color: ${colorPrimario};
    font-weight: 700;
`
const StyleContentBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const StyleBtnComprar = styled.a`
    padding: 8px 12px;
    font-size: 12px;
    background: ${colorPrimario};
    color: white;
    cursor: pointer;
    &:hover{
        background: #1371b6;
    }
`
const StyleBtnStock = styled.a`
    cursor: pointer;
    padding: 0 16px 0 4px;
    font-size: 10px;
`

export const Card = () => {
    
    return (
        <>
            <StyleProducto>
                <StyleImgProducto src={ImgProducto}/>
                <StyleDivInfo>
                    <StyleNombre>Whisky Buchanans Deluxe 12 años 750ml</StyleNombre>
                    <StylePrecio>$ 130.000</StylePrecio>
                    <StyleContentBtns>
                        <StyleBtnComprar>Comprar</StyleBtnComprar>
                        <StyleBtnStock> En stock</StyleBtnStock>
                    </StyleContentBtns>
                </StyleDivInfo>
            </StyleProducto>

        </>
    )
}
