import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { ProductosContext } from '../../Context/ProductosContext'
import { CarroComprasContext } from '../../Context/CarroComprasContext'
import { StyleCards, StyleContainerProductos, StyleEncabezado, StyleTitulo, StyleVerMas } from '../UI/Productos'





export const Productos = () => {

    const { productos } = useContext(ProductosContext)
    const { listaCompra, agregarProducto, eliminarProducto } = useContext(CarroComprasContext)
    const [lista, setLista] = useState([])

    const [items, setItems] = useState([])

    useEffect(() => {
        const limiteProductos = productos.slice(0, 5)
        setItems(limiteProductos)
    }, [])

    // const productosGet = async () => {
    //     const response = await fetch("https://api.vecinify.shop/api/v1/Product/")
    //     const data = await response.json()
    //     console.log(data)
    //     setLista(data)
    // }
    // useEffect(()=>{
    //     productosGet()
    // },[])

    const handleAgregar = (compra) => {
        agregarProducto(compra)
    }
    const handleEliminar = (id) => {
        eliminarProducto(id)

    }
    return (
        <>
            <StyleContainerProductos>
                <StyleEncabezado>
                <StyleTitulo>Productos</StyleTitulo>
                <StyleVerMas to='/productos'>Ver más</StyleVerMas>
                </StyleEncabezado>
                
                <StyleCards>
                    {
                        items.map((producto) => {
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
