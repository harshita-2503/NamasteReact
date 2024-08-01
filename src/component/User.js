import { useEffect, useState } from "react";




const User=({name})=>{
    const [count,setCount] =useState(0);
    const [count2] =useState(1);

    // useEffect(()=>{
    //     //Api Call

    //     setInterval(()=>{
    //         console.log("Namaste React op")
    //     },1000);
    //   },[])


    //   useEffect(()=>{     //separate useEffect for count2 change
    //     //Api Call
    //   },[count2])



    useEffect(()=>{
        //Api Call

        const timer=setInterval(()=>{
         console.log("Namaste React op")
         },1000);
        console.log("useEffect")


        return ()=>{
            clearInterval(timer)
            console.log("useEffect return"); 
        }

      },[])


      console.log("render")




    return <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location : Dehradun</h3>
        <h4>Contact : @harshita</h4>
       
    </div>
}

export default User;