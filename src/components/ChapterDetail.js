import { useParams } from "react-router";
import Fetch from "./hooks/Fetch";
import renderChapterDetail from "./renderChapterDetail";

const ChapterDetail = () => {
    const { chapterId } = useParams();

    const URL = `https://mangaturn.games/dev/api/chapter/${chapterId}?size=1000`;

    return (
        <Fetch
            uri={URL}
            renderSuccess={renderChapterDetail}
        />
    );
};

export default ChapterDetail;
