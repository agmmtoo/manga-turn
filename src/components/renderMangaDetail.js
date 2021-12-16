import Fetch from "./hooks/Fetch";
import renderChapterList from "./renderChapterList";
import "../index.css";

const renderMangaDetail = ({ data: {
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
    views,
    genereList = []
} }) => {
    const URL = `https://mangaturn.games/dev/api/all-chapter/${id}?size=1000`;

    return (
        <>
            <div className="p-2 m-2 flex flex-wrap justify-center shadow-lg">
                <h1 className="w-full">{name}</h1>
                <h2 className="w-full">{otherNames}</h2>
                <img src={coverImagePath} alt={name} className="max-w-xs shadow-md lg:w-1/2" />
                <div className="py-5 m-5 text-left w-full lg:w-1/2">
                    <p>{author}</p>
                    <p>{publishedDate}</p>
                    <p>{status}</p>
                    <p>{views}</p>
                    <a href="#/" className="text-sm py-5">{uploadedBy}</a>
                    <div className="my-2 text-justify">{description}</div>
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