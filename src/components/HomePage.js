import Fetch from "./hooks/Fetch";
import MangaListView from "./MangaListView";
import { FixedSizeList } from "react-window"

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
            renderSuccess={renderMangaList}
        />
    );
};

const renderMangaList = data => (
    <FixedSizeList
        height={window.innerHeight}
        itemCount={data.mangaList.length}
        itemSize={500}
        width={window.innerWidth}

        // "itemData" props is passed to child as "data"
        itemData={data.mangaList}
    >
        {Row}
    </FixedSizeList>
); // "{}", instead of "()" and EROOOOOOOOR

const Row = ({ data, index, style }) => (
    <div style={style}>
        {MangaListView(data[index])}
    </div>
);