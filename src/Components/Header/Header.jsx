import React, { useContext, useState } from 'react'
import { StyleHeader, StyledHeaderInfo, StyleImgLogo, StyleCount, StyleIconoCarro, StyleLoginRegister, StyleUl, StyledLi, StyledA, StyledHeaderNav, StyleLogo, Btn, StyleImg, StyleCar, StyleCajaBuscar, StyleInputSearch } from '../UI/StyleHeader.js'
import carrito from '../../Assets/img/cart.png'
import search from '../../Assets/img/search.png'
import user from '../../Assets/img/user.png'
import imgLogo from '../../Assets/img/logoVecinify.png'
import { CarroCompra } from '../CarroCompra/CarroCompra.jsx'
import { StyleNavLink } from '../UI/index.js'
import { CarroComprasContext } from '../../Context/CarroComprasContext.jsx'



export const Header = () => {

    const [compras, setCompras] = useState(false)
    const { listaCompra } = useContext(CarroComprasContext)

    const mostrarCompra = () => {
        setCompras(!compras)
    }

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
                        <StyleNavLink to='/login'>
                            <Btn><strong>¡Hola! Inicia sesión</strong><br /> o puedes registarte</Btn>
                        </StyleNavLink>
                        <StyleIconoCarro to='/carroCompras'>
                            <StyleCount>{listaCompra.length}</StyleCount>
                            <StyleImg src={carrito} />
                        </StyleIconoCarro>

                    </StyleCar>
                </StyledHeaderInfo>

                <StyledHeaderNav>
                    <StyleUl>
                        <StyledLi><StyleNavLink to='/'>inicio</StyleNavLink></StyledLi>
                        <StyledLi><StyleNavLink>Tiendas</StyleNavLink></StyledLi>
                        <StyledLi><StyleNavLink to='/productos'>Productos</StyleNavLink></StyledLi>
                    </StyleUl>
                </StyledHeaderNav>

            </StyleHeader>
            {
                compras ? <CarroCompra /> : <></>
            }
        </>
    )
}
