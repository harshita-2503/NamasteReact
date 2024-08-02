import { useEffect, useState } from "react";

import { MENU_API } from "../utils/constants";

const useRestaurantMenu=(resId)=>{
    //fetchdata

    console.log(resId)

    const [resInfo,setResInfo]=useState(null)

    const [items,setItems]=useState([]);

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData= async()=>{
        const data=await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER")

        const json=await data.json();

        
    
        
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        setItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards);
    }

    console.log(items)


    return{ resInfo,items};
}

export default useRestaurantMenu;