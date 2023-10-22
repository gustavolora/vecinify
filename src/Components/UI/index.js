import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Colors from "./Colores";
const {colorPrimario, colorSecundario} = Colors


//Estilos  formularios
export const ContainerForm = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    @media (min-width: 360px) and (max-width:768px){
        padding: 10px 10px;
    }

`
export const StyleNavLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;

`
export const StyleForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 40px 30px;
    width: 400px;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 5px 5px 40px #bfe0e2;
    @media (min-width: 360px)and (max-width:768px){
        padding: 10px 10px;
    }
`
export const StyleLegend = styled.legend`
    margin-bottom: 30px;
    color: #59B1EA;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
`
export const StyleCampoInput = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px solid #cccccc;
    outline: none;
    padding: 5px;
    box-sizing: border-box;
    @media (min-width: 360px)and (max-width:768px){
       font-size: 14px;
    }
`
export const StyledListaCategoria = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    border-bottom: 1px solid #cccccc;
    @media (min-width: 360px)and (max-width:768px){
       font-size: 14px;
    }
`

export const StyleCheckbox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;

`
export const StyleBtn = styled.a`
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    color: #59B1EA;
    cursor: pointer;
    border: none;
    height: 50px;
    width: 100%;
    
`
export const StyleBtnSubmit = styled.button`
    background: #59B1EA;
    color: white;
    font-weight: 700;
    cursor: pointer;
    border: none;
    padding: 5px;
    height: 50px;
    width: 100%;
    @media (min-width: 360px)and (max-width:768px){
       font-size: 14px;
    }
`
export const StyleSpan = styled.span`
    width: 100%;
    text-align: center;
    padding: 15px 0;
    color: #59B1EA;
`
export const StyleLink = styled(NavLink)`
    text-decoration: none;
    color: ${colorPrimario};
    font-weight: 700;
`
export const Link = styled(NavLink)`
`