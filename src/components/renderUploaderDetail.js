import Fetch from "./hooks/Fetch";
import { allManga } from "../api-endpoints";
import renderMangaList from "./renderMangaList";
import { MangaListLoading } from "./MangaList";

const renderUploaderDetail = ({
    id,
    username,
    description = "",
    profileUrl = "",
    payment,
    point,
    role,
    type,
    updatedDateInMilliSeconds,
    createdDateInMilliSeconds,
}) => {
    // I chose 1000 for fetch size, 
    // it may increase network load
    const uploadeMangasUri = `${allManga}?uploadedBy=${username}&size=1000`;
    return (
        <>
            <div className="my-7">
                <img
                    src={profileUrl}
                    alt={username}
                    className="w-1/2 md:w-1/4  shadow-md mx-auto"
                />
                <h1 className="my-7 text-2xl text-center">{username}</h1>
                <div className="p-5 text-justify desc">
                    {description}
                </div>
            </div>
            <Fetch
                uri={uploadeMangasUri}
                renderSuccess={renderMangaList}
                renderLoading={MangaListLoading()}
                useCache={true}
            />
        </>
    );
};

export default renderUploaderDetail;