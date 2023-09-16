import { configureStore,createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true};
const initialAuthState = { isAuthenticated: false}
const counterSlice = createSlice({
    name: 'counter',
    initialState:  initialCounterState,

    reducers: {
        increment(state) {
            state.counter++;
            
         },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
        reset(state) {
            state.counter = 0;
            
        },
        showCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})
const authenticationSlice = createSlice({
    name: 'authenticated',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
            
        }
    }
)

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer
    }
	
});
export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;
