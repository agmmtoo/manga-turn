import { useParams } from "react-router";
import Fetch from "./hooks/Fetch";
import renderChapterDetail from "./renderChapterDetail";
import { chapter } from "../api-endpoints";

const ChapterDetail = () => {
    const { chapterId } = useParams();

    const URL = `${chapter}${chapterId}?size=1000`;

    return (
        <Fetch
            uri={URL}
            renderSuccess={renderChapterDetail}
        />
    );
};

export default ChapterDetail;
