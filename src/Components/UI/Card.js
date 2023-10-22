import styled from "styled-components";
import Colors from '../UI/Colores'

const { colorPrimario, colorSecundario} = Colors

export const StyleProducto = styled.div`
    width: 200px;
    border-radius: 0 0 5px 5px;
    background: ${colorSecundario};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    @media (min-width: 360px) and (max-width: 768px){
        width: 160px;
        height: fit-content;
    }
`
export const StyleImgProducto = styled.img`
    width: 100%;
    height: 180px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
`
export const StyleDivInfo = styled.div`
    padding: 14px;
    display: flex;
    flex-direction: column;
`
export const StyleNombre = styled.p`
    font-size: 12px;
    color: ${colorPrimario};
    font-weight: 400;
    margin-bottom: 5px;
    @media (min-width: 360px) and (max-width: 768px){
        margin: 0;
    }
`
export const StylePrecio = styled.p`
    font-size: 16px;
    color: ${colorPrimario};
    font-weight: 700;
    margin-bottom: 5px;
    @media (min-width: 360px) and (max-width: 768px){
        margin: 0;
    }
`
export const StyleContentBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const StyleBtnComprar = styled.button`
    padding: 8px 12px;
    font-size: 12px;
    text-decoration: none;
    background: ${colorPrimario};
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
        background: #1371b6;
    }
`
export const StyleBtnQuitar = styled.button`
    padding: 8px 12px;
    font-size: 12px;
    text-decoration: none;
    background: #1371b6;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
`
export const StyleBtnStock = styled.a`
    cursor: pointer;
    padding: 0 16px 0 4px;
    font-size: 10px;
`