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
            {error ? <p className="error uppercase">{error}</p> : <p className="uppercase">Signup</p>}
            <form onSubmit={onSubmitHandler} className="m-10 p-5 shadow-lg rounded flex flex-col justify-center gap-5">
                <input
                    name="username"
                    placeholder="username"
                    value={state.username}
                    onChange={inputOnChangeHandler}
                    className="input-mt"
                    required />

                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={state.password}
                    onChange={inputOnChangeHandler}
                    className="input-mt"
                    required />

                {(state.password !== state.password2) && <div className="error">Passwords don't match.</div>}

                <input
                    name="password2"
                    type="password"
                    placeholder="type password again"
                    value={state.password2}
                    onChange={inputOnChangeHandler}
                    className="input-mt"
                    required />

                {(state.password === state.password2) && <button className="form-btn">Register</button>}
            </form>
            Already have an account ? <button onClick={() => setLogin(true)} className="underline">login</button>.
        </div >
    );
}

export default Register;