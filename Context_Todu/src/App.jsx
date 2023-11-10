import React, { useEffect } from "react"
import { useContext , useState } from "react";
import {TodoProvider} from './Context/TodoContext'
import Form from './Components/Form.jsx'
import ListTodos from './Components/ListTodos'

const App = () =>{
    const [todos,SetTodos] = useState([])
    const addtodo = (todo) =>{
        SetTodos((prev)=>[{id:Date.now(),...todo},...prev]);
    }
    const updateTodo = (id,todo)=>{
        SetTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? {id:id,todo:todo,completed:true} : prevTodo))
    }
    const deleteTodo = (id) =>{
        SetTodos((prev) => (
            prev.filter((prevTodo)=> prevTodo.id !== id)
        ))
        
    }
    const togglecompleted = () =>{

    }
    useEffect(()=>{
        const todo = JSON.parse(localStorage.getItem('todos'))

        if(todo && todo.length > 0){
            SetTodos(todo);
        }
        else{

        }
    },[])

    useEffect(()=>{
        const todo = JSON.parse(localStorage.getItem('todos'))
        
        
        
        
    },[])
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    

    return(
       <TodoProvider value={{todos,addtodo,updateTodo,togglecompleted,deleteTodo}}>
            <div className="w-full h-screen  justify-center p-10 bg-purple-900">
                <h1 className="text-yellow-500 font-semibold font-serif p-2 shadow-lg h-fit flex justify-center">Enter Your Todo Here</h1>
                <Form/>
                {
                    todos.map((todos)=>(
                        <div key={todos.id}>
                            <ListTodos Todo={todos}/>
                        </div>
                    ))
                }
            </div>

       </TodoProvider>
    )
}

export default App;