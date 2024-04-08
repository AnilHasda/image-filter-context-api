import axios from "axios";
import { useEffect, useState } from "react";
import key from "./apiKey";
const useApi=()=>{
    let [response,setResponse]=useState([]);
  useEffect(
    ()=>{
        (async ()=>{
           let resp= await axios.get(`https://api.unsplash.com/photos/?client_id=${key}`);
           setResponse(resp.data);
        })()
    }
 ,[] )
 return response;
}
export default useApi;