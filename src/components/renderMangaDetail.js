import Fetch from "./hooks/Fetch";
import renderChapterList from "./renderChapterList";
import "../index.css";
import { ImStarFull, ImStarEmpty, ImPen, ImHourGlass, ImCalendar, ImEye } from "react-icons/im";

import { baseUrl, apiUrl, allChapter, addFavourite, removeFavourite } from "../api-endpoints";
import axios from "axios";
// import { useDataContext } from "./hooks/data-context";

const renderMangaDetail = ({
    id,
    name,
    otherNames,
    author,
    coverImagePath,
    description,
    publishedDate,
    status,
    uploadedBy,
    uploadedByUser = {},
    updatedDateInMilliSeconds,
    views,
    genreList = [],
    favourite,
}, token, setForceRefetch) => {
    const URL = `${baseUrl}${apiUrl}${allChapter}${id}?size=1000`;

    const handleFavourite = () => {
        favourite
            ? axios.delete(`${baseUrl}${apiUrl}${removeFavourite}${id}`, { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data: { message } }) => console.log(message))
                .then(() => setForceRefetch(Math.random()))
            : axios.post(`${baseUrl}${apiUrl}${addFavourite}${id}`, {}, { headers: { Authorization: `Bearer ${token}` } }).then(({ data: { message } }) => console.log(message))
                .then(setForceRefetch(Math.random()))
                .then(() => setForceRefetch(Math.random()));
    };

    return (
        <>
            <div className="mx-auto">
                <img src={coverImagePath} alt={name} className="my-7 mx-auto w-4/5 md:w-1/4 shadow-md" />
                <div className="text-center my-7">
                    <h1 className="text-2xl">{name}</h1>
                    <h2 className="">{otherNames}</h2>
                </div>
                <div className="my-7 flex flex-wrap justify-center gap-2 text-sm">
                    {genreList.map(g => <div key={g.id} className="border px-3 py-1 border-gray-600 dark:border-gray-300 rounded-3xl">{g.name}</div>)}
                </div>
                <div className="my-7 text-xs flex mx-auto justify-evenly flex-nowrap max-w-md">
                    <div><ImPen size={15} /></div><div>{author}</div>
                    <div><ImCalendar size={15} /></div><div>{publishedDate}</div>
                    <div><ImHourGlass size={15} /></div><div>{status}</div>
                    <div><ImEye size={15} /></div><div>{views}</div>
                </div>
                <div className="border-t border-b border-gray-400 dark:border-gray-500 flex justify-around place-items-center">
                    <div className="p-5 cursor-pointer">
                        {uploadedBy}
                    </div>
                    <div className="p-5 cursor-pointer">
                        <button onDoubleClick={handleFavourite}>
                            {favourite
                                ? <ImStarFull size={35} />
                                : <ImStarEmpty size={35} />}
                        </button>
                    </div>
                </div>
                <div className="m-7 text-justify">{description}</div>
            </div>
            <Fetch
                uri={URL}
                renderSuccess={renderChapterList}
            />
        </>
    )
};

export default renderMangaDetail;
