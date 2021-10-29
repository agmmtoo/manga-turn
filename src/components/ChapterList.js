import { Link } from "react-router-dom";

// If I use useParams hook from 'react',
// "hook order" react warning show
// so I tried to manually extract from window location href

const mangaId = window.location.pathname.split("/")[2];

const ChapterList = ({ data: { chapterList, totalElements } }) => {
    return (
        <>
            <p>Total {totalElements} chapters.</p>
            {chapterList.map(chapter => Chapter(chapter))}
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
        <Link key={id} to={`/manga/${mangaId}/chapter/${id}`} >
            <div key={id}>
                {chapterNo}. {chapterName} ({totalPages} pages)
            </div>
        </Link >
    );
};