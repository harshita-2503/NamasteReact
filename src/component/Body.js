import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";

import { useState } from "react"

const Body=()=>{

    //Local State variable-super powerful variable
     
    const [listOfRestaurants,setListOfRestaurants]=useState(reslist);

    // const arr=useState(reslist);
    // const [listOfRestaurants,setListOfRestaurants]=arr;

    // const listOfRestaurants=arr[0];
    // const setListOfRestaurants=arr[1];


    //Normal Js variable
    let listOfRestaurantsJS=[ 
        {
        data: {
            type: "F",
            name: "KFC",
            costForTwo: 40000,
            cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
            avgRating: 3.8,
            deliveryTime: 36,
            id: 89,
        }
        },
        {

    
    data: {
        type: "F",
        name: "Dominos",
        costForTwo: 40000,
        cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
        avgRating: 4.5,
        deliveryTime: 36,
        id: 90,
    }
        },
        {
            data: {
                type: "F",
                name: "MCD",
                costForTwo: 40000,
                cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
                avgRating: 4.1,
                deliveryTime: 36,
                id: 54,
            }
            },

];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    //Filter logic here
                    // listOfRestaurants=listOfRestaurants.filter(
                    //     (res)=>res.data.avgRating > 4
                    // );
                    // console.log(listOfRestaurants)

                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.data.avgRating > 4
                    );

                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {/* {
              reslist.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
              } */}
                {
                    listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }
    
            </div>

        </div>
    )
}

export default Body;