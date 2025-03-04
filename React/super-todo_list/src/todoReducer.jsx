import { act } from "react"

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [...state, {id : Date.now(), content : action.payloed, completed : false}]
        case 'DELETE_TODO' :
            return state.filter((todo) => todo.id !== action.payloed)
        case 'TOGGLE_TODO':
            return state.map((todo) => todo.id === action.payloed ? {...todo, completed : !todo.completed} : todo)
        default :
        return state
    }
}