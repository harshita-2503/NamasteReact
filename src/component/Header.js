import { LOGO_URL } from "../utils/constants"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

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
                    <li><Link to="/">Home    </Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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
