import { useState } from "react";
import LoginFetch from "./hooks/LoginFetch";

export default function LoginForm({ setToken }) {
    const [mode, setMode] = useState('login');
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('test');
    const [error, setError] = useState();

    const handleSubmit = async e => {
        setUsername("");
        setPassword("");
        e.preventDefault();

        // see @https://axios-http.com/docs/handling_errors

        const res = await LoginFetch({ mode, username, password });
        console.log(res);
        if (res) switch (res.status) {
            case 200: setToken(res.data.accessToken);
                break;
            case 400: setError(res.data.message);
                break;
            default: setError("Unknown error")
        }
    };
    const switchMode = e => {
        e.preventDefault();
        setUsername("");
        setPassword("");
        setError();
        setMode(mode === "login" ? "signup" : "login");
    }
    return (
        <>
            {error ? <p>{error}</p> : <p>Use this form to {mode}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button>{mode}</button>
            </form>
            <p>Or, you can <button onClick={switchMode}>{mode === "login" ? "signup" : "login"}</button></p>
        </>
    );
}