
interface Action {
    type: string
}

const reducer = (state: Object, action: Action): any => {
    switch (action.type) {
        case 'INCREMENT':
            return {notify: 'INCREMENT'}
        case 'DECREMENT':
            return {notify: 'DECREMENT'}
        default:
            return state
    }
}

export default reducer