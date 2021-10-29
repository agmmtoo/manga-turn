import Fetch from "./hooks/Fetch";

const MangaDetail = ({ data: {
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
    const TOKEN = JSON.parse(localStorage.getItem("token"));
    const CONFIG = {
        headers: { Authorization: `Bearer ${TOKEN}` }
    };

    return (
        <>
            <h1>{name}</h1>
            <h2>{otherNames}</h2>
            <img src={coverImagePath} alt={name} />
            <p>{author}</p>
            <p>{publishedDate}</p>
            <p>{status}</p>
            <p>{uploadedBy}</p>
            <p>{views}</p>
            {genereList.map(genere => (
                <i>{genere}</i>
            ))}
            <p>{description}</p>

            <h1>Chapters</h1>
            <i>get chapters here using {id}</i>

            <Fetch
                uri={URL}
                config={CONFIG}
                renderSuccess={renderChapterList}
            />

        </>
    )

};

const renderChapterList = ({ data: { chapterList, totalElements } }) => {
    return (
        <>
            <p>Total {totalElements} chapters.</p>
            {chapterList.map(chapter => renderChapterDetail(chapter))}
        </>
    );
};

const renderChapterDetail = ({
    id,
    chapterName,
    chapterNo,
    type,
    pages = [],
    point,
    totalPages,
}) => (
    <div key={id}>
        {chapterNo}. {chapterName} ({totalPages} pages)
    </div>
);

export default MangaDetail;