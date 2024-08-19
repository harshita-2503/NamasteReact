import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        // items: ["burger","pizza"],
        items: [],

    },
    reducers :{
        addItems: (state,action)=>{

            //mutating the state here
            state.items.push(action.payload);

        },

        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart: (state)=>{

            //why not state=0 used
            state.items.length=0;
        },

    },

});


export const{addItems, removeItem, clearCart}=cartSlice.actions
export default cartSlice.reducer;