import React, { useState } from 'react'
import ImgProducto from '../../Assets/img/productos/buchanans.jpg'
import { StyleProducto, StyleImgProducto, StyleDivInfo, StyleNombre, StylePrecio, StyleContentBtns, StyleBtnComprar, StyleBtnQuitar} from '../UI/Card'



export const Card = ({imagen, nombre, precio, handleAgregar, handleEliminar}) => {

    const [agregado, setAgregado] = useState(true)
    const clickAgregar = () =>{
        handleAgregar()
        setAgregado(!true)
    }
    const clickQuitar = () =>{
        handleEliminar()
        setAgregado(!false)
    }
    const longitud = 18
    const nombreRecortado = nombre.length > 20
    ? nombre.substring(0, longitud) + "..."
    : nombre

    return (
        <>
            <StyleProducto>
                <StyleImgProducto src={imagen}/>
                <StyleDivInfo>
                    <StyleNombre>{nombreRecortado}</StyleNombre>
                    <StylePrecio>$ {precio}</StylePrecio>
                    <StyleContentBtns>
                        {
                            agregado
                            ? <StyleBtnComprar onClick={clickAgregar} type='button'>Agregar al carro</StyleBtnComprar>
                            : <StyleBtnQuitar onClick={clickQuitar} type='button'>Quitar del carro</StyleBtnQuitar>
                        }
                    </StyleContentBtns>
                </StyleDivInfo>
            </StyleProducto>

        </>
    )
}
