import { useState } from 'react';

import Login from './Login';
import Register from './Register';

const NoToken = ({ setToken, setRToken }) => {
    const [login, setLogin] = useState(true);

    if (login) return <Login setLogin={setLogin} setToken={setToken} setRToken={setRToken} />
    return <Register setLogin={setLogin} />

}

export default NoToken;