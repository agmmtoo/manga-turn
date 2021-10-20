export default function MangaListView({
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
}) {
    return (
        <div key={id}>
            <h1>{name}({otherNames})</h1>
            <p>- {author}</p>
            {/* <img src={coverImagePath} alt={name} style={{ maxWidth: "20vw" }} /> */}
            <div style={{ whiteSpace: "nowrap", overflow: "scroll", textOverflow: "ellipsis" }}>{description}</div>
            <i>Relesed on: {publishedDate}</i>
            <p>Status: {status}</p>
            <p>Translator: {uploadedBy}</p>
            <em>Views: {views}</em>
            <ul>
                {genereList.map((n, i) =>
                    <li key="{i}">{n}</li>)}
            </ul>
        </div>
    );
};