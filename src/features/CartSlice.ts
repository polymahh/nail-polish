import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type cartProp = {
    image:string,
    name:string,
    company:string,
    price:number,
    id:number,
    index?:number,
  }
interface cartState {
    value : cartProp[],
    cartTotal:number,
}

const initialState : cartState = {
    value:[],
    cartTotal:0
}


export const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers:{
        getTotal:(state)=>{
            state.cartTotal = state.value.length > 0 ? state.value.map(item => item.price).reduce((total,price) => total+price) : 0;
        },
        addProduct: (state, action: PayloadAction<cartProp>)=>{
            console.log('fff')
            state.value.push(action.payload)
        },
        removeProduct:(state,action:PayloadAction<number>) =>{
            state.value.splice(action.payload,1)
        }
        
    }
})

export const { addProduct, removeProduct, getTotal } = cartSlice.actions

export default cartSlice.reducer