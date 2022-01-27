import Fetch from "./hooks/Fetch";
import renderMangaList from "./renderMangaList";
import { MangaListLoading } from "./MangaList";
import { baseUrl, apiUrl, allManga } from "../api-endpoints";
import { useParams } from "react-router";

const UploaderDetail = () => {
    const { uploaderId, uploaderUserName } = useParams();

    // I chose 1000 for fetch size, 
    // it may increase network load
    const uploadeMangasUri = `${baseUrl}${apiUrl}${allManga}?uploadedBy=${uploaderUserName}&size=1000`;

    return (
        <>
            {/* <Fetch
                uri={uploadeMangasUri}
                renderSuccess={renderMangaList}
                renderLoading={MangaListLoading()}
                useCache={true}
            /> */}
        </>
    );
};

export default UploaderDetail;