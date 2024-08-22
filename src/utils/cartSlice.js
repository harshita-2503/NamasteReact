import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name: 'cart',
    initialState: {
        // items: ["burger","pizza"],
        items: [],

    },
    reducers :{
        addItems: (state,action)=>{

            //Vanilla(older version)Reduc =>don't mutate state

            //const newState=[...state];
            // newState.items.push(action.payload);
            // return newState

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