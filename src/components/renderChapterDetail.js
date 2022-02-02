import LazyLodad from "react-lazyload";

const renderChapterDetail = ({ chapter, pages }) => (
    <div className="chapterClass">
        {pages.map(renderPage)}
    </div>
);

const renderPage = page => (
    <div key={page.id} className="p-5 w-full max-w-md">
        <LazyLodad height={844}
            placeholder={<div className="skeleton" />}
            unmountIfInvisible={false}
            debounce={true}>
            <img src={page.contentPath} alt={page.pageNo} loading="lazy" />
        </LazyLodad>
    </div>
);

export default renderChapterDetail;