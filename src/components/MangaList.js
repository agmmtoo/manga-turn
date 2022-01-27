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
            renderLoading={MangaListLoading()}
            useCache={true}
        />
    );
};

export const MangaListLoading = () => {
    const items = new Array(8);
    return (
        <div className="my-6 grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {[...items].map((n, i) => <div key={i} className="my-6 w-40 h-72 skeleton"></div>)}
        </div>
    );
};