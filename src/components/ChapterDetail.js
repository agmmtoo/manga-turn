import { useParams } from "react-router-dom";
import Fetch from "./hooks/Fetch";
import renderChapterDetail from "./renderChapterDetail";
import { chapter } from "../api-endpoints";

const ChapterDetail = () => {
    const { chapterId } = useParams();

    return (
        <Fetch
            uri={`${chapter}${chapterId}?size=1000`}
            renderSuccess={renderChapterDetail}
            useCache={true}
        />
    );
};

export default ChapterDetail;
