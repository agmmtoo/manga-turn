import Fetch from "./hooks/Fetch";
import { getFavourite } from "../api-endpoints";
import renderMangaList from "./renderMangaList";
import { MangaListLoading } from "./MangaList";

const Home = () => {
    // const { token } = useDataContext();
    return (
        <>
            <div>
                <header>Welcome</header>
            </div>
            <div className="my-7 border-t border-gray-600 dark-border-gray-500">
                <div className="mt-7 text-center uppercase font-medium">Favourite Mangas</div>
                <Fetch
                    uri={`${getFavourite}`}
                    renderSuccess={renderMangaList}
                    renderLoading={MangaListLoading()}
                />
            </div>
        </>

    );
}

export default Home;