import { TodoArrayModel, TodoModel } from "../models/redux-models";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialTodoState: TodoArrayModel = {
    all_todo: [],
    particular_todo: {
        userId: 0,
        id: 0,
        title: '',
        isCompleted: false
    }
}

const todoSlice =  createSlice({
    name: 'todo',
    initialState: initialTodoState,
    reducers: {
        setTodo(state, action: PayloadAction<TodoModel[]>){
            state.all_todo = action.payload;
        },
        setParticulatTodo(state, action: PayloadAction<TodoModel>){
            state.particular_todo = action.payload;
        }
    }
})

export default todoSlice;

