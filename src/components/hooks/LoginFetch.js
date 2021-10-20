import axios from "axios";

const uri = `https://mangaturn.games/dev/api/auth/login/`;

export default async function LoginFetch({ username, password }) {
    return await axios.post(uri, { username, password })
        .catch(e => { throw new Error(`Something went wrong: ${e}`) });
};