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
const StyleImgBanner = styled.img`
    width: 300px;
    border-radius: 5px;
`

export const Banner = () => {

    return (
        <>
            <StyleBaner>
                <StyleImgBanner src={imgCocaCola}/>
                <StyleImgBanner src={imgCocaCola}/>
                <StyleImgBanner src={imgCocaCola}/>
                <StyleImgBanner src={imgCocaCola}/>
            </StyleBaner>
        </>
    )
}
