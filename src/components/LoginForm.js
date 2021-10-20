import { useState } from "react";
import LoginFetch from "./hooks/LoginFetch";

export default function LoginForm({ setToken }) {
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('test');

    const handleSubmit = async e => {
        e.preventDefault();
        const { data } = await LoginFetch({ username, password });
        setToken(data.accessToken);
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    );
}