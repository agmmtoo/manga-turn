import "../index.css";

// If I use useParams hook from 'react',
// "hook order" react warning show
// so I tried to manually extract from window location href

const mangaId = window.location.pathname.split("/")[2];

const ChapterList = ({ data: { chapterList, totalElements } }) => {
    return (
        <>
            <div className="p-2 m-2 flex flex-col gap-2">
                {chapterList.map(chapter => Chapter(chapter))}
            </div>
        </>
    );
};

export default ChapterList;

const Chapter = ({
    id,
    chapterName,
    chapterNo,
    type,
    pages = [],
    point,
    totalPages,
}) => {

    console.log('Manga Id from param is: ', mangaId)
    return (
        <a key={id} className="hover:shadow-lg" href={`/manga/${mangaId}/chapter/${id}`}>
            <div className="px-10 py-2" key={id}>
                {chapterNo}. {chapterName} ({totalPages} pages)
            </div>
        </a>
    );
};