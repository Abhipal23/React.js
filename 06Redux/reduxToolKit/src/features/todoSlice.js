import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid : provide unique id's
const initialState = {
  todos: [{ id: 1,text: "hallo",}]
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // we can write intial state here also but define above
  reducers: {
    // properties : function
    // here it diff from context api in context api we write function declarartion
    // only but here we write its declaration and defination

    // here in reduces properties we get two things always
    // state and action
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
        // here payload is an object where we passing text 
      };
      state.todos.push(todo);
      // here we are pushing our todo into state

    },
    removeTodo: (state, action) => {
      // state : current state's values  here differents todos
      // action : variable we pass
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
                                                           // action.payload.id is same as above as here our payload is id only 
    },

  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
