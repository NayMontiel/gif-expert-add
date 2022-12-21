import React from 'react'

export const GifCards = ({ titulo, img}) => {
  return (
    <>
        <div className='card'>
            
            <img src={img} alt={titulo} />
           
            <p className='card-title'>{titulo}</p>

        </div>

    </>
  )
}
