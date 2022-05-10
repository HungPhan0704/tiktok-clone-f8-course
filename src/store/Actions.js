import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO } from "./Constants"

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
})
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
})

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
})
