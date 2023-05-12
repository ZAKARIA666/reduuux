import { ADD, UPDATE, COMPLETE, DELETE } from './types'

export const addTodo = (input) => ({
    type: ADD,
    payload: input
});


export const deleteTodo = (id) => {
    return {
        type: DELETE,
        payload: id

    };

};