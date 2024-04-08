import React, { useState, useEffect } from 'react'
import { useContextData } from '../context/createContext';
const HeroSection = () => {
  let { response, input } = useContextData();
  let [original, setOriginal] = useState([]);
  let [copy, setCopy] = useState([]);
  useEffect(() => {
    setOriginal(response);
    setCopy(response);
  }, [response]);

  useEffect(() => {
    setCopy(original.filter(ele => ele.alt_description.includes(input)))
  }, [input])
  return (
    <div className='flex flex-wrap w-[80%] m-auto gap-5 justify-center'>
      {copy.length>0?copy.map(ele => {
        return (
          <div key={ele.id} className='h-[350px] w-[250px] overflow-hidden bg-slate-900 text-white'>
            <img src={ele.urls.regular} alt="image" className='object-fit w-[100%] h-[250px]' />
            <p className='p-3'>{ele.alt_description}</p>
          </div>
        )
      }):<h1 className='pt-20'>Image not found</h1>}
    </div>
  )
}

export default HeroSection;