import React from 'react'
import EverythingCard from './EverythingCard'

function Cards() {
  return (
    <div className='cards grid place-items-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
        <EverythingCard /> 
        <EverythingCard /> 
        <EverythingCard /> 
        <EverythingCard /> 
        <EverythingCard /> 
        <EverythingCard /> 
    </div>
  )
}

export default Cards
