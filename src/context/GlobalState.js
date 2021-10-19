import React, { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
    users: [
        { id: 1, name: 'User One' },
        { id: 2, name: 'User Two' },
        { id: 3, name: 'User Three' }
    ]
}

// create global context
export const GlobalContext = createContext(initialState)

// 
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( AppReducer , initialState )

    return (
        <GlobalContext.Provider value={{ users: state.users}}>
            { children }
        </GlobalContext.Provider>
    )
}
