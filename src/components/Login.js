import { useState } from 'react';
import LoginFetch from "./hooks/LoginFetch";

const Login = ({ setLogin, setToken, setRToken }) => {
    const [state, setState] = useState({ username: '', password: '' });
    const [error, setError] = useState();
    const inputOnChangeHandler = ({ target: { name, value } }) => setState({ ...state, [name]: value });

    const onSubmitHandler = async event => {
        event.preventDefault();
        // see @https://axios-http.com/docs/handling_errors
        const { username, password } = state;

        // only keep refreshToken

        const res = await LoginFetch({ mode: "login", username, password });
        if (res) switch (res.status) {
            case 200:
                // order matters,
                // otherwise, no refresh token
                // since only token's prence is checked
                setRToken(res.data.refreshToken);
                setToken(res.data.accessToken);
                break;
            case 400: setError(res.data.message);
                break;
            default: setError("Unknown error")
        }
    };

    return (
        <div className="mt-10 w-full mx-auto max-w-md text-center">
            {error ? <p className="text-red-600 font-medium uppercase">{error}</p> : <p className="font-medium uppercase">Login</p>}
            <form onSubmit={onSubmitHandler} className="m-10 p-5 shadow-lg rounded flex flex-col justify-center gap-5">
                <input
                    name="username"
                    placeholder="username"
                    value={state.username}
                    onChange={inputOnChangeHandler}
                    className="appearance-none bg-transparent py-2 px-2"
                    required />

                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={state.password}
                    onChange={inputOnChangeHandler}
                    className="appearance-none bg-transparent py-2 px-2"
                    required />

                <button className="px-4 py-2 capitalize font-semibold border rounded border-black dark:border-white">
                    Login
                </button>
            </form>

            Don't have an account? <button onClick={() => setLogin(false)} className="underline">create one</button>.
        </div>
    );
}

export default Login;