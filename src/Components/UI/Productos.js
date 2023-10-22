import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const StyleContainerProductos = styled.div`
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    
`
export const StyleEncabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    @media (min-width:360px) and (max-width:768px){
        padding: 10px 10px;
    }
    @media (min-width:769px){
        padding: 10px 20px;
    }
    @media (min-width:1041px){
        padding: 10px 0;
    }
    
`
export const StyleTitulo = styled.h4`
    margin: 0;
    font-size: 16px;

`
export const StyleTituloProductos = styled.h4`
    text-align: center;
    padding: 20px 0;
`
export const StyleVerMas = styled(NavLink)`
    text-decoration: none;
`
export const StyleCards = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`