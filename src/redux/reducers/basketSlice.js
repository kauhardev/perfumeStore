import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) || [],
};

export const BasketSlice = createSlice({
  name: "BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
        let findBasket = state.basket.find((el) => el._id === action.payload._id);
        if (findBasket) {
          alert("Такой продукт уже есть!");
        } else {
            state.basket = [...state.basket,action.payload]
            localStorage.setItem('basket', JSON.stringify(state.basket))
        }
    },   deleteBasket(state,action) {
        let filterBasket = state.basket.filter((el) => el._id !== action.payload._id)
        localStorage.setItem('basket',JSON.stringify(filterBasket))
        state.basket = filterBasket
                },
                plusBasket(state,action){
                  let plus = state.basket.map((el) =>
                      el._id === action.payload._id ? { ...el, quantity: el.quantity + 1 } : el
                    );
                    localStorage.setItem("basket", JSON.stringify(plus));
                    state.basket = plus
                } ,
                minusBasket(state,action){
                  let minus = state.basket.map((el) =>
                    el._id === action.payload._id
                        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
                        : el
                    );
                    localStorage.setItem("basket", JSON.stringify(minus));
                    state.basket = minus
                },
                
  },
});

export const { addToBasket, deleteBasket, plusBasket, minusBasket} = BasketSlice.actions;
export default BasketSlice.reducer;
