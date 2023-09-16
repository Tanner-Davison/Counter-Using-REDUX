import { configureStore} from "@reduxjs/toolkit";
import counterReducer  from './counter';
import authenticationSlice from './auth'


const store = configureStore({
    reducer: {
        auth: authenticationSlice,
        counter: counterReducer
    }
	
});


export default store;
