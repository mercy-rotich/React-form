import { configureStore } from "@reduxjs/toolkit";
import PreloaderSlice from "./Features/PreloaderSlice";
import { useDispatch,useSelector } from "react-redux";
import cartSlice from "./Features/cartSlice";
const Store = configureStore({
 
    reducer:{
        preloader:PreloaderSlice.reducer,

        cart:cartSlice.reducer
    }
})


export default Store;