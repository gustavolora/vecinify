import React, { useContext } from 'react'
import styled from 'styled-components'
import Colores from '../Components/UI/Colores'
import iconoTrash from '../Assets/img/trash-icon.png'
import { CarroComprasContext } from '../Context/CarroComprasContext'

const { colorPrimario, colorSecundario } = Colores

const StyleContainerCarro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${colorPrimario};
  padding: 0 0 20px 0;

`
const StyleTitulo = styled.h1`
  color: ${colorPrimario};
`
const StyleH2 = styled.h2`
  color: ${colorPrimario};
  margin-bottom: 350px;
`
const StyleContainerCompras = styled.div`
  width: 600px;
  height: auto;
  background: ${colorPrimario};
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media (min-width: 360px)and (max-width:768px){
       width: 350px;
  }
`
const StyleContainerProducto = styled.div`
  height: auto;
  width: 100%;
  border-radius: 5px;
  background: ${colorSecundario};
  padding: 8px;
  display: flex;
  gap: 10px;

`
const StyleImg = styled.img`
  width: 100px;
  object-fit: cover;
  border-radius: 5px;
  height: 80px;
  background: ${colorSecundario};
`
const StyleDivInfo = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
  position: relative;
`
const StyleIcono = styled.img`
  position: absolute;
  right: 0;
  
`
const StyleContainerBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StylePrice = styled.p`
  margin: 0;
  font-weight: 600;
`
const StyleBtns = styled.div`
  display: flex;
  gap: 3px;
`
const StyleBtn = styled.button`
  height: 25px;
  text-align: center;
  width: 25px;
 background: white;
 border: none;
 color: ${colorPrimario};
 border-radius: 5px;
 font-weight: 700;
`
const StylePagar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colorSecundario};
  padding: 6px;
  border-radius: 5px;
`
const StyleH3 = styled.h3`
  margin: 0;
`
const BtnPagar = styled.button`
  width: 100%;
  border: none;
  padding: 5px;
  color: ${colorPrimario};
  border-radius: 5px;
  background: ${colorSecundario};
  &:hover{
    background: #1371b6;
    color: white;
  }
`


export const CarritoCompras = () => {
  const { listaCompra, eliminarProducto, aumentarProducto, disminuirProducto, eliminarProductos} = useContext(CarroComprasContext)

  const calcularTotal = () => {
    return listaCompra.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }
  const handleCompra = () => {
    alert("Compra exitosa")
    eliminarProductos()
  }
  

  return (
    <>
      <StyleContainerCarro>
        <StyleTitulo>Compras</StyleTitulo>
        {
          listaCompra.length < 1
            ? <StyleH2>No hay productos por comprar</StyleH2>
            :
            <StyleContainerCompras>
              {
                listaCompra.map((item) => {
                  return (
                    <StyleContainerProducto key={item.id}>
                      <StyleImg src={item.image} />
                      <StyleDivInfo>
                        <StyleIcono onClick={() => eliminarProducto(item.id)} src={iconoTrash} />
                        <p>{item.title.length > 20 ? item.title.substring(0, 20) + "...":item.title}</p>
                        <StyleContainerBtns>
                          <StyleBtns>
                            <StyleBtn type='button' onClick={() => disminuirProducto(item.id)}>-</StyleBtn>
                            <StyleBtn>{item.cantidad}</StyleBtn>
                            <StyleBtn type='button' onClick={() => aumentarProducto(item.id)}>+</StyleBtn>
                          </StyleBtns>
                          <StylePrice>${item.price}</StylePrice>
                        </StyleContainerBtns>
                      </StyleDivInfo>
                    </StyleContainerProducto>
                  )
                })
              }
              <StylePagar>
                <StyleH3>Total</StyleH3>
                <StyleH3>${calcularTotal()}</StyleH3>
              </StylePagar>
              <BtnPagar disabled={listaCompra < 1} onClick={handleCompra}>Comprar</BtnPagar>

            </StyleContainerCompras>
        }

      </StyleContainerCarro>
    </>
  )
}
