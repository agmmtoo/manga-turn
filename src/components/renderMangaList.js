import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const renderMangaList = ({ mangaList }, t, fr, giftFromParent) => {
    const { searchTerm } = giftFromParent; // destruct searchTerm from MangaList through Fetch's giftFromParent

    // sort by latest updated
    const sortByLatestUpdated = (firstEl, secondEl) => secondEl.updatedDateInMilliSeconds - firstEl.updatedDateInMilliSeconds;

    const sortedMangaList = [...mangaList].sort(sortByLatestUpdated)

    // implement search
    const filterManga = ({ name, uploadedBy }) => {
        const s = (searchTerm || "").toLowerCase();
        const n = name.toLowerCase();
        const u = uploadedBy.toLowerCase();

        return (n.includes(s) || u.includes(s));
    }

    return (

        <div className="my-6 grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {sortedMangaList.filter(filterManga).map(manga => Manga(manga))}
        </div>
    );
}

export default renderMangaList;

export const Manga = manga => {

    return (

        <div key={manga.id} className="my-6 text-center shadow-md w-40">

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
                <div className="px-2 pb-2">
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">{manga.name}</div>
                    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">{manga.uploadedBy}</div>
                </div>
            </Link>

        </div>
    );
};
