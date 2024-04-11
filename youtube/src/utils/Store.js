import {configureStore} from '@reduxjs/toolkit';
import Appslice from './Appslice';
const Store=configureStore({
    reducer:{
    app:Appslice}
});
export default Store;