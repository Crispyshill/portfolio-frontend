import { createContext, useContext, useState } from 'react';

const NewAppContext = createContext();

export function AppContext({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    return (
        <NewAppContext.Provider value={{ token, setToken }}>
            {children}
        </NewAppContext.Provider>
    );
}

export function useToken() {
    return useContext(NewAppContext);
}

