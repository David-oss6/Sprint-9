import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

export const ContextProvider = ({ children }) => {
    const c = localStorage.getItem("data")

    const [state, setState] = useState(c ? JSON.parse(c) : {
        mainVideo: null,
        videos: [],
        favoritos: [],
        viewedHistory: [],
        signUpList: [{
            name: "asd",
            password: "asd"
        }],
        logIn: false,
    })

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(state))
    }, [state])

    return <DataContext.Provider value={{
        state, setState
    }} >
        {children}
    </DataContext.Provider>
}