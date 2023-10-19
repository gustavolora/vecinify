import React from 'react'
import { StyleHeader, StyledHeaderInfo, StyleImgLogo, StyleLoginRegister, StyleUl, StyledLi, StyledA, StyledHeaderNav, StyleLogo, Btn, StyleImg, StyleCar, StyleCajaBuscar, StyleInputSearch } from '../UI/StyleHeader.js'
import carrito from '../../Assets/img/cart.png'
import search from '../../Assets/img/search.png'
import user from '../../Assets/img/user.png'
import imgLogo from '../../Assets/img/logoVecinify.png'


export const Header = () => {
    return (
        <>
            <StyleHeader>
                <StyledHeaderInfo>
                    <StyleLogo href='/'>
                        <StyleImgLogo src={imgLogo} />
                    </StyleLogo>
                    <StyleCajaBuscar>
                        <StyleInputSearch placeholder='¿Qué estás buscando?' type="search" />
                        <StyleImg src={search} />
                    </StyleCajaBuscar>
                    <StyleCar>
                        <StyleImg src={user} />
                        <StyleLoginRegister>
                            <Btn href='/login'><strong>¡Hola! Inicia sesión</strong><br /> o puedes registarte</Btn>
                        </StyleLoginRegister>
                        <StyleImg src={carrito} />
                    </StyleCar>
                </StyledHeaderInfo>

                <StyledHeaderNav>
                    <StyleUl>
                        <StyledLi><StyledA href='/'>inicio</StyledA></StyledLi>
                        <StyledLi><StyledA>Quines somos</StyledA></StyledLi>
                        <StyledLi><StyledA>Tiendas</StyledA></StyledLi>
                        <StyledLi><StyledA>Productos</StyledA></StyledLi>
                        <StyledLi><StyledA>Catalogo</StyledA></StyledLi>
                    </StyleUl>
                </StyledHeaderNav>

            </StyleHeader>
        </>
    )
}
