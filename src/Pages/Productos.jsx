import React, { useContext } from 'react'
import { StyleCards, StyleContainerProductos, StyleEncabezado, StyleTitulo, StyleTituloProductos } from '../Components/UI/Productos'
import { CarroComprasContext } from '../Context/CarroComprasContext'
import { ProductosContext } from '../Context/ProductosContext'
import { Card } from '../Components/Card/Card'

export const Productos = () => {

    const { productos } = useContext(ProductosContext)
    const { listaCompra, agregarProducto, eliminarProducto } = useContext(CarroComprasContext)
    const handleAgregar = (compra) => {
        agregarProducto(compra)
    }
    const handleEliminar = (id) => {
        eliminarProducto(id)

    }
    return (
        <>
            <StyleContainerProductos>
                    <StyleTituloProductos>Productos</StyleTituloProductos>
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
