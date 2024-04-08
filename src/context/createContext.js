import { createContext,useContext } from "react";
const ContextData=createContext({
    items:"",
    input:""
})
const useContextData=()=>{
return useContext(ContextData);
}
export default ContextData;
export {useContextData};