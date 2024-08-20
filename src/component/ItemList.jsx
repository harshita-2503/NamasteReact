import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItems } from "../utils/cartSlice";

const ItemList=({items})=>{

  const dispatch=useDispatch();

  const handleAddItem=()=>{
    
    //dispatch an action

    dispatch(addItems("biryani"))

    // {                     then this object will be passed in action
    //   payload:"biryani"
    // }

  }

    // console.log(items)
  return (
  <div>
        {items.map((item)=>(
             <div key={item.card.info.id} className="p-10 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-7/12">
                <div className="py-2">
                    <span>
                        {item.card.info.name}
                    </span>
                    <span>
                         - ₹
                          {item.card.info.price/100}
                    </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-5/12 p-4">
                
                    <div className="absolute">
                      <button  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={handleAddItem}>Add +</button>
                    </div>

                    <img src={CDN_URL+item.card.info.imageId} className="w-full" />
                </div>
             </div>
            ))}
  </div>
  )
}

export default ItemList