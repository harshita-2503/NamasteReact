<<<<<<< HEAD
import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{

    // const params=useParams();
    // console.log(params);

    const {resId}=useParams();
    console.log(resId);


    

    const [resInfo, setResInfo]=useState(null);
    const [items,setItems]=useState([]);

    useEffect(()=>{
        fetchMenu();
        // console.log(resInfo.name)

    },[]);

    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.2101232&lng=77.97280889999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        const json=await data.json();


        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
        // console.log(json?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);
        setResInfo(json?.data?.cards[2]?.card?.card?.info)

        setItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
        
    }

       

    console.log(items)

    

    

     

    return (resInfo===null)?<Shimmer/>:(
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <p>{resInfo.cuisines.join(",")}-{resInfo.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {items.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
            </ul>
        </div>
    )
};

export default RestaurantMenu






=======
const RestaurantMenu=()=>{
    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu
>>>>>>> 3ad1d0b4a8b7e3aa0094454340f2aaaccf3e7153
