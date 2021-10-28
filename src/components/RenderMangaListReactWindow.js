import { FixedSizeList } from "react-window";

// I used FixedSizeList from "react-window" to render
// the data stored in state when scroll load

export const renderMangaList = data => (
    <FixedSizeList
        height={window.screen.availHeight} // fixed height on mobile screen
        itemCount={data.mangaList.length}
        itemSize={window.screen.height * 2 / 5}
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
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
            <img src={coverImagePath} alt={name} style={{ width: (window.screen.height * 2 / 5) * 2 / 5 }} />
            <p>{name}</p>
            <p>{otherNames}</p>
        </div>
    );
};