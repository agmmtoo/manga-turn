import axios from "axios";

export default async function LoginFetch({ mode, username, password }) {
    let uri = {
        login: `https://mangaturn.games/dev/api/auth/login`,
        signup: `https://mangaturn.games/dev/api/auth/signup`
    };
    uri = uri[mode];
    console.log(mode, username, password);
    return await axios.post(uri, { username, password })
        .catch(e => e.response);
};