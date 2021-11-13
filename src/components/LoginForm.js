import { useState } from "react";
import LoginFetch from "./hooks/LoginFetch";
import "../index.css";

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
        <div className="mt-10 w-full mx-auto max-w-md text-center ">
            {error ? <p className="text-red-600 font-medium uppercase">{error}</p> : <p className="font-medium uppercase">Use this form to {mode}</p>}
            <form onSubmit={handleSubmit} className="m-10 p-5 shadow-lg rounded flex flex-col justify-center gap-5">
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required className="appearance-none bg-transparent shadow-inner py-2 px-2" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="appearance-none bg-transparent py-2 px-2" />
                <button className="px-4 py-2 capitalize font-semibold border rounded border-black dark:border-white ">{mode}</button>
            </form>
            <button onClick={switchMode} className="uppercase">{mode === "login" ? "signup" : "login"}</button>
        </div>
    );
}