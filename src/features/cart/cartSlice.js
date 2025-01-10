import { createSlice } from "@reduxjs/toolkit";

if(localStorage.getItem("cartItems") === null){
    localStorage.setItem("cartItems", JSON.stringify([]))
}
const initialState = {    
    cartItems: JSON.parse(localStorage.getItem("cartItems")),
    cartNumbers: {subTotal: 0, shipping: 0, tax: 0, total: 0 }
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       addToCart: (state, action) => {
         const {payload: item} = action
            state.cartItems.push({...item, quantity: 1})
            console.log(item)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
       },
       removeFromCart: (state,action) => {
        const {payload: item} = action
        //    console.log("Remove from cart called")
        let index = state.cartItems.findIndex(
            (cartItem) => cartItem.id === item.id
        );
         state.cartItems.splice(index, 1)
         localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

       },
       setQuantity: (state, action) => {
       console.log("setquantity called")
        let {item, qty} = action.payload
        console.log(item.name, qty)
        state.cartItems = state.cartItems.map((cartItem) => {
            return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + qty} 
            : cartItem
        })
        state.cartItems = state.cartItems.filter((cartItem)=> {
           return cartItem.quantity >= 1
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

       },
       setCartNumbers: (state) => {
        let subTotal=0, shipping=0, tax = 0, total=0;
        for(let item of state.cartItems){
         console.log(item)
          subTotal += item.quantity * item.price;
          shipping += item.quantity + 40;
        }
         tax += subTotal * 18/100 
         total = subTotal + shipping + tax;
        state.cartNumbers = {subTotal, shipping, tax, total}
        console.log(state.cartNumbers)
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
     },
     clearCartItems: (state) => {
        state.cartItems = []
     }
    }
})
export const {addToCart, removeFromCart, setQuantity, setCartNumbers, clearCartItems} = cartSlice.actions
export default cartSlice.reducer