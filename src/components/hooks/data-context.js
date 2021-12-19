import { createContext, useContext, useState } from "react";

// create context component
const DataContext = createContext();

// create and expose context consumer
// retrieve values from context provider
// children consumers get values by calling this hook
export const useDataContext = () => useContext(DataContext);

// provider parent component need to be warpped in this exported component
// add values to provide data to childern consumers
export default function UserContextProvider({ children }) {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
    const cache = {};
    const setCache = (uri, data) => cache[uri] = data;

    return (
        <DataContext.Provider value={{ token, setToken, cache, setCache }}>
            {children}
        </DataContext.Provider>
    )
};