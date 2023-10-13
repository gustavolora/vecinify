import React from 'react'
import styled from 'styled-components'
import { StyleHeader, StyleLogo, Btn } from '../UI'


export const Header = () => {
    return (
        <>
            <StyleHeader>
                <StyleLogo>Vecinify</StyleLogo>
                <div>
                    <Btn href='/login'>Login</Btn>
                </div>
            </StyleHeader>
        </>
    )
}
