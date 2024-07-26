import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

export const Header=()=>{

    // let btnName="Login";

    const [btnNameReact,setBtnNameReact]=useState("Login")
    console.log("Header render")

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
