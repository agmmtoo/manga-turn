import { useState } from "react";

export default function useToken() {
    const putToken = token => {
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
    };
    const pullToken = key => JSON.parse(localStorage.getItem(key));

    const [token, setToken] = useState(pullToken("token"));

    return [token, putToken];
};