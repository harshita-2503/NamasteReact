import RestaurantCard from "./RestaurantCard";
// import reslist from "../utils/mockData";

import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Body=()=>{

    //Local State variable-super powerful variable
     
    // const [listOfRestaurants,setListOfRestaurants]=useState(reslist);
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])

    const [searchText,setSearchText]=useState("");


    useEffect(()=>{
        fetchData();
        console.log("useEffect called")
    },[])


    const fetchData=async()=>{
        // const  data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const  data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2101232&lng=77.97280889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN");

        const json=await data.json();
        console.log(json);
        
        //optional chaining
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants)

        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };



    // //Conditional rendering
    // if(listOfRestaurants.length === 0){
    //     // return <h1>Loading...</h1>

    //     return <Shimmer/>
    // }

    

    console.log("body rendered")

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


    
    //Conditional rendering
//     if(listOfRestaurants.length === 0){
//         // return <h1>Loading...</h1>

//         return <Shimmer/>
//     }

   
//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn" onClick={()=>{
//                     //Filter logic here
//                     // listOfRestaurants=listOfRestaurants.filter(
//                     //     (res)=>res.data.avgRating > 4
//                     // );
//                     // console.log(listOfRestaurants)

//                     const filteredList=listOfRestaurants.filter(
//                         (res)=>res.info.avgRating > 4.5
//                     );

//                     setListOfRestaurants(filteredList);

//                 }}>Top Rated Restaurants</button>
//             </div>
//             <div className="res-container">
//               {/* {
//               reslist.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
//               } */}
//                 {
//                     listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
//                 }
    
//             </div>

//         </div>
//     )
// }

 

return  listOfRestaurants.length === 0? (<Shimmer/> ) : (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={()=>{
                    //Filter the restaurant card and update the UI
                    //search text
                    console.log(searchText)
                    const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);
                }}> Search</button>

            </div>
            <button className="filter-btn" onClick={()=>{
                //Filter logic here
                // listOfRestaurants=listOfRestaurants.filter(
                //     (res)=>res.data.avgRating > 4
                // );
                // console.log(listOfRestaurants)

                const filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4.5
                );

                setListOfRestaurants(filteredList);

            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {/* {
          reslist.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
          } */}
            {
                filteredRestaurant.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }

        </div>

    </div>
)
}

export default Body;