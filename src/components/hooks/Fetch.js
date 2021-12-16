import axios from "axios";
import { useEffect, useState } from "react";
import { useDataContext } from "./data-context";

export default function Fetch({
    uri,
    renderLoading = <p>loading...</p>,
    renderError = e => {
        return (
            <>
                <p style={{ color: 'red' }}>{e.message}</p>
                <p>If you can't do anything, please <a className="underline" href="https://m.me/remindmetostudy">contact dev</a>.</p>
            </>
        );
    },
    renderSuccess,
}) {
    const { token } = useDataContext();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        console.log('I got token and it\'s', token)

        axios.get(uri, { headers: { Authorization: `Bearer ${token}` }, cancelToken: cancelTokenSource.token })
            .then(setData)
            .then(() => setLoading(false)) // <== this go up and i'm goneeeeee
            .catch(e => {
                setError(e);
                console.log(e);
                setLoading(false);
            });

        // component unmount
        return () => cancelTokenSource.cancel();

    }, [token, uri]);

    if (loading) return renderLoading;
    if (data) return renderSuccess(data);
    if (error) return renderError(error);
};
