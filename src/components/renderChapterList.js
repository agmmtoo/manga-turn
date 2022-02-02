import "../index.css";
import { Link } from "react-router-dom";
import { mtaxios } from "./hooks/Fetch";
import { purchaseChapter } from "../api-endpoints";

// If I use useParams hook from 'react',
// "hook order" react warning show
// so I tried to manually extract from window location href

const renderChapterList = (data, token, setForceRefetch) => {
    const { chapterList, totalElements } = data;

    // Filter paid and free
    const Chapter = c => {
        if (c.type === 'FREE' || ((c.type === 'PAID') && c.isPurchase)) return FreeChapter(c);
        else if (c.type === 'PAID' && !(c.isPurchase)) return PaidChapter(c);
        return null;
    }

    const handlePurchase = ({ target: { dataset: { cid } } }) => {
        mtaxios.post(`${purchaseChapter}${cid}`, {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data: { message } }) => console.log(message))
            .then(() => setForceRefetch(cid));
    }

    return (
        <>
            <div className="my-7 text-center">
                {totalElements} Chapter{(totalElements > 1) ? "s" : ""}
            </div>
            <div className="my-7 flex flex-col" onDoubleClick={handlePurchase}>
                {chapterList.map(Chapter)}
            </div>
        </>
    );

};

export default renderChapterList;

// Free Chapter
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
                <div className="opacity-80">{chapterNo} | {totalPages}Pgs {
                    isPurchase
                        ? <span className="font-medium text-green-800 dark:text-green-400">PURCHASED</span>
                        : ""
                }</div>
            </div>
        </Link>
    );
};

// Paid Chapter
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
        <div key={id} className="inline-flex flex-col cursor-pointer px-5 my-2 text-sm">
            <div data-cid={id}>{chapterName}</div>
            <div data-cid={id} className="opacity-80">{chapterNo} | {totalPages}Pgs <span className="font-medium text-indigo-800 dark:text-indigo-400">{point}Pts</span></div>
        </div>
    );
};
