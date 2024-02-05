import { useState } from "react";
import React from "react";
import { fetchParticularTodo, fetchTodo } from "../store/todo-actions.ts";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks.ts";

export default function Todo() {
    const [todo_id, setTodo] = useState(1);
    const dispatch = useAppDispatch();
    const allTodo = useAppSelector( state => state.todo.all_todo);
    const particularTodo = useAppSelector (state => state.todo.particular_todo);

    const getAllTodo = () => {
        dispatch(fetchTodo());
    }
    const getParticularTodo = () => {
        dispatch(fetchParticularTodo(todo_id));
    }
    const checkToDo = (): boolean =>{
        return allTodo.length === 0;
    }

    const checkParticularTodo = (): boolean =>{
        return particularTodo.id === 0;
    }

    return(
        <>
            <div>
                <label> Enter the todo Id: </label>
                <input onChange= {(event) => {setTodo(parseInt(event.target.value))}}
                type="number"></input>
                <button onClick={getParticularTodo} > Find by Id</button>

                <div>
                    <h3> Particular To Do</h3>
                    {
                        checkParticularTodo() &&(
                            <div>
                                <p> {particularTodo.id} </p>
                                <p> {particularTodo.userId} </p>
                                <p> {particularTodo.title} </p>
                                <p> {particularTodo.isCompleted} </p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <button onClick={getAllTodo} > All ToDo</button>
                <div>
                    <h3> ToDo List:</h3>
                    <div className='todo-container'>
                        <p> ID </p>
                        <p> USER ID</p>
                        <p> TITLE </p>
                    </div>
                    {
                        checkToDo() && 
                        allTodo.map((todo) => (
                            <div key={todo.id}>
                                <p> {todo.id}</p>
                                <p> {todo.userId}</p>
                                <p> {todo.title}</p>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}