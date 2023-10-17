import styled from "styled-components";

export const StyleHeader = styled.nav`
    background: #59B1EA;
    padding: 0 12vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyleLogo = styled.a`
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    color: white;
    text-decoration: none;
`
export const Btn = styled.a`
    font-size: 20px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
`

//Estilos  formularios
export const ContainerForm = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;

`
export const StyleForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 60px 30px;
    width: 453px;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 5px 5px 40px #56BBE5;
`
export const StyleLegend = styled.legend`
    margin-bottom: 30px;
    color: #59B1EA;
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
`
export const StyledListaCategoria = styled.select`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    border-bottom: 1px solid #cccccc;
`

export const StyleCheckbox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;

`
export const StyleBtn = styled.a`
    background: #59B1EA;
    text-decoration: none;
    text-align: center;
    color: white;
    font-weight: 700;
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
`

//estilos footer
export const Footer = styled.footer`
    background: #59B1EA;
    height: 20vh;

`