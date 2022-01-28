import Fetch from "./hooks/Fetch";
import { baseUrl, apiUrl, userProfile } from "../api-endpoints";
import { useParams } from "react-router";
import renderUploaderDetail from "./renderUploaderDetail";

const UploaderDetail = () => {
    const { uploaderId } = useParams();

    // I chose 1000 for fetch size, 
    // it may increase network load
    const uploaderDetailUrl = `${baseUrl}${apiUrl}${userProfile}${uploaderId}`;

    return (
        <>
            <Fetch
                uri={uploaderDetailUrl}
                renderSuccess={renderUploaderDetail}
                useCache={true}
            />
        </>
    );
};

export default UploaderDetail;