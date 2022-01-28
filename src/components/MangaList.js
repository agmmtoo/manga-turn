import Fetch from "./hooks/Fetch";
import renderMangaList from "./renderMangaList";
import { baseUrl, apiUrl, allManga } from "../api-endpoints";
import { ImSearch } from "react-icons/im";

export default function HomePage() {
    // I chose 1000 for fetch size, 
    // it may increase network load
    const uri = `${baseUrl}${apiUrl}${allManga}?size=1000`

    return (
        <>
            <Search />
            <Fetch
                uri={uri}
                renderSuccess={renderMangaList}
                renderLoading={MangaListLoading()}
                useCache={true}
            />
        </>
    );
};

const Search = () => <div className="my-7 mx-auto flex flex-row justify-center">
    <input
        type="text"
        placeholder="manga title/translator name"
        className="py-2 px-4 text-sm text-center w-4/5 max-w-sm rounded focus-shadow-outline leading-tight appearance-none border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 focus:outline-none focus:border-indigo-800 dark:focus:border-indigo-400"
    />
    <button onClick={() => console.log("search")}><ImSearch className="mx-2 hover:text-indigo-500" size={30} /></button>
</div>

export const MangaListLoading = () => {
    const items = new Array(8);
    return (
        <div className="my-6 grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
            {[...items].map((n, i) => <div key={i} className="my-6 w-40 h-72 skeleton"></div>)}
        </div>
    );
};