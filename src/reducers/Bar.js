import { ADD, DELETE, UPDATE, BACK, EDIT } from '../actions/Bar';

const foobar = (state = [], actions) => {
    switch (actions.type) {
        case ADD:
            return [...state, actions.data]
        case DELETE:
            return state.filter(state => state.id !== actions.id)
        case UPDATE:
            return state.map(state => (state.id === actions.id ? { ...state, foo: actions.data.foo, bar: actions.data.bar, status: !actions.data.status } : state))
        case BACK:
            return state.map(state => (state.id === actions.id ? { ...state, status: !state.status } : state))
        case EDIT:
            return state.map(state => (state.id === actions.id ? { ...state, status: !state.status } : state))
        default:
            return state
    }
}

export default foobar