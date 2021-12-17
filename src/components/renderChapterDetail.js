const renderChapterDetail = ({ chapter, pages }) => (
    <div className="chapterClass">
        <h1>{chapter.chapterName}</h1>
        {pages.map(renderPage)}
    </div>
);

const renderPage = page => (
    <div key={page.id}>
        <p>{page.pageNo}</p>
        <img src={page.contentPath} alt={page.pageNo} loading="lazy" />
    </div>
);

export default renderChapterDetail;