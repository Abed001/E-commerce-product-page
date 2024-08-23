import React from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart'
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from 'react'

export default function Home() {

  const [currentIndex, setcurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [cartCount, setCartCount] = useState(0);


  const handleAddToCart = () => {
    setCartItems(cartCount);
    setCartCount(0);
  }
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  const Increment = () => {
    setCartCount(prevCartCount => prevCartCount + 1);
  };

  const Decrement = () => {
    setCartCount(prevCartCount => Math.max(0, prevCartCount - 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setcurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex)
  }


  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex]);

  const slides = [
    {
      url: '/images/image-product-1.jpg',
    },
    {
      url: './images/image-product-2.jpg',
    },
    {
      url: './images/image-product-3.jpg',
    },

    {
      url: './images/image-product-4.jpg',
    },


  ];


  return (
    <> <Navbar onCartClick={toggleCart} />
      {isCartOpen && (
        <Cart cartItem={cartItems}/>)}
      <div className=' font-bold font-Kumbh flex flex-col justify-center items-start lg:p-20  '>
        <div className=' flex flex-col justify-between items-center gap-x-20 lg:flex-row '>

          {/*product image and thumbnail on large screen*/}
          <div className='sm lg:flex lg:flex-col'>

            <div onClick={openModal} style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=' max-w-[200px] h-[500px] bg-cover bg-center bg-no-repeat duration-500 lg:min-w-[400px] lg:max-h-[400px] lg:rounded-xl lg:bg-top'></div>

            <div className='lg:flex lg:flex-row lg:w-full lg:justify-evenly'>
              {slides.map((slide, slideIndex) => (
                <div className={`hover:opacity-[50%] mt-10 gap-x-10 rounded-lg w-[80px] h-[80px] bg-cover bg-center bg-no-repeat duration-500  ${slideIndex == currentIndex ? 'border-4 border-orange-500 opacity-[50%]' : ''}`} key={slideIndex} onClick={() => goToSlide(slideIndex)} style={{ backgroundImage: `url(${slide.url})` }}></div>
              ))}

            </div>
          </div>
          {/*product image  on small screen*/}
          <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='lg:hidden w-full h-[250px] bg-cover bg-center bg-no-repeat duration-500  '></div>


          {/*when clicking on large image the modals open*/}
          {isModalOpen && (
            <div className="z-40 sm fixed inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-80" onClick={closeModal}></div>
              <div className="relative z-10 p-4">

                <div><IoCloseSharp size={30} className='mb-5 text-orange-500 ml-auto cursor-pointer ' onClick={closeModal} /></div>

                {/*product image and thumbnail on large screen*/}
                <div className='sm lg:flex lg:flex-col'>

                  <div onClick={openModal} style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=' max-w-[200px] h-[500px] bg-cover bg-center bg-no-repeat duration-500 lg:min-w-[400px] lg:max-h-[400px] lg:rounded-xl lg:bg-top'></div>

                  <div className='lg:flex lg:flex-row lg:w-full lg:justify-evenly'>
                    {slides.map((slide, slideIndex) => (
                      <div className={`hover:opacity-[50%] mt-10 gap-x-10 rounded-lg w-[80px] h-[80px] bg-cover bg-center bg-no-repeat duration-500  ${slideIndex == currentIndex ? 'border-4 border-orange-500 opacity-[50%]' : ''}`} key={slideIndex} onClick={() => goToSlide(slideIndex)} style={{ backgroundImage: `url(${slide.url})` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/*slider arrow for desktop light box*/}

              {/*slider left right*/}
              <div className='z-10 shadow absolute  top-[250px] left-[449px]  bg-white flex flex-row  items-center justify-around w-12 h-12  rounded-full '>
                <IoIosArrowBack className='cursor-pointer  hover:text-orange-500' size={20} onClick={nextSlide} />

              </div>

              <div className='z-10 shadow absolute  top-[250px] right-[449px]  bg-white flex flex-row  items-center justify-around w-12 h-12  rounded-full '>
                <IoIosArrowForward className='cursor-pointer  hover:text-orange-500' size={20} onClick={prevSlide} />
              </div>
            </div>


          )}


          <div className='p-4 mt-2'>
            <p className='uppercase text-paleorange text-md mb-5  text-orange-500'>sneaker company</p>
            <h1 className='uppercase block text-black text-3xl'>fall limited edition</h1>
            <h1 className='uppercase block text-black text-3xl mb-5'>sneaker</h1>
            <p className='text-left text-xl mb-5 text-gray-500 font-normal'>
              These low-profile sneakers are your perfect casual wear companion. Featuring a
              durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div className='w-full flex flex-row justify-between items-center mb-5 lg:flex-col  '>
              <div className='lg:w-full lg:justify-start lg:flex lg:flex-col'>
                <div className='w-full flex flex-row gap-x-5 items-center justify-center lg:justify-start'>
                  <span className=' text-xl text-black'>$125.00</span>
                  <span className=' bg-orange-100 text-orange-500 rounded-md px-2 py-1'> 50%</span>
                </div>
                <span className=' text-gray-400 line-through'> $250.00</span>
              </div>
            </div>

            <div className=' relative flex flex-col lg:flex-row lg:gap-x-5 '>
              <div className='mb-5 flex justify-around items-center rounded-lg flex-row bg-gray-100 py-2 gap-x-20 lg:max-w-[300px]'>

                <button onClick={Decrement} className='text-orange-500 text-4xl lg:text-1xl lg:ml-2'>-</button>

                <span className='text-black text-2xl lg:text-lg'>{cartCount}</span>
                <button onClick={Increment} className='text-orange-500 text-4xl lg:text-1xl lg:mr-2'>+</button></div>

              <button onClick={handleAddToCart} className='  mb-5 rounded-lg gap-x-3 bg-orange-500 p-4 text-white flex flex-row justify-center items-center lg:flex-1 lg:max-w-[400px] '>
                <IoCartOutline />
                <span>Add to cart</span></button>
              <span className={` absolute h-2 w-5 bottom-[820px] right-[75px] lg:bottom-[590px] lg:right-16 flex justify-center items-center text-[10px] bg-orange-500 rounded-full p-2 lg:w-5 lg:h-3`}>{cartItems}</span>

            </div>
          </div>
        </div>

        {/*slider arrow for mobile*/}
        <div className='lg:hidden flex flex-row justify-between w-full'>
          {/*slider left right*/}
          <div className='shadow absolute  top-[200px] left-[400px]  bg-white flex flex-row  items-center justify-around w-12 h-12  rounded-full '>
            <IoIosArrowForward className='cursor-pointer' size={20} onClick={nextSlide} />

          </div>

          <div className=' lg:hidden shadow absolute  top-[200px] right-[400px]  bg-white flex flex-row  items-center justify-around w-12 h-12  rounded-full '>

            <IoIosArrowBack className='cursor-pointer' size={20} onClick={prevSlide} />
          </div>
        </div>




      </div>
    </>
  )
}
