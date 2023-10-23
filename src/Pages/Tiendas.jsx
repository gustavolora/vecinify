import React, { useContext } from 'react'
import { StyleCards, StyleContainerProductos, StyleTituloProductos } from '../Components/UI/Productos'
import { ProductosContext } from '../Context/ProductosContext'
import { Tienda } from '../Components/Tienda/Tienda'

export const Tiendas = () => {

    // Aquí utilizamos el context de productos pero solo de prueba, aquí en realidad va el contexto de las tiendas
    const { productos } = useContext(ProductosContext)
    return (
        <>
            <StyleContainerProductos>
                <StyleTituloProductos>Tiendas</StyleTituloProductos>
                <StyleCards>
                    {
                        // Mapeamos las tiendas para renderizar la información de cada tienda
                        productos.map((producto) => {
                            return (
                                <Tienda
                                    key={producto.id}
                                    imagen={producto.image}
                                    nombre={producto.title}
                                    precio={producto.price}
                                />
                            )
                        })
                    }


                </StyleCards>
            </StyleContainerProductos>
        </>
    )
}
