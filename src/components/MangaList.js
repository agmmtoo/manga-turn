import Fetch from "./hooks/Fetch";
import renderMangaList from "./renderMangaList";
import { baseUrl, apiUrl, allManga } from "../api-endpoints";

export default function HomePage() {
    // I chose 1000 for fetch size, 
    // it may increase network load
    const uri = `${baseUrl}${apiUrl}${allManga}?size=1000`

    return (
        <Fetch
            uri={uri}
            renderSuccess={renderMangaList}
            useCache={true}
        />
    );
};