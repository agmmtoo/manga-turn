import { mtaxios } from "./hooks/Fetch";

import "../index.css";
import { ImStarFull, ImStarEmpty, ImPen, ImHourGlass, ImCalendar, ImEye } from "react-icons/im";

import { addFavourite, removeFavourite } from "../api-endpoints";
import { Link } from "react-router-dom";

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
    uploadedByUser: { id: uploaderId, username: uploaderName },
    updatedDateInMilliSeconds,
    views,
    genreList = [],
    favourite,
}, token, setForceRefetch) => {

    const handleFavourite = () => {
        favourite
            ? mtaxios.delete(`${removeFavourite}${id}`, { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data: { message } }) => console.log(message))
                .then(() => setForceRefetch(Math.random()))
            : mtaxios.post(`${addFavourite}${id}`, {}, { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data: { message } }) => console.log(message))
                .then(setForceRefetch(Math.random()))
                .then(() => setForceRefetch(Math.random()));
    };

    const latestUpdated = ms => new Date(parseInt(ms)).toString();

    return (
        <div className="mx-auto">

            <img src={coverImagePath} alt={name} className="my-7 mx-auto w-3/4 md:w-1/4 shadow-md" />

            <div className="text-center my-7">
                <h1 className="text-2xl">{name}</h1>
                <h2 className="">{otherNames}</h2>
            </div>

            <div className="my-7 flex flex-wrap justify-center gap-2 text-sm">
                {genreList.map(g => <div key={g.id} className="border px-3 py-1 border-gray-600 dark:border-gray-300 rounded-3xl">{g.name}</div>)}
            </div>

            <div className="my-7 text-xs flex mx-auto justify-evenly flex-nowrap max-w-md">
                {author
                    ? <>
                        <div><ImPen size={15} />
                        </div><div>{author}</div></>
                    : null}

                {publishedDate
                    ? <><div><ImCalendar size={15} /></div>
                        <div>{publishedDate}</div></>
                    : null}

                <div><ImHourGlass size={15} /></div><div>{status}</div>

                <div><ImEye size={15} /></div><div>{views}</div>
            </div>

            <div className="border-t border-b border-gray-400 dark:border-gray-500 flex justify-around place-items-center">
                <div className="p-5 cursor-pointer">
                    <Link to={`/uploader/${uploaderId}`}>
                        {uploaderName}
                    </Link>
                </div>
                <div className="p-5 cursor-pointer">
                    <button onDoubleClick={handleFavourite}>
                        {favourite
                            ? <ImStarFull size={35} />
                            : <ImStarEmpty size={35} />}
                    </button>
                </div>
            </div>
            <div className="m-7 text-justify desc">{description}</div>
            <div className="font-mono px-5 text-xs">Latest updated on: {latestUpdated(updatedDateInMilliSeconds)}</div>
        </div>
    );
};

export default renderMangaDetail;
