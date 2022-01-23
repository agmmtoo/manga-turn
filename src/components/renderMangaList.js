// Dummy cover, since it's expensive to loade images over network mobile-data-wise
import dummyCover from "./cover.png";
import { Link } from "react-router-dom";

const renderMangaList = ({ mangaList }) => {
    return (

        <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">
            {mangaList.map(manga => Manga(manga))}
        </div>
    );
}

export default renderMangaList;

const Manga = manga => {

    return (

        <div key={manga.id} className="text-center shadow-md mt-12 w-40">
            {/* px-1 my-5 py-5 w-4/5 md:w-3/5 */}

            {/* manga.coverImagePath */}

            <img src={dummyCover} width="140" height="220" alt={manga.name} loading="lazy" className="rounded-sm object-cover mx-auto" />

            <Link to={`/manga/${manga.id}`}>
                <div className="p-2">
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">{manga.name}</div>
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">{manga.uploadedBy}</div>
                </div>
            </Link>

        </div>
    );
};
