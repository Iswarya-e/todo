import todoSlice from "./todo-slice.ts";
import { TodoModel } from "../models/redux-models";
import todoService from "../service/todoService.ts";
export const todoActions = todoSlice.actions;

export const fetchTodo = () => {
    return async(dispatch, getState)=>{
        if(getState().todo.all_todo.length === 0) {
            const response : TodoModel[] = await todoService.getAllTodos();
            dispatch(todoActions.setTodo(response));
        }
    }
}

export const fetchParticularTodo = (todo_id: number) => {
    return async(dispatch, getState) => {
        const response: TodoModel = await todoService.getParticularTodo(todo_id);
        dispatch(todoActions.setParticulatTodo(response));
    }
}

// Here the actions are automatically created by redux based on the type and payload based on the reducers
// that are created by us in the slice
//const todoActions= todoSlice.actions
//dispatch(todoActions.setTodos())
