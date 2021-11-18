import { useState } from "react";

const useLocalStorage = () => {
    const pullItem = key => JSON.parse(localStorage.getItem(key));

    const [token, setToken] = useState(pullItem("token"));
    const user = pullItem("user");

    const putToken = token => {
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
    };
    const putUser = user => {
        localStorage.setItem("user", JSON.stringify(user));
    };
    const logout = () => {
        setToken(null);
        localStorage.clear();
        console.log("logged out");
    }

    return [token, putToken, user, putUser, logout];
};

export default useLocalStorage;