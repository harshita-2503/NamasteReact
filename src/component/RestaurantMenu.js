// import {useState,useEffect } from "react";
// import Shimmer from "./Shimmer";

// import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";


// const RestaurantMenu=()=>{

//     // const params=useParams();
//     // console.log(params);

//     const {resId}=useParams();
//     console.log(resId);


    

//     const [resInfo, setResInfo]=useState(null);
//     const [items,setItems]=useState([]);

//     useEffect(()=>{
//         fetchMenu();
//         // console.log(resInfo.name)

//     },[]);

//     const fetchMenu=async ()=>{
//         const data=await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");

//         const json=await data.json();


//         console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
//         // console.log(json?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
//         setResInfo(json?.data?.cards[2]?.card?.card?.info)

//         setItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
        
//     }

       

//     console.log(items)

    

    

     

//     return (resInfo===null)?<Shimmer/>:(
//         <div className="menu">
//             <h1>{resInfo.name}</h1>
//             <p>{resInfo.cuisines.join(",")}-{resInfo.costForTwoMessage}
//             </p>
//             <h2>Menu</h2>
//             <ul>
//                 {console.log(items)}
//                 {items.map((item)=>(
//                     <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
//             </ul>
//         </div>
//     )
// };

// export default RestaurantMenu


// import {useState,useEffect } from "react";
// import Shimmer from "./Shimmer";

// import { useParams } from "react-router-dom";

// import useRestaurantMenu from "../utils/useRestaurantMenu";


// const RestaurantMenu=()=>{


//     const {resId}=useParams();
  

//     const {resInfo,items}=useRestaurantMenu(resId);


     

//     return (resInfo===null)?<Shimmer/>:(
//         <div className="menu">
//             <h1>{resInfo.name}</h1>
//             <p>{resInfo.cuisines.join(",")}-{resInfo.costForTwoMessage}
//             </p>
//             <h2>Menu</h2>
//             <ul>
//                 {items.map((item)=>(
//                     <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
//             </ul>
//         </div>
//     )
// };

// export default RestaurantMenu


import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";


const RestaurantMenu=()=>{


    const {resId}=useParams();
  

    const {resInfo,categories}=useRestaurantMenu(resId);

    // const [showIndex,setShowIndex]=useState(0);
    const [showIndex,setShowIndex]=useState(null);




     

    return (resInfo===null)?<Shimmer/>:(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo.name}</h1>
            <p className="font-bold text-lg">{resInfo.cuisines.join(",")}-{resInfo.costForTwoMessage}
            </p>

                {/* {console.log(categories)} */}
                {categories.map((category,index)=>(
                    // <ResCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={false}/>  //to not show list
                    // <ResCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===1?true:false}/>   //to show 2nd list
                    <ResCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false}
                    setShowIndex={()=>setShowIndex(index)}
                    /> 
                   ))}
        </div>
    )
};

export default RestaurantMenu