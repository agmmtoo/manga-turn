import { useLocation } from "react-router-dom";

const MangaDetail = () => {
    // See @ https://ui.dev/react-router-v5-pass-props-to-link/
    const { state: {
        id,
        name,
        otherNames,
        author,
        coverImagePath,
        description,
        publishedDate,
        status,
        uploadedBy,
        uploadedByUser = {},
        views,
        genereList = []
    } } = useLocation();
    return (
        <div>
            id from state: {id}
            name: {name}
            othername: {otherNames}
        </div>
    )

};

export default MangaDetail;