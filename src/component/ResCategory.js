import { useState } from "react";
import ItemList from "./ItemList"

const ResCategory=({data})=>{

    const [showItems,setShowItems]=useState(false)

    const handleClick=()=>{
    //    console.log("clicked");
       setShowItems(!showItems)
    }

    // console.log(data)
    return (
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-6 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
              <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
              <span>⬇️</span>
            </div>
              {showItems && <ItemList items={data.itemCards}/>}
            </div>
            {/* Accordion Body */}
            

        </div>
    )
}

export default ResCategory