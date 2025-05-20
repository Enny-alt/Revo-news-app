import React from 'react'

const Carousel = (props) => {
  return (
     <div className='mt-6'>
        <img
          src={props.image}
          className="w-full h-40 object-cover"
        />
         <div className="">
          <p className="italic font-roboto text-sm my-2">{props.source}</p>
          <a
            href={props.link}
            target="_blank"
            className=" font-bold text-lg"
          >
            {props.title}
          </a>
        </div>
      </div>
  )
}

export default Carousel
