// import { LOGO_URL } from "../utils/constants"
// import { useState,useEffect } from "react"
// import { Link } from "react-router-dom"
// import useOnlineStatus from "../utils/useOnlineStatus"


// export const Header=()=>{

//     // let btnName="Login";

//     const [btnNameReact,setBtnNameReact]=useState("Login")
//     console.log("Header render");

//     //if no dependency array thrn useEffect is called on every render
//     // useEffect(()=>{
//     //     console.log("Header useEffect called");

//     // });


//     //if dependency array is empty=[]=> useEffect is called on initial render(just once)
//     // useEffect(()=>{
//     //     console.log("Header useEffect called");

//     // },[]);

//     //if dependency array is empty=[btnNameReact]=> called everytime btnNameReact is updated
//     useEffect(()=>{
//         console.log("Header useEffect called");

//     },[btnNameReact]);

//     const onlineStatus=useOnlineStatus();

//     return(
//         <div className="header">
//             <div className="logo-container">
//                 <img className="logo" src={LOGO_URL}/>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Online Status: {onlineStatus? "🟢" : "🔴"}</li>
//                     <li><Link to="/">Home    </Link></li>
//                     <li><Link to="/about">About Us</Link></li>
//                     <li><Link to="/contact">Contact Us</Link></li>
//                     <li><Link to="/grocery">Grocery</Link></li>

//                     <li>Cart</li>
//                     {/* <button className="login" onClick={()=>{
//                         btnName="Logout";
//                         console.log(btnName)
//                     }}>{btnName}</button> */}
//                      <button className="login" onClick={()=>{
//                        btnNameReact === "Login"?setBtnNameReact("Logout") : setBtnNameReact("Login");
//                         console.log(btnNameReact)
//                     }}>{btnNameReact}</button>

//                 </ul>

//             </div>
//         </div>
//     )
// }



//Using tailwind

import { LOGO_URL } from "../utils/constants"
import { useState,useEffect ,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"


export const Header=()=>{

    // const data=useContext(UserContext);
    // console.log(data)

    const {loggedInUser}=useContext(UserContext);
    // console.log(loggedInUser)

    //Subscribing a store using a Selector

    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)

    const [btnNameReact,setBtnNameReact]=useState("Login")
    console.log("Header render");


    
    useEffect(()=>{
        console.log("Header useEffect called");

    },[btnNameReact]);

    const onlineStatus=useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-400 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-300">
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 justify-center items-center">
                    <li className="px-4">Online Status: {onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home    </Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>

                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length})</Link></li>
                     <button className="login" onClick={()=>{
                       btnNameReact === "Login"?setBtnNameReact("Logout") : setBtnNameReact("Login");
                        console.log(btnNameReact)
                    }}>{btnNameReact}</button>

                    <li className="p-4 font-bold">{loggedInUser}</li>

                </ul>

            </div>
        </div>
    )
}

