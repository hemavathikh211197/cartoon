
import { useEffect, useState } from "react";
const useFetch = (request) => {
     const[data , setData]= useState(null);
     const[pending , setPending]=useState(true);
     const[error , setError]=useState(false);
    useEffect( ()=>{
        setTimeout(()=>{
            fetch(request)
            .then((response)=>{
                 if(response.ok===false)
                   {
                      throw Error("data not found");
                   }
                 return response.json()})
            .then((recievedData)=>{setData(recievedData.data); setPending(false)})
            .catch((error)=>{setError(error.message); setPending(false)})
        }, 1000)
    }  , [])
     return {data,pending,error};
}
export default useFetch;