import {configureStore} from '@reduxjs/toolkit';
import Appslice from './Appslice';
import Searchslice from './Searchslice';
import Chatslice from './Chatslice';
const Store=configureStore({
    reducer:{
    app:Appslice,
search:Searchslice,
chat:Chatslice

}
});
export default Store;