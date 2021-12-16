import { useParams } from "react-router-dom"; // if user came from state
import Fetch from "./hooks/Fetch"; // if user came from link
import renderMangaDetail from "./renderMangaDetail";

const MangaDetail = () => {
    // See @ https://ui.dev/react-router-v5-pass-props-to-link/

    // get mangaId from url bar
    const { mangaId } = useParams();

    const URL = `https://mangaturn.games/dev/api/manga/${mangaId}`;

    return (
        <Fetch
            uri={URL}
            renderSuccess={renderMangaDetail}
        />
    );
}

export default MangaDetail;