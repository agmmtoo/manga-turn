import axios from "axios";
import { baseUrl, apiUrl, loginUrl, registerUrl } from "../../api-endpoints";

export default async function LoginFetch({ mode, username, password }) {
    let uri = {
        login: `${baseUrl}${apiUrl}${loginUrl}`,
        signup: `${baseUrl}${apiUrl}${registerUrl}`,
    };
    uri = uri[mode];
    return await axios.post(uri, { username, password })
        .catch(e => e.response);
};