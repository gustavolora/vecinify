import React from 'react'
import { StyleCampoInput } from '../UI'

export const CampoInput = ({placeholder, type, cambio, name}) => {

  const value = (e) =>{
    console.log(e)
    cambio(e.target.value)
  }

  return (
    <>
        <StyleCampoInput required type={type} name={name} placeholder={placeholder} onChange={value}/>
    </>
  )
}
