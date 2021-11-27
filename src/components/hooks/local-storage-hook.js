import { useState } from "react";

const useLocalStorage = () => {
    const pullItem = key => JSON.parse(localStorage.getItem(key));

    const [token, setToken] = useState(pullItem("token"));

    const putToken = token => {
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
    };

    return [token, putToken];
};

export default useLocalStorage;