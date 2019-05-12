
export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'
export const BACK = 'BACK'
export const EDIT = 'EDIT'

export const addfoo = (bar) => ({
    type: ADD,
    data: bar
})

export const deletefoo = (bar) => ({
    type: DELETE,
    id: bar
})

export const updatefoo = (bar) => ({
    type: UPDATE,
    data: bar
})

export const backfoo = (bar) => ({
    type: BACK,
    id: bar
})

export const editfoo = (bar) => ({
    type: EDIT,
    id: bar
})