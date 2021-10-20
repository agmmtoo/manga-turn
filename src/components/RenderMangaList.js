import { FixedSizeList } from "react-window";

// I used FixedSizeList from "react-window" to render
// the data stored in state when scroll load

export const renderMangaList = data => (
    <FixedSizeList
        height={window.innerHeight}
        itemCount={data.mangaList.length}
        itemSize={window.innerHeight * 1 / 3}
        width={window.innerWidth}

        // "itemData" props is passed to child as "data"
        // see @https://react-window.vercel.app/#/api/FixedSizeList
        itemData={data.mangaList}

        // use each manga's id as list's key
        // see @https://react-window.vercel.app/#/api/FixedSizeList
        itemKey={(i, data) => data[i].id}
    >
        {Row}
    </FixedSizeList>
); // <== "{}", instead of "()" and EROOOOOOOOR

// children function that return react functional components
// render parent's data using another component

const Row = ({ data, index, style }) => (
    <div style={style}>
        {MangaListView(data[index])}
    </div>
);

// this function receives single manga object from list

const MangaListView = ({
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
}) => {
    return (
        <div>
            <h1>{name}({otherNames})</h1>
            <p>by {author}</p>
            <img src={coverImagePath} alt={name} style={{ maxWidth: "20vw" }} />
            <div style={{ whiteSpace: "wrap", overflow: "scroll", textOverflow: "ellipsis" }}>{description}</div>
            <i>Relesed on: {publishedDate}</i>
            <p>{status}</p>
            <p>Translator: {uploadedBy}</p>
            <em>{views} views</em>
            <ul>
                {genereList.map((n, i) =>
                    <li key="{i}">{n}</li>)}
            </ul>
        </div>
    );
};