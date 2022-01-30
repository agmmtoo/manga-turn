import { useState } from "react";

export default function useToken() {
    const putToken = token => {
        localStorage.removeItem("token");
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
    };
    const putRToken = rtoken => {
        localStorage.setItem("rtoken", JSON.stringify(rtoken));
        setRToken(rtoken);
    };

    const pullToken = key => JSON.parse(localStorage.getItem(key));

    const [token, setToken] = useState(pullToken("token"));
    const [rtoken, setRToken] = useState(pullToken("rtoken"));

    return [token, putToken, rtoken, putRToken];
};