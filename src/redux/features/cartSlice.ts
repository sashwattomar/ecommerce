import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IProduct {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}
const initialState: Array<IProduct> = []

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            
            //product allready not present in cart
            if (state.findIndex((product) => product.id === action.payload.id) === -1) {
                state.push(action.payload)  

                
            }
            else {
                  //product allready  present in cart
                return state.map(item => item.id === action.payload.id ?
                    { ...item, quantity: item.quantity + 1 }
                    : item
                )
        }
        }, 
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            return state.filter((item)=>item.id!== id)
    }

    },
})

export const {addToCart,removeFromCart } = cartSlice.actions
export default cartSlice.reducer