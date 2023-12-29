import React from 'react'
import { useState } from 'react'
import Products from '../Components/Products'

export default function Cart({ cartItem }) {

  return (
    <div>

      <>
        <div className='shadow-xl z-20 w-full absolute top-[105px] left-0  flex justify-center items-center px-2 lg:top-[70px] lg:left-[900px] lg:w-[400px] '>
          <div className=' bg-white w-[100%] max-w-[600px] flex flex-col rounded-lg '>
            <p className='font-bold p-5 border-b border-gray-300 '>Cart</p>

            {cartItem > 0 ? (
              <Products cartItem={cartItem} />
            ) : (
              <div className='flex justify-center items-center w-full p-40 '>
                Your cart is empty
              </div>
            )}

          </div>


        </div>
      </>

    </div>
  )
}
