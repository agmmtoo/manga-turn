import Fetch from "./hooks/Fetch";
import RenderMangaList from "./RenderMangaList";

export default function HomePage({ token }) {
    const BASE_URL = "https://mangaturn.games";
    const API_URL = "/dev/api";
    const MANGA_LIST = "/all-manga";
    const SIZE_PARAM = "size=";

    // I chose 1000 for fetch size, 
    // it may increase network load
    const SIZE_VALUE = 1000;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return (
        <Fetch
            uri={`${BASE_URL}${API_URL}${MANGA_LIST}?${SIZE_PARAM}${SIZE_VALUE}`}
            config={config}
            renderSuccess={RenderMangaList}
        />
    );
};