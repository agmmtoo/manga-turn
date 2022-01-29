import Fetch from "./hooks/Fetch";
import { userProfile } from "../api-endpoints";
import { useParams } from "react-router";
import renderUploaderDetail from "./renderUploaderDetail";
import { Redirect } from "react-router-dom";

const UploaderDetail = () => {
    const { uploaderId } = useParams();

    // I chose 1000 for fetch size, 
    // it may increase network load
    const uploaderDetailUrl = `${userProfile}${uploaderId}`;

    return (
        <>
            <Fetch
                uri={uploaderDetailUrl}
                renderSuccess={renderUploaderDetail}
                useCache={true}
                renderLoading={UploaderDetailLoading()}
                renderError={e => <Redirect to="/where-you-goin" />}
            />
        </>
    );
};

const UploaderDetailLoading = () => {
    return (
        <div className="my-7">
            <div className="skeleton w-1/2 h-52 md:w-2/4 md:h-64 mx-auto" />
            <div className="skeleton my-7 w-2/4 h-8" />
            <div className="skeleton w-3/4 h-9" />
        </div>
    );
}

export default UploaderDetail;