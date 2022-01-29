import { useParams } from "react-router-dom"; // if user came from state
import Fetch from "./hooks/Fetch"; // if user came from link
import renderMangaDetail from "./renderMangaDetail";
import { manga } from "../api-endpoints";

const MangaDetail = () => {
    // See @ https://ui.dev/react-router-v5-pass-props-to-link/

    // get mangaId from url bar
    const { mangaId } = useParams();

    const URL = `${manga}${mangaId}`;

    return (
        <Fetch
            uri={URL}
            renderSuccess={renderMangaDetail}
            renderLoading={MangaDetailLoading()}
        />
    );
}

export default MangaDetail;

const MangaDetailLoading = () => {
    return (
        <div className="w-screen h-screen">
            <div className="skeleton my-7 w-3/6 h-3/6 md:w-1/4 md:h-4/5" />
            <div className="my-7">
                <div className="skeleton w-4/5 md:w-1/4 h-8" />
                <div className="skeleton w-3/5 md:w-1/4 h-6" />
                <div className="skeleton my-7 w-3/4 md:w-2/4 h-6" />
                <div className="border-t border-b border-gray-400 dark:border-gray-500 flex justify-around place-items-center h-20">
                    <div className="skeleton p-5 w-32 h-8" />
                    <div className="skeleton p-5 w-9 h-9" />
                </div>
            </div>
        </div>
    );
}
