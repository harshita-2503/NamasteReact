import { LOGO_URL } from "../utils/constants"
import { useState,useEffect } from "react"

export const Header=()=>{

    // let btnName="Login";

    const [btnNameReact,setBtnNameReact]=useState("Login")
    console.log("Header render");

    //if no dependency array thrn useEffect is called on every render
    // useEffect(()=>{
    //     console.log("Header useEffect called");

    // });


    //if dependency array is empty=[]=> useEffect is called on initial render(just once)
    // useEffect(()=>{
    //     console.log("Header useEffect called");

    // },[]);

    //if dependency array is empty=[btnNameReact]=> called everytime btnNameReact is updated
    useEffect(()=>{
        console.log("Header useEffect called");

    },[btnNameReact]);

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* <button className="login" onClick={()=>{
                        btnName="Logout";
                        console.log(btnName)
                    }}>{btnName}</button> */}
                     <button className="login" onClick={()=>{
                       btnNameReact === "Login"?setBtnNameReact("Logout") : setBtnNameReact("Login");
                        console.log(btnNameReact)
                    }}>{btnNameReact}</button>

                </ul>

            </div>
        </div>
    )
}
