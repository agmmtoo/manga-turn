import { useParams } from "react-router";
import Fetch from "./hooks/Fetch";
import renderChapterDetail from "./renderChapterDetail";

const ChapterDetail = () => {
    const { mangaId, chapterId } = useParams();

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