import React, { useContext } from 'react'
import { StyleCards, StyleContainerProductos, StyleEncabezado, StyleTitulo, StyleTituloProductos } from '../Components/UI/Productos'
import { CarroComprasContext } from '../Context/CarroComprasContext'
import { ProductosContext } from '../Context/ProductosContext'
import { Card } from '../Components/Card/Card'

export const Productos = () => {

    // Obtenemos la lista de productos desde el contexto
    const { productos } = useContext(ProductosContext)
    // Obtenemos las funciones agregar y eliminar producto del context carro compras
    const { agregarProducto, eliminarProducto } = useContext(CarroComprasContext)

    //Estas funciones manejan el agregar y elimanar producto
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
                        // Mapeamos los productos para renderizar la información de cada producto
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
