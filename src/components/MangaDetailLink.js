import { useLocation, useParams } from "react-router-dom"; // if user came from state
import Fetch from "./hooks/Fetch"; // if user came from link
import MangaDetail from "./MangaDetail";

const MangaDetailLink = () => {
    // See @ https://ui.dev/react-router-v5-pass-props-to-link/

    // get mangaId from url bar
    const { mangaId } = useParams();

    // we renamed state as data
    // will be used if user came from state
    const { state: data } = useLocation();


    // If user browse from manga's direct link, state is unefined
    // and we must refetch from api
    if (!data) {
        // User didn't came from state,
        // define some link and perform Fetch
        console.log('came from link')

        const URL = `https://mangaturn.games/dev/api/manga/${mangaId}`;
        const TOKEN = JSON.parse(localStorage.getItem("token"));
        const CONFIG = {
            headers: { Authorization: `Bearer ${TOKEN}` }
        };
        return (
            <Fetch
                uri={URL}
                config={CONFIG}
                renderSuccess={MangaDetail}
            />

        )
    }

    // User came from State (from MangaList),
    // we should use already have data,
    // it save a fetch, but no viewcount point
    console.log('came from state');
    return MangaDetail({ data })
    // NOTICE I have structurize data, because MangaDetail will destructure it as data

}

export default MangaDetailLink;