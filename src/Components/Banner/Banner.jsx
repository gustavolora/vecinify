import React from 'react'
import styled from 'styled-components'
import imgLacteos from '../../Assets/img/banner/productos-lacteos.jpeg'
import imgGranos from '../../Assets/img/banner/granos.jpg'
import imgEnlatados from '../../Assets/img/banner/enlatados.jpg'


const StyleBaner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1330px;
    width: 100%;
`
const StyleImgBannerMovil = styled.img`
    width: 100%;
    border-radius: 5px;
    height: 200px;
    @media (min-width: 480px){
        display: none;
    }
`
const StyleImgBannerTablet = styled.img`
    width: 300px;
    border-radius: 5px;
    height: 200px;
    margin-top: 20px;
    @media (min-width: 1000px){
        display: none;
    }
    @media (max-width: 480px){
        display: none;
    }
`
const StyleImgBannerPc = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    margin-top: 20px;
    @media (max-width: 1001px){
        display: none;
    }
`

export const Banner = () => {

    return (
        <>
            <StyleBaner>
                
                
            </StyleBaner>
        </>
    )
}
