import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'





export default function Navbar({onCartClick}) {
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)


    const [iconState, setIconState] = useState("hamburger")

    const handleCart = () => {
        setCartOpen(!cartOpen)
    }

    const handleMenuToggle = () => {
        setOpen(!open);
        if (iconState === 'hamburger') {
            setIconState('close');
            !onCartClick
        } else {
            setIconState('hamburger');
        }
        
    };


    return (

        <div className='relative p-4 flex justify-between items-center  max-w-[1200px] lg:py-[1rem]  mx-auto border-b-2 '>
            {/*light box when the hamburger menu open*/}
            <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-75 transition-opacity duration-300 ease-in-out ${open ? '' : 'hidden'}`} />

            <button className=' absolute  left-0 top-0 mt-7 md:hidden lg:hidden' onClick={handleMenuToggle}>
                <Hamburger toggled={open} size={20} toggle={setOpen} />
            </button>
            <div className=' flex flex-row flex-1 w-full gap-x-10 items-center'>
                <div><p className='mb-1 text-black font-semibold font-Kumbh text-[40px] tracking-tighter pl-10 lg-pl-0 '>sneakers</p></div>
                <ul className='hidden cursor-pointer text-gray-500  items-center gap-x-5 lg:flex lg:flex-row lg:min-w-[500px] lg:py-4 '>
                    <li className=' hover:border-b-4 hover:border-orange-500' >Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='z-20 absolute flex  top-0 left-0 p-30 min-w-[350px]' >
                {open && (
                    <div className='bg-white w-full  p-5 '>
                        <button className='pl-5 absolute  left-0 top-0 mt-7 md:hidden lg:hidden' onClick={handleMenuToggle}>
                            <Hamburger toggled={open} size={20} toggle={setOpen} /> </button>
                        <ul className=' ml-4 mt-[80px] cursor-pointer text-black h-screen min-w-[300px] font-bold'>
                            <li className='mb-5'>Collections</li>
                            <li className='mb-5'>Men</li>
                            <li className='mb-5'>Women</li>
                            <li className='mb-5'>About</li>
                            <li className='mb-5'>Contact</li>
                        </ul></div>

                )}</div>


            <div className='relative flex gap-x-10 justify-evenly items-center ' >
                <svg  onClick={onCartClick} className='cursor-pointer' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" />
                </svg>
              
                <div className='hover:border-orange-500 hover:border-[2px] hover:rounded-full'>
                    <img className=' w-10 h-10 cursor-pointer' src="./images/imageavatar.png" alt="person avatar" />
                </div>
            </div>

           

        </div >


    )
}
