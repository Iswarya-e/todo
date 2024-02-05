import { TodoModel } from "../models/redux-models";
import Api from "./Api.ts"

export default {
    async getAllTodos() {
        var response = await Api().get('todos');
        return response.data;
    },
    async getParticularTodo(todo_id: number) {
        var response =  await Api().get('todos');
        return response.data.filter((data: TodoModel) => data.id === todo_id)[0];
    }
}