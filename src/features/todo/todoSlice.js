import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Learn Redux Toolkit", completed: false}]
};

export const todoSlice = createSlice({
    name: 'todo', //name property is there in redux toolkit
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(), 
                text: action.payload, 
                completed: false
            }
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        //in context api, we used to write only function declaration not definition. here we write function definition
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        }//In the context of the updateTodo action, action.payload likely contains the updated todo item itself. todo item which is an object
    }

})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // ye syntax hai jo redux toolkit provide hota hai
export default todoSlice.reducer // ye bhi syntax hai