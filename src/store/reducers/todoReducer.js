const initialState = {
    todos:['exercise', 'breakfast']
}

function TodoReducer (state=initialState, action) {
    if(action.type === 'ADDTODO'){
        return({...state, todos:[...state.todos, action.payload]})
    }
    if(action.type === 'DELTODO'){
        const temp = state.todos.splice(action.payload, 1);
        return({...state, todos:[...temp]})
    }
return {...state}
};

export default TodoReducer;