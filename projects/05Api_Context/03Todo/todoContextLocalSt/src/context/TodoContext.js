import { createContext,useContext } from "react";

// 1: create context
export const TodoContext = createContext({
    // values
    todos:[
        {
            id:1,
            todo:"to do message",  // title
            completed:false
        }
    ],
    // functionalties(methods)
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompelete:(id)=>{}
})

// 2: hooks to give context 
export const useTodo =()=>{
      return useContext(TodoContext)
}

// 3: a provider  to doNot wirite 
       //  TodoContext.Provider


export const TodoContextProvider = TodoContext.Provider
