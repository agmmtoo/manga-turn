import Fetch from "./hooks/Fetch";
import renderMangaList from "./renderMangaList";

export default function HomePage() {
    const BASE_URL = "https://mangaturn.games";
    const API_URL = "/dev/api";
    const MANGA_LIST = "/all-manga";
    const SIZE_PARAM = "size=";

    // I chose 1000 for fetch size, 
    // it may increase network load
    const SIZE_VALUE = 1000;

    return (
        <Fetch
            uri={`${BASE_URL}${API_URL}${MANGA_LIST}?${SIZE_PARAM}${SIZE_VALUE}`}
            renderSuccess={renderMangaList}
        />
    );
};