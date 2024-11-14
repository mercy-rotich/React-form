import { configureStore } from "@reduxjs/toolkit";
import PreloaderSlice from "./Features/PreloaderSlice";
import { useDispatch,useSelector } from "react-redux";
const Store = configureStore({
 
    reducer:{
        preloader:PreloaderSlice.reducer,
    }
})


export default Store;