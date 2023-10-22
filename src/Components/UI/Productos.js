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
`
export const StyleTitulo = styled.h4`
    margin: 0;
    font-size: 16px;

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