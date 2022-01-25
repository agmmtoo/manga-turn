import axios from "axios";
import { useEffect, useState } from "react";
import { useDataContext } from "./data-context";
import { ImSpinner9 } from "react-icons/im";

export default function Fetch({
    uri,
    renderLoading = <ImSpinner9 className="animate-spin" />,
    renderError = e => {
        return (
            <>
                <p style={{ color: 'red' }}>{e.message}</p>
                <p>If you can't do anything, please <a className="underline" href="https://m.me/remindmetostudy">contact dev</a>.</p>
            </>
        );
    },
    renderSuccess,
    useCache = false,
    reloadVar = false,
    reloadMethod = () => { },
}) {
    const { token, cache, setCache } = useDataContext();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        if (cache && cache[uri]) {
            setLoading(false);
            setData(cache[uri]);
        }
        else {
            axios.get(uri, { headers: { Authorization: `Bearer ${token}` }, cancelToken: cancelTokenSource.token })
                .then(({ data }) => {
                    if (useCache) setCache(uri, data);
                    setData(data)
                })
                .then(() => setLoading(false)) // <== this go up and i'm goneeeeee
                .catch(e => {
                    setError(e);
                    console.log(e);
                    setLoading(false);
                });
        }
        // component unmount
        return () => cancelTokenSource.cancel();

    }, [reloadVar, cache, setCache, token, uri]);

    if (loading) return renderLoading;
    if (error) return renderError(error)
    if (data) return renderSuccess(data, reloadMethod, token);

};
