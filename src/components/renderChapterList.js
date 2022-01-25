import "../index.css";
import { Link } from "react-router-dom";

// If I use useParams hook from 'react',
// "hook order" react warning show
// so I tried to manually extract from window location href

const renderChapterList = (data) => {
    const { chapterList, totalElements } = data;
    return (
        <>
            <div className="my-7 flex flex-col">
                {chapterList.map(Chapter)}
            </div>
        </>
    );
};

export default renderChapterList;

const Chapter = c => {
    if (c.type === 'FREE' || ((c.type === 'PAID') && c.isPurchase)) return FreeChapter(c);
    else if (c.type === 'PAID' && !(c.isPurchase)) return PaidChapter(c);
    return null;
}

const FreeChapter = ({
    id,
    chapterName,
    chapterNo,
    type,
    point,
    totalPages,
    isPurchase
}) => {
    const mangaId = window.location.pathname.split("/")[2];
    return (
        <Link key={id} className="hover:opacity-75" to={`/manga/${mangaId}/chapter/${id}`}>
            <div className="px-5 my-2 text-sm">
                <div>{chapterName}</div>
                <div>#{chapterNo} | {totalPages}Pgs | {
                    isPurchase
                        ? <span className="font-semibold text-green-800">PURCHASED</span>
                        : "FREE"
                }</div>
            </div>
        </Link>
    );
};

const PaidChapter = ({
    id,
    chapterName,
    chapterNo,
    type,
    point,
    totalPages,
    isPurchase
}) => {
    return (
        <div key={id} className="inline-block cursor-pointer px-5 my-2 text-sm" onDoubleClick={() => console.log('handle purchase')}>
            <div>{chapterName}</div>
            <div>#{chapterNo} | {totalPages}Pgs | <span className="text-indigo-800">{point}Pts</span></div>
        </div>
    );
};