import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
// when we don't export as default , during importing we have to write  with curly braces. check main.jsx
export const store = configureStore({
    reducer: todoReducer

})