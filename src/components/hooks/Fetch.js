import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetch({
    uri,
    config = {},
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

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();

        axios.get(uri, { ...config, cancelToken: cancelTokenSource.token })
            .then(setData)
            .then(() => setLoading(false)) // <== this go up and i'm goneeeeee
            .catch(e => {
                setError(e);
                console.log(e);
                setLoading(false);
            });

        // component unmount
        return () => cancelTokenSource.cancel();

    }, [uri, config]);

    if (loading) return renderLoading;
    if (data) return renderSuccess(data);
    if (error) return renderError(error);
};