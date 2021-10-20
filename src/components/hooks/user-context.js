import { createContext, useContext } from "react";

// create context component
const UserContext = createContext();

// create and expose context consumer
// retrieve values from context provider
// children consumers get values by calling this hook
export const useUserContext = () => useContext(UserContext);

// provider parent component need to be warpped in this exported component
// add values to provide data to childern consumers
export default function UserContextProvider({ children }) {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
};