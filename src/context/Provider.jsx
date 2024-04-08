import React,{useState} from 'react'
import ContextData from './createContext'
import useApi from '../assets/axios'
const Provider = ({children}) => {
    let [input,setInput]=useState("");
    let response=useApi();
  return (
<ContextData.Provider value={{response,input,setInput}}>
    {children}
</ContextData.Provider>
  )
}

export default Provider;