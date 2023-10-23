import React from 'react'
import { StyleProducto, StyleImgProducto, StyleDivInfo, StyleNombre, StylePrecio} from '../UI/Card'



export const Tienda = ({imagen, nombre, precio}) => {

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
                </StyleDivInfo>
            </StyleProducto>
        </>
    )
}