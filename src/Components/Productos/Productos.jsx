import React, { useContext } from 'react'
import { Card } from '../Card/Card'
import styled from 'styled-components'
import { ProductosContext } from '../../Context/ProductosContext'
import { CarroComprasContext } from '../../Context/CarroComprasContext'

const StyleContainerProductos = styled.div`
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    
`
const StyleTitulo = styled.h2`
    margin-bottom: 16px;
    text-align: center;
`
const StyleCards = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Productos = () => {

    const { productos } = useContext(ProductosContext)
    const {  listaCompra, agregarProducto, eliminarProducto } = useContext(CarroComprasContext)

    const handleAgregar = (compra) =>{
        agregarProducto(compra)
    }
    const handleEliminar = (id) =>{
        eliminarProducto(id)
    }
    return (
        <>
            <StyleContainerProductos>
                <StyleTitulo>Productos</StyleTitulo>
                <StyleCards>
                    {
                        productos.map((producto) => {
                            return (
                                <Card
                                    key={producto.id}
                                    imagen={producto.image}
                                    nombre={producto.title}
                                    precio={producto.price}
                                    handleAgregar={() => handleAgregar(producto)}
                                    handleEliminar={() => handleEliminar(producto.id)}
                                />
                            )
                        })
                    }


                </StyleCards>
            </StyleContainerProductos>

        </>
    )
}
