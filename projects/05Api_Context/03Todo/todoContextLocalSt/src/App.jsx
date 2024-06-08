import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import {TodoForm,TodoItem} from './components/index'

function App() {
  const [todos, setTodos] = useState([]);

  // state contain all todo

  // functionalties
  const addTodo = (todo) => {
    // this todo is only individual todo
    // this todo comes from form it is string
    // from provider we are geeting all todos
    // this todo should goes to todos array

    // setTodos(todo)// then all old values will be deleted

    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
    // we are taking prev array and adding our todos
  };
  const updateTodo = (id,todo)=>{
    // as todo is an array and we need to find our id and then upodate that todo
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo:prevTodo)))
       // here we are searching our id if found then replace with new todo else keep existing one 
  }

  const deleteTodo = (id)=>{
    // as from exsisting array we are deleting id which is giveng and return new array 
    // new array contain all except id 
    // so here map is not good
    // here we use filter 
     
    setTodos((prev)=>prev.filter((todo)=>(todo.id!==id)))
    // we are allowing all values which is not matching with our id 

    
  }
  const toggleCompelete = (id)=>{
    
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, 
          completed: !prevTodo.completed } : prevTodo))
  }

  // loacal storage :
  // as application loaded may there are some todos will be there so need here useEffect

  useEffect(()=>{
   // this will return value in string and we wanted in json localStorage.getItem("todos")
   const todos=  JSON.parse(localStorage.getItem('todos'))
   // it not neccessary json will always object it can be array 
   if(todos && todos.length>0){
      setTodos(todos)
   }

  },[])

  useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
   
      <TodoContextProvider
        value={{todos, addTodo, updateTodo, deleteTodo, toggleCompelete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {/* Todo form goes here */}
                <TodoForm/>
              </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}

              {todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/>
      
                  </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
   
  );
}

export default App;
