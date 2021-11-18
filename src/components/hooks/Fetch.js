import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetch({
    uri,
    config = {},
    renderLoading = <p>loading...</p>,
    renderError = e => <p style={{ color: 'red' }}>{e.message}</p>,
    renderSuccess = f => f
}) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    // const [c, storeCache] = useCache(uri);
    const cache = JSON.parse(window.sessionStorage.getItem(uri));

    useEffect(() => {
        if (cache) {
            console.log('found cache');
            setLoading(false);
            setData(cache);
        }
        else {
            const cancelTokenSource = axios.CancelToken.source();

            axios.get(uri, { ...config, cancelToken: cancelTokenSource.token })
                .then(response => {
                    setData(response);
                    console.log('found no cache, setting cache');
                    window.sessionStorage.setItem(uri, JSON.stringify(response));
                })
                .then(() => setLoading(false)) // <== this go up and i'm goneeeeee
                .catch(e => {
                    setError(e);
                    console.log(e);
                    setLoading(false);
                });

            // component unmount
            return () => cancelTokenSource.cancel();
        }

    }, [uri]);

    if (loading) return renderLoading;
    if (data) return renderSuccess(data);
    if (error) return renderError(error);
};