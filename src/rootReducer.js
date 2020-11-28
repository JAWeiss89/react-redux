const INITIAL_STATE = { todos: [], newTodoField: '', memes: [], memeForm: {topText:'', bottomText:'', image:''}}

function rootReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADDTODO':
            return {...state, todos: [...state.todos, action.payload] };
        case 'REMOVETODO':
            const todosCopy = [...state.todos];
            todosCopy.splice(todosCopy.indexOf(action.payload),1);
            return {...state, todos: todosCopy};
        case 'SETTODOFIELD':
            return {...state, newTodoField: action.payload};
        case 'UPDATEMEMEFORM':
            const {name, value} = action.payload;
            return {...state, memeForm: {...state.memeForm, [name]: value}};
        case 'ADDMEME':
            return {...state, memes: [...state.memes, action.payload]}
        default:
            return state;
    }
}

export default rootReducer;