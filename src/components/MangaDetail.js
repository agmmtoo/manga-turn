import { useParams } from "react-router-dom"; // if user came from state
import Fetch from "./hooks/Fetch"; // if user came from link
import renderMangaDetail from "./renderMangaDetail";
import { baseUrl, apiUrl, manga } from "../api-endpoints";
import { useState } from "react";

const MangaDetail = () => {
    // See @ https://ui.dev/react-router-v5-pass-props-to-link/

    // get mangaId from url bar
    const { mangaId } = useParams();
    const [fav, setFav] = useState(0);

    const URL = `${baseUrl}${apiUrl}${manga}${mangaId}`;

    return (
        <Fetch
            uri={URL}
            renderSuccess={renderMangaDetail}
            reloadMethod={setFav}
            reloadVar={fav}
        />
    );
}

export default MangaDetail;
