import { configureStore } from "@reduxjs/toolkit";
import  ProductSlice  from "./reducers/productSlice";
import  BasketSlice  from "./reducers/basketSlice";

export const store = configureStore({
    reducer: {
        add: ProductSlice,
        bas: BasketSlice,
       
    }
})