import React from 'react'
import { Header } from '../Components/Header/Header'
import { Banner } from '../Components/Banner/Banner'
import styled from 'styled-components'
import { Productos } from '../Components/Productos/Productos'

const StyleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Home = () => {
    return (
        <>
            <Header></Header>
            <StyleContent>
                <Banner></Banner>
                <Productos></Productos>
            </StyleContent>

        </>
    )
}
