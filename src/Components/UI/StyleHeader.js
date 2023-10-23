import styled from "styled-components";
import Colors from "./Colores";
import { NavLink } from "react-router-dom";

const {colorPrimario, colorSecundario} = Colors

export const StyleHeader = styled.nav`

`
export const StyledHeaderInfo = styled.div`
    background: white;
    padding: 0 12vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (min-width:360px) and (max-width:768px){
        padding: 0 5px;
        height: 50px;
    }
    @media (min-width:769px) and (max-width:1200px){
        padding: 0 10px;
        height: 60px;
    }
`

export const StyleImgLogo = styled.img`
    width: 90px;
    height: 60px;
    @media (min-width:360px) and (max-width:768px){
        width: 60px;
        height: 40px;
    }
    @media (min-width:769px) and (max-width:1200px){

    }
`
export const StyleLogo = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`
export const Btn = styled.p`
    font-size: 12px;
    color: #59B1EA;
    padding-top: 12px;
    line-height: normal;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    @media (min-width:360px) and (max-width:768px){
        font-size: 10px;
    }
`
export const StyleLoginRegister = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    padding-top: 8px;
    justify-content: center;
`
export const StyleIconoCarro = styled(NavLink)`
    display: flex;
    margin: 0 10px  0 0;
    position: relative;
`
export const StyleCount = styled.p`
    position: absolute;
    background: ${colorPrimario};
    width: 18px;
    color: white;
    height: 18px;
    font-size: 12px;
    margin: 0;
    right: -10px;
    top: -10px;
    text-align: center;
    border-radius: 100px;
`
export const StyleImg = styled.img`
    height: 25px;
`
export const StyleCar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    @media (min-width:360px) and (max-width:768px){
        gap: 4px;
    }
`
export const StyleCajaBuscar = styled.div`
    border: 1px solid #59B1EA;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: 400px;
    width: 100%;
    @media (min-width:360px) and (max-width:768px){
        display: none;
    }
`
export const StyleIBuscar = styled.img`
    @media (min-width:769px){
        display: none;
    }
`
export const StyleInputSearch = styled.input`
    outline: none;
    border: none;
    width: 100%;
`
export const StyleDiv = styled.div`
    width: 100%;
    padding: 5px 15px;
    @media (min-width:769px){
        display: none;
    }
`
export const StyleInputSearchMobil = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: ${colorSecundario};
    border-radius: 10px;
    padding: 2px 5px;
`
export const StyledHeaderNav = styled.nav`
    background: #59B1EA;
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;
    @media (min-width:360px) and (max-width:768px){
        padding: 0;
    }
`
export const StyleUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 0;
    @media (min-width:360px) and (max-width:768px){
        padding: 0;
    }
`
export const StyledLi = styled.li`
    list-style: none;
    cursor: pointer;
`
export const StyledA = styled.a`
    text-decoration: none;
    color: white;
    cursor: pointer;
    @media (min-width:360px) and (max-width:768px){
        font-size: 14px;
    }
`