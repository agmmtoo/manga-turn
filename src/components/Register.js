import { useState } from 'react';
import LoginFetch from "./hooks/LoginFetch";

const Register = ({ setLogin }) => {
    const [state, setState] = useState({ username: '', password: '', password2: '' });
    const [error, setError] = useState();
    const inputOnChangeHandler = ({ target: { name, value } }) => setState({ ...state, [name]: value });
    const onSubmitHandler = async event => {
        event.preventDefault();
        // see @https://axios-http.com/docs/handling_errors
        const { username, password } = state;
        const res = await LoginFetch({ mode: "signup", username, password });
        console.log(res);
        if (res) switch (res.status) {
            case 200:
                setLogin(true);
                break;
            case 400: setError(res.data.message);
                break;
            default: setError("Unknown error")
        }
    };

    return (
        <div className="mt-10 w-full mx-auto max-w-md text-center ">
            {error ? <p className="text-red-600 font-medium uppercase">{error}</p> : <p className="font-medium uppercase">Signup</p>}
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

                {(state.password !== state.password2) && <p style={{ color: "red" }}>Passwords don\'t match.</p>}

                <input
                    name="password2"
                    type="password"
                    placeholder="type password again"
                    value={state.password2}
                    onChange={inputOnChangeHandler}
                    className="appearance-none bg-transparent py-2 px-2"
                    required />

                {(state.password === state.password2) && <button className="px-4 py-2 capitalize font-semibold border rounded border-black dark:border-white">Register</button>}
            </form>
            Already have an account ? <button onClick={() => setLogin(true)} className="underline">login</button>.
        </div >
    );
}

export default Register;