// Dummy cover, since it's expensive to loade images over network mobile-data-wise
import dummyCover from "./cover.png"
import { Link } from "react-router-dom";

const RenderMangaList = ({ data: { mangaList, totalElements } }) => {
    return (
        <>
            <div>Browse total {totalElements} Mangas.</div>
            {mangaList.map(manga => RenderManga(manga))}
        </>
    );
}

export default RenderMangaList;

const RenderManga = manga => {

    return (
        <div key={manga.id} style={{ height: "317px" }}>
            {/*
                We pass manga's every info to another component through Link
                other component will receive from useLocation().state
                Voila, one api fetch is saved!
                See @ https://ui.dev/react-router-v5-pass-props-to-link/
            */}
            <Link to={{
                pathname: `/manga/${manga.id}`,
                state: manga
            }} >
                <img src={dummyCover} alt={manga.name} style={{ width: "165px" }} />
            </Link>
            <p>{manga.name}</p>
            <p>{manga.uploadedBy}</p>
        </div>
    );
};