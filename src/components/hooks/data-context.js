import { createContext, useContext } from "react";
import useToken from "./token-hook";

// create context component
const DataContext = createContext();

// create and expose context consumer
// retrieve values from context provider
// children consumers get values by calling this hook
export const useDataContext = () => useContext(DataContext);

// provider parent component need to be warpped in this exported component
// add values to provide data to childern consumers
export default function UserContextProvider({ children }) {

    const [token, setToken, rtoken, setRToken] = useToken();

    const cache = {};
    const setCache = (uri, data) => cache[uri] = data;

    return (
        <DataContext.Provider value={{ token, setToken, rtoken, setRToken, cache, setCache }}>
            {children}
        </DataContext.Provider>
    )
};