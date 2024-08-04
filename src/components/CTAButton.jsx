import React from 'react'

export default function CTAButton({text,varient}) {
  return (
    <button className={`max-md:w-full py-1 xl:py-2 px-4 xl:px-6 rounded-sm font-semibold border ${varient == "purple"?"border-primary transition duration-200  bg-primary text-white hover:text-primary hover:bg-white ":"border-primary  bg-white text-primary hover:text-white hover:bg-primary "}`}>{text}</button>
  )
}
