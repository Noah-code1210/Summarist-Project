import React from 'react'
import PricingImage from "../../../assets/pricing-top.webp"
import Image from 'next/image'

function choosePlan() {
  return (
    <>
    <div className='w-full'>
        <div className='relative text-center w-full pt-12 mb-6 before:content-[""] before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full before:bg-[#032b41] before:rounded-b-[16rem]'>
          <div className='max-w-[1000px] mx-auto text-white px-6'>
            <div className='text-5xl font-bold mb-10'>
              Get unlimited access to many amazing books to read
            </div>
            <div className='text-xl mb-8'>
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className='flex justify-center max-w-[340px] mx-auto rounded-t-[180px] overflow-hidden'>
              <Image 
              src={PricingImage}
              width={340}
              height={285}
              alt='Pricing Image'/>
            </figure>
          </div>
        </div>
    </div>
    </>
  )
}

export default choosePlan