const initialState = {
    todos: [
        {
            id: 1,
            title: 'Todo 1',
            complete: false
        },
        {
            id: 2,
            title: 'Todo 2',
            complete: false
        },
    ],
}

export const todoReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        default:
            return state
    }
}