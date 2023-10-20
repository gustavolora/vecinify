import React from 'react'
import { StyledListaCategoria } from '../UI'

export const ListaCategoria = ({cambio}) => {

  const valorCategoria = (e) =>{
    cambio(e.target.value)
  }
  
  return (
    <>
        <StyledListaCategoria onChange={valorCategoria}>
            <option value="" defaultValue='' hidden >Seleccione categoria</option>
            <option value="Cliente">Cliente</option>
            <option value="Tienda">Tienda</option>
            <option value="Repartidor">Repartidor</option>
        </StyledListaCategoria>
    </>
  )
}
