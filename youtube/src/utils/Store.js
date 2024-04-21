import {configureStore} from '@reduxjs/toolkit';
import Appslice from './Appslice';
import Searchslice from './Searchslice';
const Store=configureStore({
    reducer:{
    app:Appslice,
search:Searchslice,

}
});
export default Store;