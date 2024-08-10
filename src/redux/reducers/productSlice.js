import { createSlice } from "@reduxjs/toolkit"

const  initialState = {
    product : [],
    deteils: JSON.parse(localStorage.getItem("deteils")) || {},
    search: []
}

export const ProductSlice = createSlice({
    name : 'PRODUCT',
    initialState,
    reducers:{
        createProduct(state, action) {
            state.product = action.payload;
          },
          deleteProduct(state, action) {
            // let fillterProd = state.product.filter((el) => el._id !== action.payload);
            state.product = action.payload;
          },
          sortProduct(state, action) {
            if (action.payload === "cheap") {
              let changeP = state.product.sort((a, b) => a.price - b.price);
              state.product = changeP;
            } else if (action.payload === "expensive") {
              let changePr = state.product.sort((a, b) => b.price - a.price);
              state.product = changePr;
            } else if (action.payload === "A-Z") {
              let changePro = state.product.sort((a, b) =>
                a.title.localeCompare(b.title)
              );
              state.product = changePro;
            } else if (action.payload === "Z-A") {
              let changeProd = state.product.sort((a, b) =>
                b.title.localeCompare(a.title)
              );
              state.product = changeProd;
            } 
          },
          deteilsProd(state, action) {
            state.deteils = action.payload;
            localStorage.setItem("deteils", JSON.stringify(state.deteils));
          },
          searchProduct(state, action) {
            let searchProd = state.product.filter((el) =>
              el.title.toUpperCase().includes(action.payload.toUpperCase())
            );
            state.search = searchProd;
          },
    }
})

export const {createProduct,deleteProduct,sortProduct,deteilsProd,searchProduct} = ProductSlice.actions
export default ProductSlice.reducer