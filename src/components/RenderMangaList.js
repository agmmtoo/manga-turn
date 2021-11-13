// Dummy cover, since it's expensive to loade images over network mobile-data-wise
import dummyCover from "./cover.png"
import { Link } from "react-router-dom";

const RenderMangaList = ({ data: { mangaList, totalElements } }) => {
    return (
        <>
            <div>Browse total {totalElements} Mangas.</div>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">
                {mangaList.map(manga => RenderManga(manga))}
            </div>
        </>
    );
}

export default RenderMangaList;

const RenderManga = manga => {

    return (

        <div key={manga.id} className="text-center shadow-lg rounded-md px-1 py-5 w-4/5">
            {/*
                We pass manga's every info to another component through Link
                other component will receive from useLocation().state
                Voila, one api fetch is saved!
                See @ https://ui.dev/react-router-v5-pass-props-to-link/
            */}

            <img src={manga.coverImagePath} alt={manga.name} className="rounded-sm" />
            <Link to={{
                pathname: `/manga/${manga.id}`,
                state: manga
            }} >
                <div className="py-2">
                    <p className="overflow-hiddenfont-semibold">{manga.name}</p>
                    <p className="">{manga.uploadedBy}</p>
                </div>
            </Link>
        </div>
    );
};