import { useEffect } from "react";
import { useState } from "react";
export const TodoDateTime =()=>{
    const [dateTime, setDateTime]= useState("");

    useEffect(()=>{
        const interval = setInterval( ()=>{
            const date= new Date();
            const currDate = date.toLocaleDateString();
            const currTime = date.toLocaleTimeString();
            setDateTime(`${currDate}-${currTime}`)
        },1000)
        return ()=> clearInterval(interval);
    },[])

    return(
        <h2 className="date-time">
            {dateTime}
        </h2>
    )
}