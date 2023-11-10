import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

function Form(){
    const {addtodo} = useContext(TodoContext)
    const [todo,Settodo] = useState("")
    function SendTodo(e){
        e.preventDefault()
        if(!todo){
            return
        }
        else{
            addtodo({todo,completed:false})
            Settodo("")
        }

    }
    return(
        <> 
        <form onSubmit={SendTodo}>
            <input
                className="bg-slate-800 p-4 my-6 w-full text-orange-500"
                placeholder="Write Todo Here ....."
                value={todo}
                onChange={(e) => Settodo(e.target.value)}
            />
        </form>
        </>
    )
}

export default Form;