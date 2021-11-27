import { useParams } from "react-router-dom"; // if user came from state
import Fetch from "./hooks/Fetch"; // if user came from link
import renderMangaDetail from "./renderMangaDetail";

const MangaDetailLink = () => {
    // See @ https://ui.dev/react-router-v5-pass-props-to-link/

    // get mangaId from url bar
    const { mangaId } = useParams();

    const URL = `https://mangaturn.games/dev/api/manga/${mangaId}`;
    const TOKEN = JSON.parse(localStorage.getItem("token"));
    const CONFIG = {
        headers: { Authorization: `Bearer ${TOKEN}` }
    };

    return (
        <Fetch
            uri={URL}
            config={CONFIG}
            renderSuccess={renderMangaDetail}
        />
    );
}

export default MangaDetailLink;