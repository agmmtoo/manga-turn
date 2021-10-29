import { useParams } from "react-router";
import Fetch from "./hooks/Fetch";

const ChapterDetail = () => {
    const { chapterId } = useParams();

    const URL = `https://mangaturn.games/dev/api/chapter/${chapterId}?size=1000`;
    const TOKEN = JSON.parse(localStorage.getItem("token"));
    const CONFIG = {
        headers: { Authorization: `Bearer ${TOKEN}` }
    };

    return (
        <Fetch
            uri={URL}
            config={CONFIG}
            renderSuccess={renderChapterDetail}
        />
    );
};

export default ChapterDetail;

const renderChapterDetail = ({ data: chapter }) => (
    <div className="chapterClass">
        <h1>{chapter.chapterName}</h1>
        {chapter.pages.map(renderPage)}
    </div>
);

const renderPage = page => (
    <div key={page.id}>
        <p>{page.pageNo}</p>
        <img src={page.contentPath} alt={page.pageNo} />
    </div>
);