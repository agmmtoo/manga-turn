import Fetch from "./hooks/Fetch";
import renderChapterList from "./renderChapterList";
import "../index.css";
import { ImHeart } from "react-icons/im";

import { baseUrl, apiUrl, allChapter } from "../api-endpoints";

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
    genreList = []
}) => {
    const URL = `${baseUrl}${apiUrl}${allChapter}${id}?size=1000`;

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
                <div className="border-t border-b border-gray-400 dark:border-gray-500 flex justify-around place-items-center">
                    <div className="p-5 cursor-pointer">
                        {uploadedBy}
                    </div>
                    <div className="p-5 cursor-pointer">
                        <ImHeart size={35} />
                    </div>
                </div>
                <div className="flex flex-wrap my-7">
                    <div className="text-right w-1/3">
                        Author <br />
                        Published<br />
                        Updated<br />
                        Status<br />
                        Views
                    </div>
                    <div className="text-left w-2/3">
                        {author}<br />
                        {publishedDate}<br />
                        {updatedDateInMilliSeconds}<br />
                        {status}<br />
                        {views}
                    </div>
                    <div className="m-7 text-justify w-full">{description}</div>
                </div>
            </div>
            <Fetch
                uri={URL}
                renderSuccess={renderChapterList}
            />
        </>
    )
};

export default renderMangaDetail;