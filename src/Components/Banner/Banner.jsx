import React from 'react'
import styled from 'styled-components'
import imgCocaCola from '../../Assets/img/banner/cocaCola.jpg'


const StyleBaner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    max-width: 1330px;
    width: 100%;
`
const StyleImgBannerMovil = styled.img`
    width: 100%;
    border-radius: 5px;
    @media (min-width: 480px){
        display: none;
    }
`
const StyleImgBannerTablet = styled.img`
    width: 300px;
    border-radius: 5px;
    @media (min-width: 1000px){
        display: none;
    }
    @media (max-width: 480px){
        display: none;
    }
`
const StyleImgBannerPc = styled.img`
    width: 300px;
    border-radius: 5px;
    @media (max-width: 1001px){
        display: none;
    }
`

export const Banner = () => {

    return (
        <>
            <StyleBaner>
                <StyleImgBannerMovil src={imgCocaCola}/>
                <StyleImgBannerTablet src={imgCocaCola}/>
                <StyleImgBannerTablet src={imgCocaCola}/>
                <StyleImgBannerPc src={imgCocaCola}/>
                <StyleImgBannerPc src={imgCocaCola}/>
                <StyleImgBannerPc src={imgCocaCola}/>
                
            </StyleBaner>
        </>
    )
}
