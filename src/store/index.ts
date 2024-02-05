import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice.ts";

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})
// Here just the typeof store.getState returns a function
// Return Type of that function is required that is the State Type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch;
export default store;