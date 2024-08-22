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

            //Redux Toolkit uses immer bts
            state.items.push(action.payload);


        },

        removeItem:(state,action)=>{
            state.items.pop();
        },

        // originalState ={ items : ["pizza"]}
        clearCart: (state,action)=>{

            //why not state=0 used
            // state.items.length=0;

            // RTK -either mutate the original state or return a new state

            return { items:[] }; //this new object will be replaced inside originalState ={ items :[] }

        },

    },

});


export const{addItems, removeItem, clearCart}=cartSlice.actions
export default cartSlice.reducer;