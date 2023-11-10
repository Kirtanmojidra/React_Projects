import React, { useState } from "react";
import { useContext , useRef } from "react";
import { TodoContext } from "../Context/TodoContext";

function ListTodos ({Todo}){
    const [isEdited,SetisEdited] = useState(true)
    const [updateText,SetupdateText] = useState(Todo.todo)
    const {deleteTodo,updateTodo} = useContext(TodoContext)
    let input = useRef()
    function del(){
        deleteTodo(Todo.id)   
        console.log(Todo.id)

    }
    function edit(){
        SetisEdited((prev)=>!prev)
        input.current.focus()
    }
    function sub(e){
        e.preventDefault()
        updateTodo(Todo.id,updateText)
        SetisEdited((prev)=>!prev)

    }
    return(
        
        <>
            <div className="p-2  text-black font-semibold flex justify-center">
                <div
                className="bg-lime-300 flex w-full p-1"
                >
    
                <form className="w-full"
                    onSubmit={sub}
                >
                <input
                    className={`w-full bg-lime-300 text-black m-1 ${isEdited ? 'bg-gray-500':''} outline-none`}
                    value={updateText}
                    readOnly={isEdited}
                    checked={true}
                    ref={input}
                    onChange={(e)=>SetupdateText(e.target.value)}
                    onSubmit={sub}
                />
                </form>
                <button 
                onClick={edit}
                className="border-[3px] border-solid border-purple-600 p-1 rounded-lg bg-black text-white mx-1"
               
                >
                    update
                </button>
                <button onClick={del}
                className="border-[3px] border-solid border-purple-600 p-1 rounded-lg bg-black text-white"
                >
                    del
                </button>

                </div>
            </div>
        </>
    )
}

export default ListTodos;