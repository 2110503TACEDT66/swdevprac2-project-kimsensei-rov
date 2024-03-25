import { useEffect,useState } from "react";

export default function useWindowListener(eventType:string,listener:EventListener){
    const[winwidth,setWinwidth] = useState(0)
    useEffect(()=>{
        

        window.addEventListener(eventType,listener)

        return()=>{
            window.removeEventListener(eventType, listener)
        }
    },[eventType,listener])
}