import React, { useReducer } from 'react'
import { CarroComprasContext } from './CarroComprasContext'

// Creamos un arreglo vacío para almacenar productos en el carrito de compras
const valorInicial = []

export const CarroComprasProvaider = ({ children }) => {
    //Aquí se creo 5 funciones flechas para manejar la interaccion con el carro de compras el cual lleva el type que se identifica la que se va a hacer 
    // Función para agregar un producto al carrito de compras
    const agregarProducto = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar producto',
            payload: compra
        }
        dispatch(action)
    }
    // Función para eliminar un producto del carrito de compras por su id
    const eliminarProducto = (id) => {
        const action = {
            type: '[CARRITO] Eliminar producto',
            payload: id
        }
        dispatch(action)
    }
    // Función para aumentar la cantidad de un producto en el carrito por su id
    const aumentarProducto = (id) => {
        const action = {
            type: '[CARRITO] Aumentar producto',
            payload: id
        }
        dispatch(action)
    }
    // Función para disminuir la cantidad de un producto en el carrito por su id
    const disminuirProducto = (id) => {
        const action = {
            type: '[CARRITO] Disminuir producto',
            payload: id
        }
        dispatch(action)
    }
    // Función para eliminar todos los productos del carrito
    const eliminarProductos = () => {
        const action = {
            type: '[CARRITO] Eliminar productos',
            payload: ""
        }
        dispatch(action)
    }

    // La función comprasReducer maneja los cambios en el estado del carrito de compras
    const comprasReduces = (state = valorInicial, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar producto':
                return [...state, action.payload]
            case '[CARRITO] Eliminar producto':
                return state.filter(compra => compra.id !== action.payload)
            case '[CARRITO] Aumentar producto':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return { ...item, cantidad: cant }
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

    // Usamos el hook useReducer para manejar el estado del carrito de compras
    const [listaCompra, dispatch] = useReducer(comprasReduces, valorInicial)

    // Proporcionamos el contexto con los datos del carrito y las funciones
    return (
        <CarroComprasContext.Provider value={{ listaCompra, agregarProducto, eliminarProducto, aumentarProducto, disminuirProducto, eliminarProductos }}>
            {children}
        </CarroComprasContext.Provider>
    )
}
