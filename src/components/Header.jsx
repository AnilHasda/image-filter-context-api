import React from 'react'
import { useContextData } from '../context/createContext';
const Header = () => {
    let {setInput}=useContextData();
  return (
    <div className='h-24 w-full bg-slate-900 flex text-white relative'>
        <h1 className='text-center absolute left-[40%] top-[45%] text-xl'>Image Filter Web App</h1>
        <input type="text"placeholder="search items..."className="relative left-[90%] translate-x-[-100%] h-[40px] w-[300px] self-end mb-4 outline-none rounded-sm pl-5"onChange={e=>setInput(e.target.value)}/>
    </div>
  )
}

export default Header;