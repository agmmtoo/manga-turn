// Dummy cover, since it's expensive to loade images over network mobile-data-wise
import dummyCover from "./cover.png";
import { Link } from "react-router-dom";

const renderMangaList = ({ data }) => {
    const { mangaList } = data;
    return (

        <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4">
            {mangaList.map(manga => Manga(manga))}
        </div>
    );
}

export default renderMangaList;

const Manga = manga => {

    return (

        <div key={manga.id} className="text-center shadow-lg rounded-md px-1 my-5 py-5 w-4/5 md:w-3/5">

            {/* manga.coverImagePath */}
            
                <img src={manga.coverImagePath} width="142" height="240" alt={manga.name} loading="lazy" className="h-60 rounded-sm object-cover mx-auto" />
            

            <Link to={`/manga/${manga.id}`}>
                <div className="py-2">
                    <p className="overflow-hidden font-semibold">{manga.name}</p>
                    <p className="">{manga.uploadedBy}</p>
                </div>
            </Link>

        </div>
    );
};
