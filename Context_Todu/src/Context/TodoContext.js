import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos:[
        {
            id:1,
            todo:"Message",
            completed:false,
        },

    ],
    addtodo:(todo)=>{},
    updateTodo:(id,todo) =>{},
    deleteTodo:(id) => {},
    togglecompleted:(id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider

