import React from 'react';
import avatar from '../../assets/avtar.jpg';
import AccordionCard from './AccordionCard';

const SideCard = () => {
  return (
    <>
      <div className="flex items-center">
    <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
    <div>
      <strong>Prashant dubey</strong>
      <span className="block text-sm text-gray-500">Technical advisor</span>
    </div>

   
  </div>
  <div className='mt-5'>
  <AccordionCard />
  </div>
  
    </>
  
  )
}

export default SideCard
