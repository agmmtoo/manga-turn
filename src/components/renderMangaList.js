// Dummy cover, since it's expensive to loade images over network mobile-data-wise
import dummyCover from "./cover.png";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const renderMangaList = ({ mangaList }) => {
    return (

        <div className="my-6 grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {mangaList.map(manga => Manga(manga))}
        </div>
    );
}

export default renderMangaList;

export const Manga = manga => {

    return (

        <div key={manga.id} className="my-6 text-center shadow-md w-40">

            {/* manga.coverImagePath */}
            <LazyLoad
                height={224}
                placeholder={
                    <div className="w-36 h-56 skeleton"></div>}
                unmountIfInvisible={false}
                debounce={true}
            >

                <img src={manga.coverImagePath} alt={manga.name} className="my-2 w-36 h-56 object-cover mx-auto" width="144" height="224" loading="lazy" />
            </LazyLoad>

            <Link to={`/manga/${manga.id}`}>
                <div className="px-2">
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">{manga.name}</div>
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">{manga.uploadedBy}</div>
                </div>
            </Link>

        </div>
    );
};
