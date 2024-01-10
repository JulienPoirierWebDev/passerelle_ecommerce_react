import React from 'react'
import Typography from '../common/Typography'

const FeatureBlock = ({feature}) => {
  

  return(
  <div key={feature.title} className='w-72 mb-12'>
    <img className='mb-4' src={feature.icon}/>
    <Typography customClasses="mb-2" tag="h4">{feature.title}</Typography>
    <Typography tag="p">{feature.content}</Typography>
  </div>
  )
}

function Features() {

  const features = [{
    icon:"/icons/Checkmark.svg",
    title:"Next day as standard",
    content:"Order before 3pm and get your order the next day as standard"
  },
  {
    icon:"/icons/Delivery.svg",
    title:"Made by true artisans",
    content:"Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon:"/icons/Purchase.svg",
    title:"Unbeatable prices",
    content:"For our materials and quality you won’t find better prices anywhere"
  },
  {
    icon:"/icons/Sprout.svg",
    title:"Recycled packaging",
    content:"We use 100% recycled packaging to ensure our footprint is manageable"
  }
]

  
  return (
    <div className='mt-12 mb-20'>

    <Typography customClasses="md:text-center md:m-16 mb-16" tag="h3">What makes our brand different</Typography>

    <div className='md:grid xl:grid-cols-4 md:grid-cols-2 gap-12 grid-cols-1 justify-items-center'>

      {features.map((feature) =>  <FeatureBlock feature={feature} key={feature.title}/>)}

    </div>

    </div>
  )
}

export default Features