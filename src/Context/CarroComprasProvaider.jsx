import React, { useReducer } from 'react'
import { CarroComprasContext } from './CarroComprasContext'

const valorInicial = []

export const CarroComprasProvaider = ({ children }) => {

    const agregarProducto = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar producto',
            payload: compra
        }
        dispatch(action)
    }
    const eliminarProducto = (id) => {
        const action = {
            type: '[CARRITO] Eliminar producto',
            payload: id
        }
        dispatch(action)
    }
    const aumentarProducto = (id) => {
        const action = {
            type: '[CARRITO] Aumentar producto',
            payload: id
        }
        dispatch(action)
    }
    const disminuirProducto = (id) => {
        const action = {
            type: '[CARRITO] Disminuir producto',
            payload: id
        }
        dispatch(action)
    }
    const eliminarProductos = () => {
        const action = {
            type: '[CARRITO] Eliminar productos',
            payload: ""
        }
        dispatch(action)
    }

    const comprasReduces = (state = valorInicial, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar producto':
                return [...state, action.payload]
            case '[CARRITO] Eliminar producto':
                return state.filter(compra => compra.id !== action.payload)
            case '[CARRITO] Aumentar producto':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return {...item, cantidad: cant }
                    return item
                })
            case '[CARRITO] Disminuir producto':
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant }
                    return item
                })
            case '[CARRITO] Eliminar productos':
                return []

            default:
                return state
        }
    }

    const [listaCompra, dispatch] = useReducer(comprasReduces, valorInicial)


    return (
        <CarroComprasContext.Provider value={{ listaCompra, agregarProducto, eliminarProducto, aumentarProducto, disminuirProducto, eliminarProductos}}>
            {children}
        </CarroComprasContext.Provider>
    )
}
