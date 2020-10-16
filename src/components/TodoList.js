import React, {useState} from "react";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTask = todo => {
        if (!todo.text || /^\s*/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    return(
        <div>
            <h1>Чем займешься сегодня?</h1>
            <TodoForm/>
        </div>
    )
}

export default TodoList;
