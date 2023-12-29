import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

export default function Products({ cartItem }) {
    
    return (
        <>
            <div className='font-Kumbh text-gray-500  relative z-30 flex flex-row p-2 justify-evenly items-center w-full'>
                <img className='w-[50px] h-[50px] rounded-lg' src="/images/image-product-1-thumbnail.jpg" />
                <div className='flex flex-col text-lg'>
                    <p>Fall Limited Edition Sneaker</p>
                    <div className='flex flex-row gap-x-2'>
                        <p>$125.00</p>
                        <p>x</p>
                        <p>{cartItem}</p>
                        <p className='text-black font-bold'><span>$</span>{125.00 * cartItem}.00</p></div>

                </div>
                <FaTrashCan className='cursor-pointer' size={20} />

            </div>
            <div className='px-10 mt-2 w-full flex justify-center items-center'>
                <button className='w-screen mb-5 rounded-lg gap-x-3 bg-orange-500 p-4 text-white flex flex-row justify-center items-center lg:flex-1 lg:max-w-[400px] '>
                    <span>Checkout</span></button></div>
        </>
    )
}
